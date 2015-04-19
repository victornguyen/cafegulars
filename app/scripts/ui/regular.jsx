var React = require('react');

var Regular = React.createClass({
    handleAddCup() {
        this.props.addCup(this.props.person.id);
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
                    {person.order.type}<br/>
                    <span className="text-muted">{person.order.notes}</span>
                    <button className="btn btn-primary pull-right" onClick={this.handleAddCup}>+</button>
                </div>
            </div>
        )
    }
});

module.exports = Regular;
