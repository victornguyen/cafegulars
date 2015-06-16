'use strict';

var React = require('react'),
    Select = require('react-select');

const COFFEE_TYPES = require('../coffee_types.json');


class RegularOrder extends React.Component {

    constructor(props) {
        super(props);
        this._handleOrderUpdate = this._handleOrderUpdate.bind(this);
    }

    componentWillMount() {
        // Coerce COFFEE_TYPES into react-select options structure
        this.options = COFFEE_TYPES.map(type => {
            return {
                value: type,
                label: type
            }
        });
    }

    _handleOrderUpdate(newOrder) {
        this.props.updateOrder(newOrder);
    }

    render() {
        return (
            <div className="regular-order">
                <Select
                    className="regular-order__select"
                    value={this.props.order || this.options[0]}
                    clearable={false}
                    options={this.options}
                    onChange={this._handleOrderUpdate}
                    placeholder="Select a coffee type..."
                />
            </div>
        )
    }

}

RegularOrder.propTypes = {
    order:          React.PropTypes.string,
    updateOrder:    React.PropTypes.func.isRequired
};

module.exports = RegularOrder;
