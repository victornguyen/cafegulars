'use strict';

import React, { Component } from 'react';

class RegularInfo extends Component {
    render() {
        return (
            <div className="panel-body">
                {this.props.children}
            </div>
        );
    }
}

export default RegularInfo;
