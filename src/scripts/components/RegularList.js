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
        return this.props.regulars.map(regular => {
            return (
                <Regular key={regular.id} regular={regular} onRemove={this.props.onRemove} />
            );
        });
    }
}

export default RegularList;
