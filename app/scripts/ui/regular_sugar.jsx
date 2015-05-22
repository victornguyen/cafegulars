'use strict';

var React = require('react');

var RegularSugar = React.createClass({
    propTypes: {
        count:  React.PropTypes.number.isRequired,
        update: React.PropTypes.func.isRequired
    },

    _updateSugarCount() {
        console.log('update sugar count from', this.props.count, 'to', this.props.count+1)
    },

    render() {
        let i     = this.props.count,
            sugar = [];

        while(i--) {
            sugar.push(
                <span className="regular-sugar__icon glyphicon glyphicon-tint" aria-hidden="true" key={i}></span>
            );
        }

        return (
            <div className="regular-sugar" onClick={this._updateSugarCount}>
                {sugar}
            </div>
        )
    }
});

module.exports = RegularSugar;
