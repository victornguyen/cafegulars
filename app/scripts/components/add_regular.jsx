'use strict';

import React, { Component, PropTypes } from 'react/addons';
import RegularInfoNew from './regular_info_new.jsx';
import RegularActions from '../actions/regular_actions';

export default class AddRegular extends Component {
    static propTypes = {
        setAddPersonVisibility: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            canSubmit: false
        };

        this.state.person = {
            id: null,
            name: '',
            order: {
                type: null,
                sugar: 0,
                strength: 'Normal',
                notes: ''
            },
            coffees: {
                count: 0,
                purchased: 0,
                free: 0
            },
            lastVisited: null,
            dateAdded: null
        };
    }

    _close = () => {
        this.props.setAddPersonVisibility(false);
    }

    _setSubmitStatus = (canSubmit) => {
        this.setState({ canSubmit: canSubmit });
    }

    _canSubmitPerson = (person) => {
        return person.name !== '';
    }

    _updatePerson = (person) => {
        this.setState({
            person:     person,
            canSubmit:  this._canSubmitPerson(person)
        });
    }

    _handleAddPerson = () => {
        RegularActions.addPerson(this.state.person);
        this._close();
    }

    render() {
        return (
            <div className="add-regular">
                <div className="regular regular--add panel panel-default">
                    <RegularInfoNew person={this.state.person} updatePerson={this._updatePerson} setSubmitStatus={this._setSubmitStatus} />
                </div>

                <div className="add-regular__actions">
                    <button className="add-regular__save btn btn-primary" onClick={this._handleAddPerson} disabled={!this.state.canSubmit}>
                        Add Regular
                    </button>
                    <button className="add-regular__cancel btn btn-default" onClick={this._close}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}
