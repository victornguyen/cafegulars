'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM          from 'react-dom';
import RegularActions    from 'actions/RegularActions';

import 'styles/regular-name';

class RegularName extends Component {
    static propTypes = {
        person:         PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.person.justAdded) {
            ReactDOM.findDOMNode(this.refs.field).focus();
        }
    }

    _handleKeyDown = (e) => {
        let field = ReactDOM.findDOMNode(this.refs.field);

        if (e.key === 'Enter') {
            field.blur();
        }
        else if (e.key === 'Escape') {
            field.value = this.props.person.name;
            field.blur();
        }
    }

    _handleBlur = (e) => {
        let newName = e.currentTarget.value;
        if (newName !== this.props.person.name) {
            RegularActions.updateName(this.props.person.id, newName);
        }

        if (this.props.person.justAdded) {
            RegularActions.markAsAdded(this.props.person.id);
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
                    defaultValue={this.props.person.name}
                    onKeyDown={this._handleKeyDown}
                    onBlur={this._handleBlur}
                />
            </h3>
        );
    }
}

export default RegularName;
