'use strict';

var React = require('react');

var Regular = React.createClass({
    getInitialState() {
        return {
            hasFreeCoffee: this.getsFreeCoffee()
        }
    },

    componentWillReceiveProps() {
        this.setState({
            hasFreeCoffee: this.getsFreeCoffee()
        })
    },

    getsFreeCoffee() {
        return this.props.person.coffees.count === this.props.freeCount;
    },

    render() {
        var remainingCups = this.props.freeCount - this.props.person.coffees.count;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.person.name}
                        {
                            !this.state.hasFreeCoffee &&
                            <span className="badge pull-right">
                                {remainingCups} more { remainingCups < 2 ? 'coffee' : 'coffees' } to go!
                            </span>
                        }
                        <span className="badge pull-right">
                            {this.props.person.coffees.purchased} total { this.props.person.coffees.purchased === 1 ? 'coffee' : 'coffees' } purchased
                        </span>
                    </h3>

                </div>
                <div className="panel-body">
                    <div className="btn-group-vertical pull-right" role="group">
                        { this.renderActions() }
                    </div>
                    {this.props.person.order.type}<br/>
                    <span className="text-muted">{this.props.person.order.notes}</span>
                </div>
            </div>
        )
    },

    renderActions() {
        var actions;

        if (this.state.hasFreeCoffee) {
            actions = (
                <div>
                    <button
                        className="btn btn-primary btn-lge"
                        onClick={this.props.addFreeCup.bind(null, this.props.person.id)}>
                        FREE COFFEE!!!!!
                    </button>
                </div>
            )
        }
        else {
            actions = (
                <div>
                    <button
                        className="btn btn-default center-block"
                        onClick={this.props.addCup.bind(null, this.props.person.id)}
                        >
                        ++
                    </button>
                    <button
                        className="btn btn-default center-block"
                        onClick={this.props.removeCup.bind(null, this.props.person.id)}
                        >
                        --
                    </button>
                </div>
            )
        }

        return actions;
    }
});

module.exports = Regular;
