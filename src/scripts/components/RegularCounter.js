'use strict';

import React, { Component, PropTypes } from 'react';
import { hasFreeCoffee, coffeesTillFree } from '../utils/RegularUtils';

import 'styles/regular-counter';

class RegularCounter extends Component {
    static propTypes = {
        count:          PropTypes.number.isRequired,
        addCup:         PropTypes.func.isRequired,
        addFreeCup:     PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let coffeesLeft = coffeesTillFree(this.props.count);
        let actions;

        if ( hasFreeCoffee(this.props.count) ) {
            actions = (
                <button className="regular-counter" onClick={this.props.addFreeCup}>
                    FREE COFFEE!!!!!
                </button>
            );
        }
        else {
            actions = (
                <button className="regular-counter" onClick={this.props.addCup}>
                    <div className="regular-counter__count">
                        {coffeesLeft}
                    </div>
                    { coffeesLeft < 2 ? 'coffee' : 'coffees' } to go!
                </button>
            );
        }

        return (
            <div className="pull-left">
                {actions}
            </div>
        );
    }
}

export default RegularCounter;
