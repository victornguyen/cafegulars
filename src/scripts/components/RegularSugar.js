'use strict';

import React, { Component, PropTypes } from 'react';
import { getMaxSugar } from 'stores/SettingsStore';

const MAX_SUGAR = getMaxSugar();

class RegularSugar extends Component {
    static propTypes = {
        count:          PropTypes.number.isRequired,
        updateSugar:    PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    _handleSugarUpdate = () => {
        let count = (this.props.count + 1 > MAX_SUGAR) ? 0 : this.props.count + 1;
        this.props.updateSugar(count);
    }

    render() {
        let i     = this.props.count,
            sugar = [];

        if (i === 0) {
            sugar.push('No Sugar');
        }
        else {
            while(i--) {
                sugar.push(
                    <span className="regular-sugar__icon glyphicon glyphicon-tint" aria-hidden="true" key={i}></span>
                );
            }
        }

        return (
            <button className="regular-sugar pull-left" onClick={this._handleSugarUpdate}>
                <div className="regular-sugar__count">
                    {this.props.count}
                </div>
                <div className="regular-sugar__icons">
                    {sugar}
                </div>
            </button>
        );
    }
}

export default RegularSugar;
