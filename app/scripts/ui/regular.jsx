'use strict';

let React       = require('react'),
    classNames  = require('classnames');

let Regular = React.createClass({
    propTypes: {
        person:         React.PropTypes.object.isRequired,
        peeps:          React.PropTypes.array.isRequired,
        freeCount:      React.PropTypes.number.isRequired,
        addCup:         React.PropTypes.func.isRequired,
        removeCup:      React.PropTypes.func.isRequired,
        addFreeCup:     React.PropTypes.func.isRequired,
        removePerson:   React.PropTypes.func.isRequired,
        newPersonId:    React.PropTypes.string
    },

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
        let remainingCups = this.props.freeCount - this.props.person.coffees.count;

        let panelClasses = classNames({
            'panel': true,
            'panel-default': this.props.newPersonId !== this.props.person.id,
            'panel-success': this.props.newPersonId === this.props.person.id
        });

        return (
            <div className={panelClasses}>
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.person.name}
                        {
                            !this.state.hasFreeCoffee &&
                            <span className="badge pull-right">
                                {remainingCups} more { remainingCups < 2 ? 'coffee' : 'coffees' } to go!
                            </span>
                        }

                    </h3>

                </div>
                <div className="panel-body">
                    <div className="btn-group-vertical pull-right" role="group">
                        { this.renderActions() }
                    </div>
                    <p>{this.props.person.order.type}</p>
                    <p>
                        { this.renderSugar() }
                    </p>
                    <span className="text-muted">{this.props.person.order.notes}</span>
                </div>
                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-xs" onClick={ this.props.removePerson.bind(null, this.props.person.id) }>Remove</button>
                    <span className="small pull-right">
                         { this.props.person.coffees.purchased === 1 ? 'Coffee' : 'Coffees' } purchased: {this.props.person.coffees.purchased}
                    </span>
                </div>
            </div>
        )
    },

    renderActions() {
        let actions;

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
    },

    renderSugar() {
        // TODO: there must be a more terse way of doing this?
        
        var sugars = [];

        for (let i = 0; i < this.props.person.order.sugar; i++) {
            sugars.push(
                <span className="glyphicon glyphicon-tint" aria-hidden="true"></span>
            );
        }

        return sugars;
    }
});

module.exports = Regular;
