'use strict';

let React   = require('react'),
    Regular = require('./regular.jsx');

let RegularList = React.createClass({
    propTypes: {
        peeps:          React.PropTypes.array.isRequired,
        freeCount:      React.PropTypes.number.isRequired,
        addCup:         React.PropTypes.func.isRequired,
        removeCup:      React.PropTypes.func.isRequired,
        addFreeCup:     React.PropTypes.func.isRequired,
        removePerson:   React.PropTypes.func.isRequired,
        newPersonId:    React.PropTypes.string
    },

    render() {
        return (
            <div>
                <h3>Regulars</h3>
                <div className="regulars_list">
                    { this.renderList() }
                </div>
            </div>
        )
    },

    renderList() {
        return this.props.peeps.map(person => {
            return (
                <Regular key={person.id} person={person} {...this.props} />
            )
        });
    }
});

module.exports = RegularList;
