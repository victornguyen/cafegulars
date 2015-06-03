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
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hasFreeCoffee: this._getsFreeCoffee(newProps.person.coffees.count)
        })
    }

    _getsFreeCoffee(count) {
        return count === this.props.freeCount;
    }

    _updateName(newName) {
        this.props.updateName(this.props.person.id, newName);
    }

    _updateSugar(newCount) {
        // TOOD: update AddRegular component to define new _updateSugar()
        // that doesn't hit up the Store, but updates its own internal state
        RegularActions.updateSugar(this.props.person.id, newCount);
    }

    _updateStrength(strength) {
        this.props.updateStrength(this.props.person.id, strength);
    }

    _updateOrderType(newOrder) {
        this.props.updateOrderType(this.props.person.id, newOrder);
    }

    _handleRemovePerson() {
        RegularActions.removePerson(this.props.person.id);
    }

    render() {
        let remainingCups = this.props.freeCount - this.props.person.coffees.count;

        let regularClasses = classNames({
            'regular panel':                true,
            'regular--add':                 this.props.addMode,
            'regular--free':                this.state.hasFreeCoffee,
            'panel-default':                this.props.newPersonId !== this.props.person.id,
            'regular--new panel-success':   this.props.newPersonId === this.props.person.id
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
            <div className={regularClasses}>
                <div className="panel-body">
                    <RegularName name={this.props.person.name} update={this._updateName} focusOnMount={this.props.addMode} updateSubmitStatus={this.props.updateSubmitStatus} />
                    <RegularOrder order={this.props.person.order.type} update={this._updateOrderType} />
                    <RegularSugar count={this.props.person.order.sugar} updateSugar={this._updateSugar} />
                    <RegularStrength strength={this.props.person.order.strength} updateStrength={this._updateStrength} />
                    <RegularCounter {...counterProps} />
                </div>
                {
                    !this.props.addMode &&
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
                }
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
    addCup:             React.PropTypes.func.isRequired,
    removeCup:          React.PropTypes.func,
    addFreeCup:         React.PropTypes.func.isRequired,

    // update methods
    updateName:         React.PropTypes.func.isRequired,
    updateOrderType:    React.PropTypes.func.isRequired,

    // Add Person specific
    addMode:            React.PropTypes.bool,
    updateSubmitStatus: React.PropTypes.func
};

module.exports = Regular;
