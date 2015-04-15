'use strict';

var React = require('react'),
    Timer = require('./timer.jsx');

var Header = React.createClass({
    render() {
        return (
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li><a href="#">Add Person</a></li>
                    <li><a href="#">Settings</a></li>
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
