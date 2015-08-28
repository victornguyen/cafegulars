'use strict';

import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsElapsed: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this._tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _tick = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }

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
}

export default Timer;
