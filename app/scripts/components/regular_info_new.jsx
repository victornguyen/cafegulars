'use strict';

import React, { Component, PropTypes } from 'react';
import { assign, merge } from 'lodash';

import RegularName from './regular_name.jsx';
import RegularOrder from './regular_order.jsx';
import RegularSugar from './regular_sugar.jsx';
import RegularStrength from './regular_strength.jsx';
import RegularCounter from './regular_counter.jsx';

export default class RegularInfoNew extends Component {
    static propTypes = {
        person:             PropTypes.object.isRequired,
        updatePerson:       PropTypes.func.isRequired,
        setSubmitStatus:    PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    _addCup = () => {
        let count = this.props.person.coffees.count + 1;
        this.props.updatePerson(
            merge(this.props.person, {
                coffees: {
                    count:      count,
                    purchased:  count
                }
            })
        );
    }

    _resetCount = () => {
        this.props.updatePerson(
            merge(this.props.person, {
                coffees: {
                    count:      0,
                    purchased:  0
                }
            })
        );
    }

    _updateName = (name) => {
        this.props.updatePerson(
            assign(this.props.person, { name: name })
        );
    }

    _updateSugar = (newCount) => {
        this.props.updatePerson(
            merge(this.props.person, {
                order: {
                    sugar: newCount
                }
            })
        );
    }

    _updateStrength = (strength) => {
        this.props.updatePerson(
            merge(this.props.person, {
                order: {
                    strength: strength
                }
            })
        );
    }

    _updateOrder = (order) => {
        this.props.updatePerson(
            merge(this.props.person, {
                order: {
                    type: order
                }
            })
        );
    }

    render() {
        let person = this.props.person;
        return (
            <div className="panel-body">
                <RegularName name={person.name} updateName={this._updateName} setSubmitStatus={this.props.setSubmitStatus} focusOnMount={true} />
                <RegularOrder order={person.order.type} updateOrder={this._updateOrder} />
                <RegularSugar count={person.order.sugar} updateSugar={this._updateSugar} />
                <RegularStrength strength={person.order.strength} updateStrength={this._updateStrength} />
                <RegularCounter count={person.coffees.count} addCup={this._addCup} addFreeCup={this._resetCount} />
            </div>
        );
    }
}
