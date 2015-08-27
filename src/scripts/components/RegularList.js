'use strict';

import React, { Component, PropTypes } from 'react';
import Regular from './Regular';

export default class RegularList extends Component {
    static propTypes = {
        peeps: PropTypes.array.isRequired
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
                <Regular key={person.id} person={person} />
            );
        });
    }
}
