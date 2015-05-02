'use strict';

var React   = require('react'),
    Formsy  = require('formsy-react');

var AddRegularName = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue(e) {
        this.setValue(e.currentTarget.value);
    },

    render() {
        return (
            <div className="form-group" style={this.props.groupStyle}>
                <label className="sr-only">Name</label>
                <input className="form-control" type="text" placeholder="Name" onChange={this.changeValue} value={this.getValue()} />
            </div>
        )
    }
});

module.exports = AddRegularName;
