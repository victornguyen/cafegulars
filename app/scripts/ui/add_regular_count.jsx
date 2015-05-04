'use strict';

var React   = require('react'),
    Formsy  = require('formsy-react');

var AddRegularCount = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue(e) {
        this.setValue(e.currentTarget.value);
    },

    render() {
        return (
            <div className="form-group" style={this.props.groupStyle}>
                <label style={this.props.groupStyle}>{this.props.name}: </label>
                <input className="form-control form-control--number" type="number" min="0" placeholder={this.props.name} onChange={this.changeValue} value={this.getValue()} />
            </div>
        )
    }
});

module.exports = AddRegularCount;
