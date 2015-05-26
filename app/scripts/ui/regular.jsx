'use strict';

let React           = require('react'),
    classNames      = require('classnames'),
    RegularName     = require('./regular_name.jsx'),
    RegularOrder    = require('./regular_order.jsx'),
    RegularSugar    = require('./regular_sugar.jsx'),
    RegularCounter  = require('./regular_counter.jsx');

let Regular = React.createClass({
    propTypes: {
        person:             React.PropTypes.object.isRequired,
        peeps:              React.PropTypes.array.isRequired,
        freeCount:          React.PropTypes.number.isRequired,
        addCup:             React.PropTypes.func.isRequired,
        removeCup:          React.PropTypes.func.isRequired,
        addFreeCup:         React.PropTypes.func.isRequired,
        updateName:         React.PropTypes.func.isRequired,
        updateOrderType:    React.PropTypes.func.isRequired,
        updateSugar:        React.PropTypes.func.isRequired,
        removePerson:       React.PropTypes.func.isRequired,
        newPersonId:        React.PropTypes.string
    },

    getInitialState() {
        return {
            hasFreeCoffee: this._getsFreeCoffee()
        }
    },

    componentWillReceiveProps() {
        this.setState({
            hasFreeCoffee: this._getsFreeCoffee()
        })
    },

    _getsFreeCoffee() {
        return this.props.person.coffees.count === this.props.freeCount;
    },

    _updateName(newName) {
        this.props.updateName(this.props.person.id, newName);
    },

    _updateSugar(newCount) {
        this.props.updateSugar(this.props.person.id, newCount);
    },

    _updateOrderType(newOrder) {
        this.props.updateOrderType(this.props.person.id, newOrder);
    },

    render() {
        let remainingCups = this.props.freeCount - this.props.person.coffees.count;

        let panelClasses = classNames({
            'panel':            true,
            'panel-default':    this.props.newPersonId !== this.props.person.id,
            'panel-success':    this.props.newPersonId === this.props.person.id
        });

        // TODO: hmm, is there a better way of doing this
        let counterProps = {
            id:                 this.props.person.id,
            count:              this.props.person.coffees.count,
            freeCount:          this.props.freeCount,
            addCup:             this.props.addCup,
            removeCup:          this.props.removeCup,
            addFreeCup:         this.props.addFreeCup,
            hasFreeCoffee:      this.state.hasFreeCoffee
        };

        return (
            <div className={panelClasses}>
                <div className="panel-body">
                    <RegularName name={this.props.person.name} update={this._updateName} />
                    <RegularOrder order={this.props.person.order.type} update={this._updateOrderType} />
                    <RegularSugar count={this.props.person.order.sugar} update={this._updateSugar} />
                    <RegularCounter {...counterProps} />
                </div>
                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-xs" onClick={ this.props.removePerson.bind(null, this.props.person.id) }>Remove</button>
                    <span className="small pull-right">
                         { this.props.person.coffees.purchased === 1 ? 'Coffee' : 'Coffees' } purchased: {this.props.person.coffees.purchased}
                    </span>
                </div>
            </div>
        )
    }

});

module.exports = Regular;
