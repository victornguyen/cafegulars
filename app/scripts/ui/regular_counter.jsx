'use strict';

var React = require('react');

class RegularCounter extends React.Component {

    constructor(props) {
        super(props);
        this._handleAddCup      = this._handleAddCup.bind(this);
        this._handleAddFreeCup  = this._handleAddFreeCup.bind(this);
    }

    _handleAddCup() {
        this.props.addCup();
    }

    _handleAddFreeCup() {
        this.props.addFreeCup();
    }

    render() {
        let remainingCups = this.props.freeCount - this.props.count;
        let actions;

        if (this.props.hasFreeCoffee) {
            actions = (
                <button className="regular-counter" onClick={this._handleAddFreeCup}>
                    FREE COFFEE!!!!!
                </button>
            )
        }
        else {
            actions = (
                <button className="regular-counter" onClick={this._handleAddCup}>
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
    count:          React.PropTypes.number.isRequired,
    freeCount:      React.PropTypes.number.isRequired,

    addCup:         React.PropTypes.func.isRequired,
    removeCup:      React.PropTypes.func,
    addFreeCup:     React.PropTypes.func.isRequired,

    hasFreeCoffee:  React.PropTypes.bool.isRequired
};

module.exports = RegularCounter;
