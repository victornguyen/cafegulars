'use strict';

let React               = require('react/addons'),
    _                   = require('lodash'),
    RegularName         = require('./regular_name.jsx'),
    RegularOrder        = require('./regular_order.jsx'),
    RegularSugar        = require('./regular_sugar.jsx'),
    RegularStrength     = require('./regular_strength.jsx'),
    RegularCounter      = require('./regular_counter.jsx'),
    RegularActions      = require('../actions/regular_actions'),
    update              = React.addons.update;

class AddRegular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            canSubmit: false,
            hasFreeCoffee: false,
            person: {
                id: null,
                name: '',
                order: {
                    type: null,
                    sugar: 0,
                    strength: 'Normal',
                    notes: ''
                },
                coffees: {
                    count: 0,
                    purchased: 0,
                    free: 0
                },
                lastVisited: null,
                dateAdded: null
            }
        };

        this._close                 = this._close.bind(this);
        this._updateSubmitStatus    = this._updateSubmitStatus.bind(this);
        this._addCup                = this._addCup.bind(this);
        this._resetCount            = this._resetCount.bind(this);
        this._updateName            = this._updateName.bind(this);
        this._updateOrder           = this._updateOrder.bind(this);
        this._updateSugar           = this._updateSugar.bind(this);
        this._updateStrength        = this._updateStrength.bind(this);
        this._handleAddPerson       = this._handleAddPerson.bind(this);
    }

    // componentWillUpdate() {
    //     this.setState({
    //         hasFreeCoffee: this._getsFreeCoffee(this.state.person.coffees.count)
    //     })
    // }

    // TODO: this needs to live somewhere where AddRegular and Regular can access, Container component?
    _getsFreeCoffee(count) {
        return count === this.props.freeCount;
    }

    _close() {
        this.props.setAddPersonVisibility(false);
    }

    _updateSubmitStatus(canSubmit) {
        this.setState({ canSubmit: canSubmit });
    }

    _addCup() {
        let count = this.state.person.coffees.count + 1;
        this.setState({
            person: React.addons.update(this.state.person, {
                coffees: {
                    count:      { $set: count },
                    purchased:  { $set: count }
                }
            })
        });
    }

    _resetCount() {
        this.setState({
            person: React.addons.update(this.state.person, {
                coffees: {
                    count:      { $set: 0 },
                    purchased:  { $set: 0 }
                }
            })
        });
    }

    _updateName(name) {
        this.setState({
            person: update(this.state.person, {
                name: { $set: name }
            })
        });
    }

    _updateOrder(order) {
        this.setState({
            person: React.addons.update(this.state.person, {
                order: {
                    type: { $set: order }
                }
            })
        });
    }

    _updateSugar(count) {
        this.setState({
            person: update(this.state.person, {
                order: {
                    sugar: { $set: count }
                }
            })
        });
    }

    _updateStrength(strength) {
        this.setState({
            person: update(this.state.person, {
                order: {
                    strength: { $set: strength }
                }
            })
        });
    }

    _handleAddPerson() {
        RegularActions.addPerson(this.state.person);
        this._close();
    }

    render() {
        let addRegularProps = {
            addMode:            true,
            person:             this.state.person,
            freeCount:          this.props.freeCount,
            addCup:             this._addCup,
            addFreeCup:         this._resetCount,
            updateName:         this._updateName,
            updateSugar:        this._updateSugar,
            updateStrength:     this._updateStrength,
            updateOrderType:    this._updateOrder,

            updateSubmitStatus: this._updateSubmitStatus
        };

        let counterProps = {
            id:                 this.state.person.id,
            count:              this.state.person.coffees.count,
            freeCount:          this.props.freeCount,
            addCup:             this.props.addCup,
            removeCup:          this.props.removeCup,
            addFreeCup:         this.props.addFreeCup,
            hasFreeCoffee:      this.state.hasFreeCoffee
        };

        return (
            <div className="add-regular">

                <div className="regular regular--add panel panel-default">
                    <div className="panel-body">
                        <RegularName name={this.state.person.name} updateName={this._updateName} focusOnMount={true} updateSubmitStatus={this._updateSubmitStatus} />
                        <RegularOrder order={this.state.person.order.type} updateOrder={this._updateOrder} />
                        <RegularSugar count={this.state.person.order.sugar} updateSugar={this._updateSugar} />
                        <RegularStrength strength={this.state.person.order.strength} updateStrength={this._updateStrength} />
                        <RegularCounter {...counterProps} />
                    </div>
                </div>

                <div className="add-regular__actions">
                    <button className="add-regular__save btn btn-primary" onClick={this._handleAddPerson} disabled={!this.state.canSubmit}>
                        Add Regular
                    </button>
                    <button className="add-regular__cancel btn btn-default" onClick={this._close}>
                        Cancel
                    </button>
                </div>

            </div>

        )
    }

}

AddRegular.propTypes = {
    // add/new person specific props
    setAddPersonVisibility: React.PropTypes.func.isRequired,

    // cup methods
    freeCount:              React.PropTypes.number.isRequired,
    addCup:                 React.PropTypes.func.isRequired,
    removeCup:              React.PropTypes.func,
    addFreeCup:             React.PropTypes.func.isRequired
};

module.exports = AddRegular;
