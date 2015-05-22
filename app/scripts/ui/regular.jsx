'use strict';

let React           = require('react'),
    classNames      = require('classnames'),
    RegularName     = require('./regular_name.jsx'),
    RegularOrder    = require('./regular_order.jsx'),
    RegularSugar    = require('./regular_sugar.jsx');

let Regular = React.createClass({
    propTypes: {
        person:         React.PropTypes.object.isRequired,
        peeps:          React.PropTypes.array.isRequired,
        freeCount:      React.PropTypes.number.isRequired,
        addCup:         React.PropTypes.func.isRequired,
        removeCup:      React.PropTypes.func.isRequired,
        addFreeCup:     React.PropTypes.func.isRequired,
        updateName:     React.PropTypes.func.isRequired,
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

    _updateName(newName) {
        this.props.updateName(this.props.person.id, newName);
    },

    _updateSugar() {
        console.log('gimme dat sugaarr');
    },

    _updateOrderType(newOrder) {
        this.props.updateOrderType(this.props.person.id, newOrder);
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
                <div className="panel-body">
                    <div className="btn-group-vertical pull-right" role="group">
                        { this.renderActions() }
                    </div>

                    <RegularName name={this.props.person.name} update={this._updateName} />
                    <RegularOrder order={this.props.person.order.type} update={this._updateOrderType} />
                    <RegularSugar count={this.props.person.order.sugar} update={this._updateSugar} />

                    <span className="text-muted">{this.props.person.order.notes}</span>

                    {
                        !this.state.hasFreeCoffee &&
                        <span className="badge pull-right">
                                {remainingCups} more { remainingCups < 2 ? 'coffee' : 'coffees' } to go!
                            </span>
                    }
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
    }
});

module.exports = Regular;
