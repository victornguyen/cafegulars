'use strict';

import React, { Component, PropTypes } from 'react';
import { times } from 'lodash';
import { MAX_SUGAR } from 'constants/Settings';

import 'styles/regular-sugar';

class RegularSugar extends Component {
    static propTypes = {
        count:          PropTypes.number.isRequired,
        updateSugar:    PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // TODO: should this happen here? or in Action Creator? or in Reducer?
        const count = (this.props.count + 1 > MAX_SUGAR) ? 0 : this.props.count + 1;
        this.props.updateSugar(count);
    }

    render() {
        return (
            <button className="regular-sugar pull-left" onClick={this.handleClick}>
                <div className="regular-sugar__count">
                    {this.props.count}
                </div>
                <div className="regular-sugar__icons">
                    {this.renderSugarIcons(this.props.count)}
                </div>
            </button>
        );
    }

    renderSugarIcons(count) {
        if (count === 0) {
            return 'No Sugar';
        }
        return times(count, n => <span className="regular-sugar__icon glyphicon glyphicon-tint" aria-hidden="true" key={n}></span>);
    }
}

export default RegularSugar;
