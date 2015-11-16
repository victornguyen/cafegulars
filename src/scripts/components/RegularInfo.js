'use strict';

import React, { Component, PropTypes } from 'react';

import RegularName       from 'components/RegularName';
import RegularOrder      from 'components/RegularOrder';
import RegularSugar      from 'components/RegularSugar';
import RegularStrength   from 'components/RegularStrength';
import RegularCounter    from 'components/RegularCounter';
import RegularActions    from 'actions/RegularActions';

class RegularInfo extends Component {
    static propTypes = {
        regular: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    _addCup = () => {
        RegularActions.addCup(this.props.regular.id);
    }

    _addFreeCup = () => {
        RegularActions.addFreeCup(this.props.regular.id);
    }

    _updateSugar = (newCount) => {
        RegularActions.updateSugar(this.props.regular.id, newCount);
    }

    _updateStrength = (strength) => {
        RegularActions.updateStrength(this.props.regular.id, strength);
    }

    _updateOrder = (order) => {
        RegularActions.updateOrder(this.props.regular.id, order);
    }

    render() {
        let regular = this.props.regular;
        return (
            <div className="panel-body">
                <RegularName regular={regular} />
                <RegularOrder order={regular.type} updateOrder={this._updateOrder} toggleSelectState={this.props.toggleSelectState} />
                <RegularSugar count={regular.sugar} updateSugar={this._updateSugar} />
                <RegularStrength strength={regular.strength} updateStrength={this._updateStrength} />
                <RegularCounter count={regular.count} addCup={this._addCup} addFreeCup={this._addFreeCup} />
            </div>
        );
    }
}

export default RegularInfo;
