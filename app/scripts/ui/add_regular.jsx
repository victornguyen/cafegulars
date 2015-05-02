'use strict';

let React           = require('react'),
    Formsy          = require('formsy-react'),
    RegularName     = require('./add_regular_name.jsx'),
    RegularCount    = require('./add_regular_count.jsx'),
    OrderSelect     = require('./add_regular_order.jsx');

let AddRegular = React.createClass({
    propTypes: {
        addPerson: React.PropTypes.func.isRequired,
        setAddPersonVisibility: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            canSubmit: true
        }
    },

    handleSubmit(model) {
        let person = this.composeNewPerson(model);
        this.props.addPerson(person);
        this.close();
    },

    composeNewPerson(model) {
        return {
            id: null,
            name: model.name,
            order: {
                type: model.order,
                sugar: 0,
                strength: 'Normal',
                notes: ''
            },
            coffees: {
                count: model.count,
                purchased: model.count,
                free: 0
            },
            lastVisited: null
        }
    },

    close() {
        this.props.setAddPersonVisibility(false);
    },

    enableButton() {
        this.setState({ canSubmit: true });
    },

    disableButton() {
        this.setState({ canSubmit: false });
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
                        <Formsy.Form
                            className="form-inline"
                            onValidSubmit={this.handleSubmit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                        >
                            <RegularName name="name" required groupStyle={groupStyle} focus={true} />
                            <OrderSelect name="order" required groupStyle={groupStyle} />
                            <RegularCount name="count" required groupStyle={groupStyle} value="1" />
                            <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Add Regular</button>
                        </Formsy.Form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddRegular;
