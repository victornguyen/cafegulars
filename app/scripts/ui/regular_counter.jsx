'use strict';

var React = require('react');

class RegularCounter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let remainingCups = this.props.freeCount - this.props.count;
        let actions;

        if (this.props.hasFreeCoffee) {
            actions = (
                <button className="regular-counter" onClick={this.props.addFreeCup.bind(null, this.props.id)}>
                    FREE COFFEE!!!!!
                </button>
            )
        }
        else {
            actions = (
                <button className="regular-counter" onClick={this.props.addCup.bind(null, this.props.id)}>
                    <div className="regular-counter__count">
                        {remainingCups}
                    </div>
                    { remainingCups < 2 ? 'coffee' : 'coffees' } to go!
                </button>
            )
        }

        return (
            <div className="pull-left">
                {actions}
            </div>
        )
    }
}

RegularCounter.propTypes = {
    id:             React.PropTypes.string,
    count:          React.PropTypes.number.isRequired,
    freeCount:      React.PropTypes.number.isRequired,
    addCup:         React.PropTypes.func.isRequired,
    removeCup:      React.PropTypes.func,
    addFreeCup:     React.PropTypes.func.isRequired,
    hasFreeCoffee:  React.PropTypes.bool.isRequired
};

module.exports = RegularCounter;
