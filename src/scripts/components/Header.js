'use strict';

import React, { Component } from 'react';
import Timer           from 'components/Timer';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li>
                        <button
                            className="btn btn-primary"
                            onClick={this.props.addRegular}>
                            Add Person
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn btn-default"
                            onClick={this.props.clearRegulars}>
                            Clear List
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
