'use strict';

import React, { Component, PropTypes } from 'react';
import Regular from './regular.jsx';

export default class RegularList extends Component {
    static propTypes = {
        peeps:          PropTypes.array.isRequired,
        freeCount:      PropTypes.number.isRequired,
        newPersonId:    PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Regulars</h3>
                <div className="regulars_list">
                    { this.renderList() }
                </div>
            </div>
        );
    }

    renderList() {
        return this.props.peeps.map(person => {
            return (
                <Regular {...this.props} key={person.id} person={person} />
            );
        });
    }
}
