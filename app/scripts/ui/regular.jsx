'use strict';

var React = require('react');

var Regular = React.createClass({
    handleAddCup() {
        this.props.addCup(this.props.person.id);
    },

    handleRemoveCup() {
        this.props.removeCup(this.props.person.id);
    },

    handleFreeCoffee() {
        this.props.addFreeCup(this.props.person.id);
    },

    getsFreeCoffee() {
        return this.props.person.coffees.count === this.props.freeCount;
    },

    render() {
        var person = this.props.person;

        var buttons;
        if (this.getsFreeCoffee()) {
            buttons = (
                <div>
                    <button className="btn btn-primary btn-lge" onClick={this.handleFreeCoffee}>FREE COFFEE!</button>
                </div>
            )
        }
        else {
            buttons = (
                <div>
                    <button className="btn btn-default center-block" onClick={this.handleAddCup}>+</button>
                    <button className="btn btn-default center-block" onClick={this.handleRemoveCup}>-</button>
                </div>
            )
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {person.name}
                        &nbsp;
                            <span className="badge pull-right">
                                {this.props.freeCount - person.coffees.count} more coffees to go!
                            </span>
                        &nbsp;
                            <span className="badge pull-right">
                                {person.coffees.purchased} total coffees purchased
                            </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group-vertical pull-right" role="group">
                        {buttons}
                    </div>
                    {person.order.type}<br/>
                    <span className="text-muted">{person.order.notes}</span>
                </div>
            </div>
        )
    }
});

module.exports = Regular;
