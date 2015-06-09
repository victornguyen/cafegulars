'use strict';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from 'classnames';

import RegularName from './regular_name.jsx';
import RegularOrder from './regular_order.jsx';
import RegularSugar from './regular_sugar.jsx';
import RegularStrength from './regular_strength.jsx';
import RegularCounter from './regular_counter.jsx';
import RegularActions from '../actions/regular_actions';


export default class Regular extends Component {

    static propTypes = {
        person:             PropTypes.object.isRequired,
        newPersonId:        PropTypes.string,
        freeCount:          PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hasFreeCoffee: this._getsFreeCoffee(this.props.person.coffees.count)
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hasFreeCoffee: this._getsFreeCoffee(newProps.person.coffees.count)
        })
    }

    // TODO: this needs to live somewhere where AddRegular and Regular can access, Container component?
    _getsFreeCoffee = (count) => {
        return count === this.props.freeCount;
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

    _handleRemovePerson = () => {
        RegularActions.removePerson(this.props.person.id);
    }

    render() {
        let remainingCups = this.props.freeCount - this.props.person.coffees.count;

        let regularClasses = classNames({
            'regular panel':                true,
            'regular--free':                this.state.hasFreeCoffee,
            'panel-default':                this.props.newPersonId !== this.props.person.id,
            'regular--new panel-success':   this.props.newPersonId === this.props.person.id
        });

        // TODO: hmm, is there a better way of doing this
        let counterProps = {
            count:              this.props.person.coffees.count,
            freeCount:          this.props.freeCount,
            addCup:             this._addCup,
            addFreeCup:         this._addFreeCup,
            hasFreeCoffee:      this.state.hasFreeCoffee
        };

        return (
            <div className={regularClasses}>

                <div className="panel-body">
                    <RegularName name={this.props.person.name} updateName={this._updateName} />
                    <RegularOrder order={this.props.person.order.type} updateOrder={this._updateOrder} />
                    <RegularSugar count={this.props.person.order.sugar} updateSugar={this._updateSugar} />
                    <RegularStrength strength={this.props.person.order.strength} updateStrength={this._updateStrength} />
                    <RegularCounter {...counterProps} />
                </div>

                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-xs" onClick={this._handleRemovePerson}>Remove</button>
                    <span className="small pull-right">
                         Added { moment(this.props.person.dateAdded).fromNow() }
                    </span>
                    <span className="small pull-right">
                         Coffees purchased: {this.props.person.coffees.purchased}
                         &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>

            </div>
        )
    }

}
