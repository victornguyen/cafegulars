'use strict';

import React, { Component } from 'react';
import Timer           from 'components/Timer';
import RegularActions  from 'actions/RegularActions';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    _handleAddPerson() {
        RegularActions.addPerson();
    }

    render() {
        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li>
                        <button
                            className="btn btn-primary"
                            onClick={this._handleAddPerson}>
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

export default Header;
