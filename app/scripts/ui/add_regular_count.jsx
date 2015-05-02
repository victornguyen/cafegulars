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
                <label className="sr-only">Count</label>
                <input className="form-control" type="number" min="0" placeholder="Count" onChange={this.changeValue} value={this.getValue()} />
            </div>
        )
    }
});

module.exports = AddRegularCount;
