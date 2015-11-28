import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import COFFEE_TYPES from 'data/coffee_types';

import 'react-select/scss/default';
import 'styles/regular-order';

class RegularOrder extends Component {
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

    handleChange = (newOrder) => {
        this.props.updateOrder(newOrder);
    }

    render() {
        return (
            <div className="regular-order">
                <Select
                    className="regular-order__select"
                    value={this.props.order || this.options[0]}
                    clearable={false}
                    simpleValue={true}
                    options={this.options}
                    onChange={this.handleChange}
                    placeholder="Select a coffee type..."
                />
            </div>
        );
    }
}

export default RegularOrder;
