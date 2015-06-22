'use strict';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import RegularInfo from './regular_info.jsx';
import RegularActions from '../actions/regular_actions';
import { hasFreeCoffee } from '../utils/regular_utils';

export default class Regular extends Component {
    static propTypes = {
        person: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hasFreeCoffee: hasFreeCoffee(this.props.person.coffees.count)
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hasFreeCoffee: hasFreeCoffee(newProps.person.coffees.count)
        });
    }

    _handleRemovePerson = () => {
        RegularActions.removePerson(this.props.person.id);
    }

    render() {
        let regularClasses = classNames({
            'regular panel panel-default':  true,
            'regular--free':                this.state.hasFreeCoffee
        });

        return (
            <div className={regularClasses}>
                <RegularInfo person={this.props.person} />

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
        );
    }
}
