'use strict';

let React       = require('react/addons'),
    OrderSelect = require('./OrderSelect.jsx');

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
            order   = this.refs.orderSelect.refs.order.getDOMNode(this.refs.order).value.trim(),
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
        var groupStyle = {
            marginRight: '10px'
        };

        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add a new Regular
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group" style={groupStyle}>
                                <label className="sr-only">Name</label>
                                <input className="form-control" type="text" placeholder="Name" ref="name" defaultValue={this.state.name} />
                            </div>
                            <div className="form-group" style={groupStyle}>
                                <OrderSelect ref="orderSelect" />
                            </div>
                            <div className="form-group" style={groupStyle}>
                                <label className="sr-only">Count</label>
                                <input className="form-control" type="number" min="0" placeholder="Count" ref="count" defaultValue={this.state.coffees.count} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddRegular;
