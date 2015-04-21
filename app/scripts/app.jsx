'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx'),
    RegularList = require('./ui/regular_list.jsx'),
    PEEPS       = require('./peeps');


var App = React.createClass({
    getInitialState() {
        return {
            peeps: PEEPS,
            freeCount: 8
        }
    },

    updatePerson(id, fn) {
        var newPeeps = this.state.peeps.map(person => {
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

    render() {
        return (
            <div className="container">
                <Header />
                <RegularList peeps={this.state.peeps} addCup={this.addCup} removeCup={this.removeCup} addFreeCup={this.addFreeCup} freeCount={ this.state.freeCount } />
            </div>
        );
    }
});


React.render(<App />, document.getElementById("app"));
