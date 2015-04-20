'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx'),
    RegularList = require('./ui/regular_list.jsx'),
    PEEPS       = require('./peeps');


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
