'use strict';

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

const STRENGTHS = require('../coffee_strengths');

export default class RegularStrength extends Component {
    static propTypes = {
        strength:       PropTypes.string,
        updateStrength: PropTypes.func.isRequired
    }

    static defaultProps = {
        strength: 'Normal'
    }

    constructor(props) {
        super(props);
        this._handleStrengthUpdate = this._handleStrengthUpdate.bind(this);
    }

    _handleStrengthUpdate() {
        var index = _.indexOf(STRENGTHS, this.props.strength) + 1;

        if (index >= STRENGTHS.length) {
            index = 0;
        }

        this.props.updateStrength( STRENGTHS[index] );
    }

    render() {
        return (
            <button className="regular-sugar pull-left" onClick={this._handleStrengthUpdate}>
                <div className="regular-strength__type">
                    {this.props.strength}
                </div>
            </button>
        );
    }
}
