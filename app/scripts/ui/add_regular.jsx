'use strict';

let React = require('react/addons');

let AddRegular = React.createClass({
    propTypes: {
        addPerson: React.PropTypes.func.isRequired,
        setAddPersonVisibility: React.PropTypes.func.isRequired
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

    componentDidMount() {
        React.findDOMNode(this.refs.name).focus();
    },

    handleSubmit(e) {
        e.preventDefault();

        // TODO: make this better yea
        var name    = this._getValue('name'),
            order   = this._getValue('order'),
            count   = this._getValue('count');

        // if valid add person and close form
        if ( this._formIsValid([name,order,count]) ) {
            this.props.addPerson( this._composeNewPerson(name,order,count) );
            this.close();
        }
    },

    _getValue(ref) {
        return React.findDOMNode(this.refs[ref]).value.trim();
    },

    _composeNewPerson(name, order, count) {
        return React.addons.update(this.state, {
            name: { $set:name },
            order: { $merge:{type:order} },
            coffees: { $merge:{count:count, purchased:count} }
        });
    },

    _formIsValid(values) {
        return values.every(value => value.length > 0);
    },

    close() {
        this.props.setAddPersonVisibility(false);
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
                            <input type="text" placeholder="Order" ref="order" defaultValue={this.state.order.type} />
                            <input type="number" placeholder="Count" ref="count" defaultValue={this.state.coffees.count} />
                            <input type="submit" value="Add meeeee" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddRegular;
