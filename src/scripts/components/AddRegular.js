'use strict';

import React, { Component, PropTypes } from 'react';
import RegularInfoNew   from 'components/RegularInfoNew';
import RegularActions   from 'actions/RegularActions';
import RegularStore     from 'stores/RegularStore';

class AddRegular extends Component {
    static propTypes = {
        setAddPersonVisibility: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            canSubmit:  false,
            person:     RegularStore.getNewPerson()
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

export default AddRegular;
