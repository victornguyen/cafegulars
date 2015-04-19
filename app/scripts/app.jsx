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

    addCupToId(id) {
        var newPeeps = this.state.peeps.map(function (person) {
            if (person.id === id) {
                person.count++;
            }
            return person;
        })

        this.setState({peeps:newPeeps});
    },

    render() {
        return (
            <div className="container">
                <Header />
                <RegularList peeps={ this.state.peeps } addCup={ this.addCupToId } />
            </div>
        );
    }
});


React.render(<App />, document.getElementById("app"));
