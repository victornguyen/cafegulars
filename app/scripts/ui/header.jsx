'use strict';

let React       = require('react'),
    classNames  = require('classnames'),
    Timer       = require('./timer.jsx');

class Header extends React.Component {

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
                    Cafegulars
                    <Timer />
                </h1>
            </div>
        )
    }
}

Header.propTypes = {
    addPersonIsVisible:     React.PropTypes.bool.isRequired,
    setAddPersonVisibility: React.PropTypes.func.isRequired
};

module.exports = Header;
