'use strict';

let React           = window.React = require('react'),
    Header          = require('./ui/header.jsx'),
    AddRegular      = require('./ui/add_regular.jsx'),
    RegularList     = require('./ui/regular_list.jsx'),
    RegularStore    = require('./stores/regular_store');


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peeps:              RegularStore.getPeeps(),

            // TODO: to settings store
            freeCount:          8,

            // doesn't need to be in a store...
            addPersonIsVisible: false,
            newPersonId:        null
        };

        this._onChange                   = this._onChange.bind(this);
        this._addPerson                  = this._addPerson.bind(this);
        this._updatePerson               = this._updatePerson.bind(this);
        this._addCup                     = this._addCup.bind(this);
        this._removeCup                  = this._removeCup.bind(this);
        this._addFreeCup                 = this._addFreeCup.bind(this);
        this._updateName                 = this._updateName.bind(this);
        this._updateOrderType            = this._updateOrderType.bind(this);
        this._updateSugar                = this._updateSugar.bind(this);
        this._updateStrength             = this._updateStrength.bind(this);
        this._setAddPersonVisibility     = this._setAddPersonVisibility.bind(this);
    }

    componentWillMount() {
        RegularStore.addChangeListener(this._onChange);
    }

    componentDidUpdate() {
        this.state.newPersonId = null;
        // localStorage.cafegulars = JSON.stringify(this.state);
    }

    componentWillUnmount() {
        RegularStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            peeps: RegularStore.getPeeps()
        });
    }

    _addPerson(person) {
        var _generateId = function () {
            // https://gist.github.com/gordonbrander/2230317
            return '_' + Math.random().toString(36).substr(2, 9);
        };

        person.id = _generateId();

        let newPeeps = this.state.peeps.slice();
        newPeeps.unshift(person);

        this.setState({
            peeps: newPeeps,
            newPersonId: person.id
        });
    }

    _updatePerson(id, fn) {
        let newPeeps = this.state.peeps.map(person => {
            if (person.id === id) {
                fn.call(null, person);
            }
            return person;
        });

        this.setState({ peeps: newPeeps });
    }

    _addCup(id) {
        this._updatePerson(id, person => {
            person.coffees.count++;
            person.coffees.purchased++;
        });
    }

    _removeCup(id) {
        this._updatePerson(id, person => {
            if (person.coffees.count > 0) {
                person.coffees.count--;
                person.coffees.purchased--;
            }
        })
    }

    _addFreeCup(id) {
        this._updatePerson(id, person => {
            person.coffees.count = 0;
            person.coffees.free++;
        })
    }

    _updateName(id, name) {
        this._updatePerson(id, person => person.name = name);
    }

    _updateOrderType(id, type) {
        this._updatePerson(id, person => person.order.type = type);
    }

    _updateSugar(id, sugar) {
        this._updatePerson(id, person => person.order.sugar = sugar);
    }

    _updateStrength(id, strength) {
        this._updatePerson(id, person => person.order.strength = strength);
    }

    _setAddPersonVisibility(value) {
        this.setState({ addPersonIsVisible: value });
    }

    render() {
        let listProps = {
            peeps:              this.state.peeps,
            freeCount:          this.state.freeCount,
            addCup:             this._addCup,
            removeCup:          this._removeCup,
            addFreeCup:         this._addFreeCup,
            updateName:         this._updateName,
            updateOrderType:    this._updateOrderType,
            updateSugar:        this._updateSugar,
            updateStrength:     this._updateStrength,
            newPersonId:        this.state.newPersonId
        };

        return (
            <div className="container">
                <Header
                    addPersonIsVisible={this.state.addPersonIsVisible}
                    setAddPersonVisibility={this._setAddPersonVisibility}
                />
                {
                    this.state.addPersonIsVisible &&
                    <AddRegular
                        {...listProps}
                        addPerson={this._addPerson}
                        setAddPersonVisibility={this._setAddPersonVisibility}
                    />
                }
                <RegularList {...listProps} />
            </div>
        );
    }
}


React.render(<App localStorageKey="cafegulars" />, document.getElementById("app"));
