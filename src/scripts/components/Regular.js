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
        regular: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hasFreeCoffee: hasFreeCoffee(this.props.regular.count)
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hasFreeCoffee: hasFreeCoffee(newProps.regular.count)
        });
    }

    render() {
        const regularClasses = classNames({
            'regular panel panel-default': true,
            'regular--free': this.state.hasFreeCoffee
        });

        const { regular, actions } = this.props;
        const { updateName, markAsAdded, updateOrder, updateSugar, updateStrength, addCup, addFreeCup } = actions;
        const id = regular.id;

        return (
            <div className={regularClasses}>
                <RegularInfo>
                    <RegularName
                        name={regular.name}
                        updateName={name => updateName(id, name)}
                        markAsAdded={() => markAsAdded(id)}
                        justAdded={regular.justAdded}
                    />
                    <RegularOrder
                        order={regular.order}
                        updateOrder={order => updateOrder(id, order)}
                    />
                    <RegularSugar
                        count={regular.sugar}
                        updateSugar={sugar => updateSugar(id, sugar)}
                    />
                    <RegularStrength
                        strength={regular.strength}
                        updateStrength={strength => updateStrength(id, strength)}
                    />
                    <RegularCounter
                        count={regular.count}
                        addCup={() => addCup(id)}
                        addFreeCup={() => addFreeCup(id)}
                    />
                </RegularInfo>

                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-xs" onClick={() => onRemove(regular.id)}>Remove</button>
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
