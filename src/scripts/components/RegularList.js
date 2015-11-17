'use strict';

import React, { Component, PropTypes } from 'react';
import Regular from 'components/Regular';
import { addRegular } from 'actions/RegularsActions';

class RegularList extends Component {
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
        const { regulars, actions } = this.props;
        return regulars.map(regular => {
            return (
                <Regular key={regular.id} regular={regular} actions={actions} />
            );
        });
    }
}

export default RegularList;
