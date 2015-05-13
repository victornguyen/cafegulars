'use strict';

var React = require('react');

var RegularName = React.createClass({
    propTypes: {
        name:   React.PropTypes.string,
        update: React.PropTypes.func.isRequired
    },

    _handleKeyDown(e) {
        let field = React.findDOMNode(this.refs.field);

        if (e.key === "Enter") {
            field.blur();
        }
        else if (e.key === 'Escape') {
            field.value = this.props.name;
            field.blur();
        }
    },

    _updateName(e) {
        let newName = e.currentTarget.value;
        if (newName !== this.props.name) {
            this.props.update(newName);
        }
    },

    render() {
        return (
            <h3 className="regular-name">
                <input
                    className="regular-name__field"
                    ref="field"
                    type="text"
                    placeholder="Name"
                    defaultValue={this.props.name}
                    onKeyDown={this._handleKeyDown}
                    onBlur={this._updateName}
                />
            </h3>
        )
    }
});

module.exports = RegularName;
