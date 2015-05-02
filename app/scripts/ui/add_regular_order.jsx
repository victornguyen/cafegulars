'use strict';

var React   = require('react'),
    Formsy  = require('formsy-react');

const COFFEE_TYPES = require('../coffee_types.json');


var OrderSelect = React.createClass({
    mixins: [Formsy.Mixin],

    componentWillMount() {
        this.coffeeTypes = COFFEE_TYPES;
    },

    componentDidMount() {
        // Set initial value to first coffee type in list
        this.setValue(this.coffeeTypes[0]);
    },

    changeValue(e) {
        this.setValue(e.currentTarget.value);
    },

    render() {
        return (
            <div className="form-group" style={this.props.groupStyle}>
                <label className="sr-only">Order!</label>
                <select ref="order" className="form-control" onChange={this.changeValue}>
                    { this.coffeeTypes.map(type => <option value={type}>{type}</option>) }
                </select>
            </div>
        )
    }
});

module.exports = OrderSelect;
