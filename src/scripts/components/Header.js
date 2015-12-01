import React, { Component, PropTypes } from 'react';
import Timer from 'components/Timer';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
    static propTypes = {
        addRegular: PropTypes.func.isRequired,
        clearRegulars: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li>
                      <IndexLink to="/">Home</IndexLink>
                    </li>
                    <li>
                        <a
                            className="btn btn-default"
                            onClick={this.props.addRegular}>
                            Add Person
                        </a>
                    </li>
                    <li>
                        <a
                            className="btn btn-default"
                            onClick={this.props.clearRegulars}>
                            Clear List
                        </a>
                    </li>
                    <li>
                        <Link
                          className="btn btn-default"
                          activeClassName="btn-primary"
                          to="/settings"
                        >
                          Settings
                        </Link>
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
