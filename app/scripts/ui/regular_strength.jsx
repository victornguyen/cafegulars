'use strict';

var React   = require('react'),
    _       = require('lodash');

const STRENGTHS = require('../coffee_strengths');

class RegularStrength extends React.Component {

    constructor(props) {
        super(props);
        this._updateStrength = this._updateStrength.bind(this);
    }

    _updateStrength() {
        var index = _.indexOf(STRENGTHS, this.props.strength) + 1;

        if (index >= STRENGTHS.length) {
            index = 0;
        }

        this.props.updateStrength( STRENGTHS[index] );
    }

    render() {
        return (
            <button className="regular-sugar pull-left" onClick={this._updateStrength}>
                <div className="regular-strength__type">
                    {this.props.strength}
                </div>
            </button>
        )
    }

}

RegularStrength.propTypes = {
    strength:       React.PropTypes.string,
    updateStrength: React.PropTypes.func.isRequired
};

RegularStrength.defaultProps = {
    strength:       'Normal'
};

module.exports = RegularStrength;
