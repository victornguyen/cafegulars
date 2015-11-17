'use strict';

import React, { Component, PropTypes } from 'react';

import RegularName       from 'components/RegularName';
import RegularOrder      from 'components/RegularOrder';
import RegularSugar      from 'components/RegularSugar';
import RegularStrength   from 'components/RegularStrength';
import RegularCounter    from 'components/RegularCounter';
import RegularActions    from 'actions/RegularActions';

class RegularInfo extends Component {
    constructor(props) {
        super(props);
    }

    // _addCup = () => {
    //     RegularActions.addCup(this.props.regular.id);
    // }

    // _addFreeCup = () => {
    //     RegularActions.addFreeCup(this.props.regular.id);
    // }

    // _updateSugar = (newCount) => {
    //     RegularActions.updateSugar(this.props.regular.id, newCount);
    // }

    // _updateStrength = (strength) => {
    //     RegularActions.updateStrength(this.props.regular.id, strength);
    // }

    // _updateOrder = (order) => {
    //     RegularActions.updateOrder(this.props.regular.id, order);
    // }

    render() {
        return (
            <div className="panel-body">
                {this.props.children}
            </div>
        );
    }
}

export default RegularInfo;
