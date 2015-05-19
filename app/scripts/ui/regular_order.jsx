'use strict';

var React = require('react'),
    Select = require('react-select');

const COFFEE_TYPES = require('../coffee_types.json');


var RegularOrder = React.createClass({
    propTypes: {
        order:  React.PropTypes.string,
        update: React.PropTypes.func.isRequired
    },

    componentWillMount() {
        // Coerce types in react-select options structure
        this.options = COFFEE_TYPES.map(type => {
            return {
                value: type,
                label: type
            }
        });
    },

    _handleChange(newOrder) {
        this.props.update(newOrder);
    },

    render() {
        return (
            <div className="regular-order">
                <Select
                    className="regular-order__select"
                    value={this.props.order || null}
                    clearable={false}
                    options={this.options}
                    onChange={this._handleChange}
                    placeholder="Select a coffee type..."
                />
            </div>
        )
    }
});

module.exports = RegularOrder;
