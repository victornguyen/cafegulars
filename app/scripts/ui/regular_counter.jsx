'use strict';

var React = require('react');

var RegularCounter = React.createClass({
    propTypes: {
        id:             React.PropTypes.string.isRequired,
        count:          React.PropTypes.number.isRequired,
        freeCount:      React.PropTypes.number.isRequired,
        addCup:         React.PropTypes.func.isRequired,
        removeCup:      React.PropTypes.func.isRequired,
        addFreeCup:     React.PropTypes.func.isRequired,
        hasFreeCoffee:  React.PropTypes.bool.isRequired
    },

    render() {
        let remainingCups = this.props.freeCount - this.props.count;
        let actions;

        if (this.props.hasFreeCoffee) {
            actions = (
                <div className="regular-counter" onClick={this.props.addFreeCup.bind(null, this.props.id)}>
                    FREE COFFEE!!!!!
                </div>
            )
        }
        else {
            actions = (
                <div className="regular-counter" onClick={this.props.addCup.bind(null, this.props.id)}>
                    <div className="regular-counter__count">
                        {remainingCups}
                    </div>
                    { remainingCups < 2 ? 'coffee' : 'coffees' } to go!
                </div>
            )
        }

        return (
            <div className="pull-left">
                {actions}
            </div>
        )
    }
});

module.exports = RegularCounter;
