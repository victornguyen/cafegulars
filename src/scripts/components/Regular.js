'use strict';

import React, { Component, PropTypes } from 'react';
import moment              from 'moment';
import classNames          from 'classnames';
import RegularInfo         from 'components/RegularInfo';
import { hasFreeCoffee }   from 'utils/RegularUtils';

import 'styles/regular';

class Regular extends Component {
    static propTypes = {
        regular: PropTypes.object.isRequired,
        onRemove: PropTypes.func.isRequired
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
        let regularClasses = classNames({
            'regular panel panel-default': true,
            'regular--free': this.state.hasFreeCoffee
        });

        const { regular, onRemove } = this.props;

        return (
            <div className={regularClasses}>
                <RegularInfo regular={regular} />

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
