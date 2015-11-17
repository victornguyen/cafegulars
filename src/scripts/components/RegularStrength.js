'use strict';

import React, { Component, PropTypes } from 'react';
import { indexOf } from 'lodash';

import STRENGTHS from 'data/coffee_strengths';

class RegularStrength extends Component {
    static propTypes = {
        strength:       PropTypes.string,
        updateStrength: PropTypes.func.isRequired
    }

    static defaultProps = {
        strength: 'Normal'
    }

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        let index = indexOf(STRENGTHS, this.props.strength) + 1;
        index = (index >= STRENGTHS.length) ? 0 : index;

        this.props.updateStrength( STRENGTHS[index] );
    }

    render() {
        return (
            <button className="regular-sugar pull-left" onClick={this.handleClick}>
                <div className="regular-strength__type">
                    {this.props.strength}
                </div>
            </button>
        );
    }
}

export default RegularStrength;
