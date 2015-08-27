'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Timer from './Timer';

export default class Header extends Component {
    static propTypes = {
        addPersonIsVisible:     PropTypes.bool.isRequired,
        setAddPersonVisibility: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let settingsClasses = classNames({
            'btn btn-primary': true,
            'active': this.props.addPersonIsVisible
        });

        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li>
                        <button
                            className={settingsClasses}
                            onClick={this.props.setAddPersonVisibility.bind(null, !this.props.addPersonIsVisible)}
                            >
                            Add Person
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-default">
                            Settings
                        </button>
                    </li>
                </ul>

                <h1 className="text-muted">
                    Cafegulars ☕️
                    <Timer />
                </h1>
            </div>
        );
    }
}
