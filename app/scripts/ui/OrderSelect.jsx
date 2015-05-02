'use strict';

var React = require('react');

const COFFEE_TYPES = require('../coffee_types.json');


var OrderSelect = React.createClass({
    componentWillMount() {
        this.coffeeTypes = COFFEE_TYPES;
    },

    render() {
        return (
            <div>
                <label className="sr-only">Order!</label>
                <select ref="order" className="form-control">
                    { this.coffeeTypes.map(type => <option value={type}>{type}</option>) }
                </select>
            </div>
        )
    }
});

module.exports = OrderSelect;
