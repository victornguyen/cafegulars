'use strict';

import React, { Component, PropTypes } from 'react';
import { TransitionSpring, presets } from 'react-motion';
import _ from 'lodash';
import Regular from 'components/Regular';

class RegularList extends Component {
    static propTypes = {
        peeps: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    getEndValue() {
        const peeps = this.props.peeps;
        let configs = {};
        peeps.forEach(regular => {
            configs[regular.id] = {
                height: { val: 250, config: presets.gentle },
                opacity: { val: 1, config: presets.gentle },
                data: { person: regular, config: [] }
            };
        });
        return configs;
    }

    willEnter(key) {
        console.log('willEnter():', arguments);
        return {
            height: {val: 0, config: presets.gentle},
            opacity: {val: 0, config: presets.gentle },
            data: { person: _.find(this.props.peeps, {id:key}), config: [] }
        };
    }

    willLeave(key, outgoingValue, endValue, currentValue, currentSpeed) {
        console.log('willLeave():', arguments);
        // the key with this value is truly killed when the values reaches destination
        return {
            height: { val: 0, config: presets.gentle },
            opacity: { val: 0, config: presets.gentle },
            data: outgoingValue.data
        };
    }

    _renderList(currentValue) {
        return (
            <div className="regulars_list">
                {
                    Object.keys(currentValue).map(key => {
                        let style = {
                            height: currentValue[key].height.val,
                            opacity: currentValue[key].opacity.val
                        };
                        return (
                            <Regular
                                key={key}
                                person={currentValue[key].data.person}
                                style={style}
                            />
                        );
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3>Regulars</h3>
                <TransitionSpring
                    endValue={this.getEndValue()}
                    willEnter={::this.willEnter}
                    willLeave={::this.willLeave}>
                    { ::this._renderList }
                </TransitionSpring>
            </div>
        );
    }
}

export default RegularList;
