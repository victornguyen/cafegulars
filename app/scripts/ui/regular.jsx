var React = require('react');

var Regular = React.createClass({
    handleAddCup() {
        this.props.addCup(this.props.person.id);
    },

    handleRemoveCup() {
        this.props.removeCup(this.props.person.id);
    },

    render() {
        var person = this.props.person;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {person.name}
                        &nbsp;
                            <span className="badge pull-right">
                                {person.count}
                            </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group-vertical pull-right" role="group">
                        <button className="btn btn-default center-block" onClick={this.handleAddCup}>+</button>
                        <button className="btn btn-default center-block" onClick={this.handleRemoveCup}>-</button>
                    </div>
                    {person.order.type}<br/>
                    <span className="text-muted">{person.order.notes}</span>
                </div>
            </div>
        )
    }
});

module.exports = Regular;
