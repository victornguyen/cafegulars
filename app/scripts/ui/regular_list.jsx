'use strict';

var React   = require('react'),
    Regular = require('./regular.jsx');

var RegularList = React.createClass({

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
