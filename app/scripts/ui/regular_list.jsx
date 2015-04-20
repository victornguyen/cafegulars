var React   = require('react'),
    Regular = require('./regular.jsx');

var RegularList = React.createClass({

    render() {
        var _addCup     = this.props.addCup,
            _removeCup  = this.props.removeCup;

        var list = this.props.peeps.map(function (person) {
            return (
                <Regular key={person.id} person={person} addCup={_addCup} removeCup={_removeCup} />
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
