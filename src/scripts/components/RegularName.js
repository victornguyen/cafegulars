'use strict';

import React, { Component, PropTypes } from 'react';

import 'styles/regular-name';

class RegularName extends Component {
    static propTypes = {
        name:               PropTypes.string.isRequired,
        updateName:         PropTypes.func.isRequired,

        // TODO: repurpose this for when new person is added
        focusOnMount:       PropTypes.bool
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

    _handleBlur = (e) => {
        let newName = e.currentTarget.value;
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
                    onBlur={this._handleBlur}
                />
            </h3>
        );
    }
}

export default RegularName;
