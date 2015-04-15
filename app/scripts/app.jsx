'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx');


var App = React.createClass({
    getInitialState() {
        return {
            people: []
        };
    },

    render() {
        return (
            <div className="container">
                <Header />
            </div>
        );
    }
});


React.render(<App />, document.getElementById("app"));
