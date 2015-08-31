'use strict';

import React, { Component, PropTypes } from 'react';
import moment              from 'moment';
import classNames          from 'classnames';
import RegularInfo         from 'components/RegularInfo';
import RegularActions      from 'actions/RegularActions';
import { hasFreeCoffee }   from 'utils/RegularUtils';

import 'styles/regular';

class Regular extends Component {
    static propTypes = {
        person: PropTypes.object.isRequired,
        style: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            hasFreeCoffee: hasFreeCoffee(this.props.person.coffees.count),
            isSelectOpen: false
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

    _toggleSelectState = () => {
        this.setState({
            isSelectOpen: !this.state.isSelectOpen
        });
    }

    render() {
        let regularClasses = classNames({
            'regular panel panel-default':  true,
            'regular--free':                this.state.hasFreeCoffee,
            'regular--select-open':         this.state.isSelectOpen
        });

        return (
            <div className={regularClasses} style={this.props.style}>
                <RegularInfo person={this.props.person} toggleSelectState={this._toggleSelectState} />

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

export default Regular;
