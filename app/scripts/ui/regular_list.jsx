'use strict';

var React   = require('react'),
    Regular = require('./regular.jsx');

var RegularList = React.createClass({

    render() {
        var _addCup     = this.props.addCup,
            _removeCup  = this.props.removeCup,
            _addFreeCup = this.props.addFreeCup,
            _freeCount  = this.props.freeCount;

        var list = this.props.peeps.map(function (person) {
            return (
                <Regular key={person.id} person={person} addCup={_addCup} removeCup={_removeCup} addFreeCup={_addFreeCup} freeCount={_freeCount} />
            )
        })

        return (
            <div>
                <h3>Regulars</h3>
                <div className="regulars_list">
                    {list}
                </div>
            </div>
        )
    }

});

module.exports = RegularList;
