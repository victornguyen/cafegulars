'use strict';

var React       = require('react'),
    classNames  = require('classnames'),
    Timer       = require('./timer.jsx');

var Header = React.createClass({
    propTypes: {
        addPersonIsVisible:     React.PropTypes.bool.isRequired,
        setAddPersonVisibility: React.PropTypes.func.isRequired
    },

    render() {
        var settingsClasses = classNames({
            'btn btn-default': true,
            'active': this.props.addPersonIsVisible
        });

        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li><a href="#" className={settingsClasses} onClick={this.props.setAddPersonVisibility.bind(null, !this.props.addPersonIsVisible)}>Add Person</a></li>
                    <li><a href="#" className="btn btn-default">Settings</a></li>
                </ul>

                <h1 className="text-muted">
                    Cafegulars
                    <Timer />
                </h1>
            </div>
        )
    }
});

module.exports = Header;
