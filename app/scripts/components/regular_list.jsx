'use strict';

let React   = require('react'),
    Regular = require('./regular.jsx');

class RegularList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Regulars</h3>
                <div className="regulars_list">
                    { this.renderList() }
                </div>
            </div>
        )
    }

    renderList() {
        return this.props.peeps.map(person => {
            return (
                <Regular key={person.id} person={person} {...this.props} />
            )
        });
    }
}

RegularList.propTypes = {
    peeps:              React.PropTypes.array.isRequired,
    freeCount:          React.PropTypes.number.isRequired,
    newPersonId:        React.PropTypes.string
};

module.exports = RegularList;
