'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx'),
    RegularList = require('./ui/regular_list.jsx');


var PEEPS = [
    {
        id: 1,
        name: 'Vic',
        count: 3,
        order: {
            type: 'Long Black',
            sugar: 0,
            strength: 'Normal',
            notes: 'With a hint of morning mist. What.'
        },
        time: new Date().getHours() + '+' + new Date().getHours(),
        lastVisited: null
    },
    {
        id: 2,
        name: 'Lars',
        count: 6,
        order: {
            type: 'Espresso Martini',
            sugar: 3,
            strength: 'Strong',
            notes: ''
        },
        time: new Date().getHours() + '+' + new Date().getHours(),
        lastVisited: null
    }
];

var App = React.createClass({
    getInitialState() {
        return {
            peeps: PEEPS
        }
    },

    updatePerson(id, fn) {
        var newPeeps = this.state.peeps.map(function (person) {
            if (person.id === id) {
                fn.call(null, person);
            }
            return person;
        });

        this.setState({peeps:newPeeps});
    },

    addCupToId(id) {
        this.updatePerson(id, person => person.count++);
    },

    removeCupFromId(id) {
        this.updatePerson(id, person => {
            if (person.count > 0) {
                person.count--
            }
        })
    },

    render() {
        return (
            <div className="container">
                <Header />
                <RegularList peeps={ this.state.peeps } addCup={ this.addCupToId } removeCup={ this.removeCupFromId } />
            </div>
        );
    }
});


React.render(<App />, document.getElementById("app"));
