'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx'),
    AddRegular  = require('./ui/add_regular.jsx'),
    RegularList = require('./ui/regular_list.jsx');

const MOCK_DATA = require('./peeps');


let App = React.createClass({
    getInitialState() {
        let state;

        if ( localStorage[this.props.localStorageKey] ) {
            state = JSON.parse( localStorage[this.props.localStorageKey] );
        }
        else {
            state = {
                peeps:              MOCK_DATA,
                freeCount:          8,
                addPersonIsVisible: false,
                newPersonId:        null
            }
        }

        return state;
    },

    componentDidUpdate() {
        this.state.newPersonId = null;
        localStorage.cafegulars = JSON.stringify(this.state);
    },

    addPerson(person) {
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
    },

    removePerson(id) {
        this.setState({
            peeps: this.state.peeps.filter(person => person.id !== id)
        });
    },

    updatePerson(id, fn) {
        let newPeeps = this.state.peeps.map(person => {
            if (person.id === id) {
                fn.call(null, person);
            }
            return person;
        });

        this.setState({ peeps: newPeeps });
    },

    addCup(id) {
        this.updatePerson(id, person => {
            person.coffees.count++;
            person.coffees.purchased++;
        });
    },

    removeCup(id) {
        this.updatePerson(id, person => {
            if (person.coffees.count > 0) {
                person.coffees.count--;
                person.coffees.purchased--;
            }
        })
    },

    addFreeCup(id) {
        this.updatePerson(id, person => {
            person.coffees.count = 0;
            person.coffees.free++;
        })
    },

    setAddPersonVisibility(value) {
        this.setState({ addPersonIsVisible: value });
    },

    render() {
        let listProps = {
            peeps:          this.state.peeps,
            freeCount:      this.state.freeCount,
            addCup:         this.addCup,
            removeCup:      this.removeCup,
            addFreeCup:     this.addFreeCup,
            removePerson:   this.removePerson,
            newPersonId:    this.state.newPersonId
        };

        return (
            <div className="container">
                <Header
                    addPersonIsVisible={this.state.addPersonIsVisible}
                    setAddPersonVisibility={this.setAddPersonVisibility}
                />
                {
                    this.state.addPersonIsVisible &&
                    <AddRegular
                        addPerson={this.addPerson}
                        setAddPersonVisibility={this.setAddPersonVisibility}
                    />
                }
                <RegularList {...listProps} />
            </div>
        );
    }
});


React.render(<App localStorageKey="cafegulars" />, document.getElementById("app"));
