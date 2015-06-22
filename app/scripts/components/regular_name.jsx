'use strict';

import React, { Component, PropTypes } from 'react';

export default class RegularName extends Component {
    static propTypes = {
        name:               PropTypes.string.isRequired,
        updateName:         PropTypes.func.isRequired,

        // Optional AddRegular props
        focusOnMount:       PropTypes.bool,
        setSubmitStatus:    PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.focusOnMount) {
            React.findDOMNode(this.refs.field).focus();
        }
    }

    _handleKeyDown = (e) => {
        let field = React.findDOMNode(this.refs.field);

        if (e.key === 'Enter') {
            field.blur();
        }
        else if (e.key === 'Escape') {
            field.value = this.props.name;
            field.blur();
        }
    }

    _handleChange = () => {
        // TODO: this method only available when in addMode.. make this better
        if (this.props.setSubmitStatus) {
            let field = React.findDOMNode(this.refs.field);
            this.props.setSubmitStatus( field.value !== '' );
        }
    }

    _handleBlur = (e) => {
        let newName = e.currentTarget.value;

        // restore previous name if new name is empty
        if (newName === '') {
            e.currentTarget.value = this.props.name;
            this.props.setSubmitStatus( this.props.name !== '' );
            return;
        }

        if (newName !== this.props.name) {
            this.props.updateName(newName);
        }
    }

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
                    onChange={this._handleChange}
                    onBlur={this._handleBlur}
                />
            </h3>
        );
    }
}
