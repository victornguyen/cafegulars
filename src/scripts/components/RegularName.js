'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM          from 'react-dom';

import 'styles/regular-name';

class RegularName extends Component {
    static propTypes = {
        name:        PropTypes.string.isRequired,
        justAdded:   PropTypes.bool.isRequired,
        updateName:  PropTypes.func.isRequired,
        markAsAdded: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.justAdded) {
            this.refs.field.focus();
        }
    }

    handleKeyDown = (e) => {
        let field = this.refs.field;

        if (e.key === 'Enter') {
            field.blur();
        }
        else if (e.key === 'Escape') {
            field.value = this.props.name;
            field.blur();
        }
    }

    handleBlur = (e) => {
        const newName = e.currentTarget.value;
        if (newName !== this.props.name) {
            this.props.updateName(newName);
        }

        if (this.props.justAdded) {
            this.props.markAsAdded();
        }
    }

    render() {
        // TODO: change to controlled component so time travel works?
        return (
            <h3 className="regular-name">
                <input
                    className="regular-name__field"
                    ref="field"
                    type="text"
                    placeholder="Name"
                    defaultValue={this.props.name}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}
                />
            </h3>
        );
    }
}

export default RegularName;
