'use strict';

import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

const COFFEE_TYPES = require('../coffee_types.json');

export default class RegularOrder extends Component {
    static propTypes = {
        order:          PropTypes.string,
        updateOrder:    PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Coerce COFFEE_TYPES into react-select options structure
        this.options = COFFEE_TYPES.map(type => {
            return {
                value: type,
                label: type
            };
        });
    }

    _handleOrderUpdate = (newOrder) => {
        this.props.updateOrder(newOrder);
    }

    render() {
        return (
            <div className="regular-order">
                <Select
                    className="regular-order__select"
                    value={this.props.order || this.options[0]}
                    clearable={false}
                    options={this.options}
                    onChange={this._handleOrderUpdate}
                    placeholder="Select a coffee type..."
                />
            </div>
        );
    }
}
