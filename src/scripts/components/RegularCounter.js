import React, { Component, PropTypes } from 'react';
import { hasFreeCoffee, coffeesTillFree } from '../utils/RegularUtils';

import 'styles/regular-counter';

class RegularCounter extends Component {
    static propTypes = {
        count:          PropTypes.number.isRequired,
        free:           PropTypes.number.isRequired,
        addCup:         PropTypes.func.isRequired,
        addFreeCup:     PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    handleCupClick = () => {
        this.props.addCup(this.props.count + 1);
    }

    handleFreeClick = () => {
        this.props.addFreeCup(this.props.free + 1);
    }

    render() {
        let coffeesLeft = coffeesTillFree(this.props.count);
        let actions;

        if ( hasFreeCoffee(this.props.count) ) {
            actions = (
                <button className="regular-counter" onClick={this.handleFreeClick}>
                    FREE COFFEE!!!!!
                </button>
            );
        }
        else {
            actions = (
                <button className="regular-counter" onClick={this.handleCupClick}>
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
