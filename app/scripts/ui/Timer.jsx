'use strict';

var React = require('react');

var Timer = React.createClass({
    getInitialState() {
        return {secondsElapsed: 0};
    },

    tick() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount() {
        clearInterval(this.interval);
    },

    render() {
        return (
            <small>
                &nbsp;
                <span className="glyphicon glyphicon-time"></span>
                &nbsp;
                {this.state.secondsElapsed}
            </small>
        );
    }
});


module.exports = Timer;
