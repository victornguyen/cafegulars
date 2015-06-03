'use strict';

let React               = require('react'),
    moment              = require('moment'),
    classNames          = require('classnames'),
    RegularName         = require('./regular_name.jsx'),
    RegularOrder        = require('./regular_order.jsx'),
    RegularSugar        = require('./regular_sugar.jsx'),
    RegularStrength     = require('./regular_strength.jsx'),
    RegularCounter      = require('./regular_counter.jsx'),
    RegularActions      = require('../actions/regular_actions');

class Regular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasFreeCoffee: this._getsFreeCoffee(this.props.person.coffees.count)
        };

        this._getsFreeCoffee        = this._getsFreeCoffee.bind(this);
        this._updateName            = this._updateName.bind(this);
        this._updateSugar           = this._updateSugar.bind(this);
        this._updateStrength        = this._updateStrength.bind(this);
        this._updateOrderType       = this._updateOrderType.bind(this);
        this._handleRemovePerson    = this._handleRemovePerson.bind(this);
        this._addCup                = this._addCup.bind(this);
        this._addFreeCup            = this._addFreeCup.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hasFreeCoffee: this._getsFreeCoffee(newProps.person.coffees.count)
        })
    }

    // TODO: this needs to live somewhere where AddRegular and Regular can access, Container component?
    _getsFreeCoffee(count) {
        return count === this.props.freeCount;
    }

    _addCup() {
        RegularActions.addCup(this.props.person.id);
    }

    _addFreeCup() {
        RegularActions.addFreeCup(this.props.person.id);
    }

    _updateName(name) {
        RegularActions.updateName(this.props.person.id, name);
    }

    _updateSugar(newCount) {
        RegularActions.updateSugar(this.props.person.id, newCount);
    }

    _updateStrength(strength) {
        RegularActions.updateStrength(this.props.person.id, strength);
    }

    _updateOrderType(order) {
        RegularActions.updateOrder(this.props.person.id, order);
    }

    _handleRemovePerson() {
        RegularActions.removePerson(this.props.person.id);
    }

    render() {
        let remainingCups = this.props.freeCount - this.props.person.coffees.count;

        let regularClasses = classNames({
            'regular panel':                true,
            'regular--free':                this.state.hasFreeCoffee,
            'panel-default':                this.props.newPersonId !== this.props.person.id,
            'regular--new panel-success':   this.props.newPersonId === this.props.person.id
        });

        // TODO: hmm, is there a better way of doing this
        let counterProps = {
            id:                 this.props.person.id,
            freeCount:          this.props.freeCount,

            count:              this.props.person.coffees.count,
            addCup:             this._addCup,
            removeCup:          this.props.removeCup,
            addFreeCup:         this._addFreeCup,

            hasFreeCoffee:      this.state.hasFreeCoffee
        };

        return (
            <div className={regularClasses}>

                <div className="panel-body">
                    <RegularName name={this.props.person.name} updateName={this._updateName} />
                    <RegularOrder order={this.props.person.order.type} updateOrder={this._updateOrderType} />
                    <RegularSugar count={this.props.person.order.sugar} updateSugar={this._updateSugar} />
                    <RegularStrength strength={this.props.person.order.strength} updateStrength={this._updateStrength} />
                    <RegularCounter {...counterProps} />
                </div>

                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-xs" onClick={this._handleRemovePerson}>Remove</button>
                    <span className="small pull-right">
                         Added { moment(this.props.person.dateAdded).fromNow() }
                    </span>
                    <span className="small pull-right">
                         Coffees purchased: {this.props.person.coffees.purchased}
                         &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>

            </div>
        )
    }

}

Regular.propTypes = {
    // person props
    person:             React.PropTypes.object.isRequired,
    newPersonId:        React.PropTypes.string,

    // cup methods
    freeCount:          React.PropTypes.number.isRequired,
    removeCup:          React.PropTypes.func
};

module.exports = Regular;
