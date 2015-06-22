'use strict';

import React, { Component, PropTypes } from 'react';

import RegularName from './RegularName';
import RegularOrder from './RegularOrder';
import RegularSugar from './RegularSugar';
import RegularStrength from './RegularStrength';
import RegularCounter from './RegularCounter';

import RegularActions from '../actions/RegularActions';


export default class RegularInfo extends Component {
    static propTypes = {
        person: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    _addCup = () => {
        RegularActions.addCup(this.props.person.id);
    }

    _addFreeCup = () => {
        RegularActions.addFreeCup(this.props.person.id);
    }

    _updateName = (name) => {
        RegularActions.updateName(this.props.person.id, name);
    }

    _updateSugar = (newCount) => {
        RegularActions.updateSugar(this.props.person.id, newCount);
    }

    _updateStrength = (strength) => {
        RegularActions.updateStrength(this.props.person.id, strength);
    }

    _updateOrder = (order) => {
        RegularActions.updateOrder(this.props.person.id, order);
    }

    render() {
        let person = this.props.person;
        return (
            <div className="panel-body">
                <RegularName name={person.name} updateName={this._updateName} />
                <RegularOrder order={person.order.type} updateOrder={this._updateOrder} />
                <RegularSugar count={person.order.sugar} updateSugar={this._updateSugar} />
                <RegularStrength strength={person.order.strength} updateStrength={this._updateStrength} />
                <RegularCounter count={person.coffees.count} addCup={this._addCup} addFreeCup={this._addFreeCup} />
            </div>
        );
    }
}
