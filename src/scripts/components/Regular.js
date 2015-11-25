'use strict';

import React, { Component, PropTypes } from 'react';
import moment              from 'moment';
import classNames          from 'classnames';
import RegularInfo         from 'components/RegularInfo';
import RegularName         from 'components/RegularName';
import RegularOrder        from 'components/RegularOrder';
import RegularSugar        from 'components/RegularSugar';
import RegularStrength     from 'components/RegularStrength';
import RegularCounter      from 'components/RegularCounter';
import { hasFreeCoffee }   from 'utils/RegularUtils';
import 'styles/regular';

class Regular extends Component {
    static propTypes = {
        regular: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { regular, actions } = this.props;
        const id = regular.id;
        const regularClasses = classNames(
            'regular panel panel-default',
            { 'regular--free': hasFreeCoffee(regular.count) }
        );

        return (
            <div className={regularClasses}>
                <RegularInfo>
                    <RegularName
                        name={regular.name}
                        updateName={name => actions.updateName(id, name)}
                        markAsAdded={() => actions.markAsAdded(id)}
                        justAdded={regular.justAdded}
                    />
                    <RegularOrder
                        order={regular.order}
                        updateOrder={order => actions.updateOrder(id, order)}
                    />
                    <RegularSugar
                        count={regular.sugar}
                        updateSugar={sugar => actions.updateSugar(id, sugar)}
                    />
                    <RegularStrength
                        strength={regular.strength}
                        updateStrength={strength => actions.updateStrength(id, strength)}
                    />
                    <RegularCounter
                        count={regular.count}
                        free={regular.free}
                        addCup={count => actions.addCup(id, count)}
                        addFreeCup={count => actions.addFreeCup(id, count)}
                    />
                </RegularInfo>

                <div className="panel-footer">
                    <button
                        type="button"
                        className="btn btn-primary btn-xs"
                        onClick={() => actions.removeRegular(id)}
                    >
                        Remove
                    </button>
                    <span className="small pull-right">
                         Added { moment(regular.dateAdded).fromNow() }
                    </span>
                    <span className="small pull-right">
                         Coffees purchased: {regular.purchased}
                         &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>

            </div>
        );
    }
}

export default Regular;
