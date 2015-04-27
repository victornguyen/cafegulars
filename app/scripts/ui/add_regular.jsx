'use strict';

let React = require('react/addons');

let AddRegular = React.createClass({
    propTypes: {
        addPerson: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            id: null,
            name: '',
            order: {
                type: '',
                sugar: 0,
                strength: 'Normal',
                notes: ''
            },
            coffees: {
                count: 1,
                purchased: 0,
                free: 0
            },
            lastVisited: null
        }
    },

    handleSubmit() {
        var name = React.findDOMNode(this.refs.name).value.trim();
        var type = React.findDOMNode(this.refs['order.type']).value.trim();
        var count = React.findDOMNode(this.refs['coffees.count']).value.trim();

        var newPerson = React.addons.update(this.state,
            {
                name: { $set:name },
                order: { $merge:{type:type} },
                coffees: { $merge:{count:count, purchased:count} }
            }
        );

        // if valid close form and addPerson
        console.log('handleSubmit()!', newPerson);
        this.props.addPerson(newPerson);
    },

    validateForm() {

    },

    render() {
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add a new Regular
                        </h3>

                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Name" ref="name" defaultValue={this.state.name} />
                            <input type="text" placeholder="Order" ref="order.type" defaultValue={this.state.order.type} />
                            <input type="number" placeholder="Count" ref="coffees.count" defaultValue={this.state.coffees.count} />
                            <input type="submit" value="Add meeeee" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddRegular;
