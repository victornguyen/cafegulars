'use strict';

var React = require('react');

var RegularName = React.createClass({
    propTypes: {
        name:               React.PropTypes.string,
        update:             React.PropTypes.func.isRequired,
        focusOnMount:       React.PropTypes.bool,
        updateSubmitStatus: React.PropTypes.func
    },

    componentDidMount() {
        if (this.props.focusOnMount) {
            React.findDOMNode(this.refs.field).focus();
        }
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

    _setSubmitStatus(e) {
        let field = React.findDOMNode(this.refs.field);
        this.props.updateSubmitStatus( field.value !== '' );
    },

    _updateName(e) {
        let newName = e.currentTarget.value;

        // restore previous name if new name is empty
        if (newName === '') {
            e.currentTarget.value = this.props.name;
            return;
        }

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
                    onChange={this._setSubmitStatus}
                    onBlur={this._updateName}
                />
            </h3>
        )
    }
});

module.exports = RegularName;
