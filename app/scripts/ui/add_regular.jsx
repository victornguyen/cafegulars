'use strict';

let React           = require('react/addons'),
    _               = require('lodash'),
    moment          = require('moment'),
    Regular         = require('./regular.jsx');

let AddRegular = React.createClass({
    propTypes: {
        // add/new person specific props
        setAddPersonVisibility: React.PropTypes.func.isRequired,

        // person props
        addPerson:              React.PropTypes.func.isRequired,
        removePerson:           React.PropTypes.func.isRequired,

        // cup methods
        freeCount:              React.PropTypes.number.isRequired,
        addCup:                 React.PropTypes.func.isRequired,
        removeCup:              React.PropTypes.func,
        addFreeCup:             React.PropTypes.func.isRequired,

        // update methods
        updateName:             React.PropTypes.func.isRequired,
        updateOrderType:        React.PropTypes.func.isRequired,
        updateSugar:            React.PropTypes.func.isRequired,
        updateStrength:         React.PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            canSubmit: false,
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
        }
    },

    _addPerson() {
        // TODO: ensure name and order type have values
        var newPerson = React.addons.update(this.state.person, {
            dateAdded: { $set: new Date().toISOString() }
        });
        this.props.addPerson(newPerson);
        this._close();
    },

    _close() {
        this.props.setAddPersonVisibility(false);
    },

    _updateSubmitStatus(canSubmit) {
        this.setState({ canSubmit: canSubmit });
    },

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
    },

    _resetCount() {
        this.setState({
            person: React.addons.update(this.state.person, {
                coffees: {
                    count:      { $set: 0 },
                    purchased:  { $set: 0 }
                }
            })
        });
    },

    _updateName(id, name) {
        this.setState({
            person: React.addons.update(this.state.person, {
                name: { $set: name }
            })
        });
    },

    _updateOrder(id, type) {
        this.setState({
            person: React.addons.update(this.state.person, {
                order: {
                    type: { $set: type }
                }
            })
        });
    },

    _updateSugar(id, sugar) {
        this.setState({
            person: React.addons.update(this.state.person, {
                order: {
                    sugar: { $set: sugar }
                }
            })
        });
    },

    _updateStrength(id, strength) {
        this.setState({
            person: React.addons.update(this.state.person, {
                order: {
                    strength: { $set: strength }
                }
            })
        });
    },

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

        return (
            <div className="add-regular">
                <Regular {...addRegularProps} />
                <div className="add-regular__actions">
                    <button className="add-regular__save btn btn-primary" onClick={this._addPerson} disabled={!this.state.canSubmit}>
                        Add Regular
                    </button>
                    <button className="add-regular__cancel btn btn-default" onClick={this._close}>
                        Cancel
                    </button>
                </div>
            </div>

        )
    }
});

module.exports = AddRegular;
