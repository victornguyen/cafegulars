'use strict';

var React       = window.React = require('react'),
    Header      = require('./ui/header.jsx'),
    AddRegular  = require('./ui/add_regular.jsx'),
    RegularList = require('./ui/regular_list.jsx');

const MOCK_DATA = require('./peeps');


let App = React.createClass({
    getInitialState() {
        return {
            peeps:              this.props.data,
            freeCount:          8,
            addPersonIsVisible: false
        }
    },

    addPerson(person) {
        this.setState({
            peeps: this.state.peeps.concat(person)
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
            peeps:      this.state.peeps,
            freeCount:  this.state.freeCount,
            addCup:     this.addCup,
            removeCup:  this.removeCup,
            addFreeCup: this.addFreeCup
        };

        return (
            <div className="container">
                <Header addPersonIsVisible={this.state.addPersonIsVisible} setAddPersonVisibility={this.setAddPersonVisibility} />
                { this.state.addPersonIsVisible && <AddRegular addPerson={this.addPerson} /> }
                <RegularList {...listProps} />
            </div>
        );
    }
});


React.render(<App data={MOCK_DATA} />, document.getElementById("app"));
