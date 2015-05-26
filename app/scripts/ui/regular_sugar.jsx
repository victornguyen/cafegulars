'use strict';

var React = require('react');

var RegularSugar = React.createClass({
    propTypes: {
        count:  React.PropTypes.number.isRequired,
        update: React.PropTypes.func.isRequired
    },

    _updateSugarCount() {
        var count = (this.props.count + 1 > 5) ? 0 : this.props.count + 1;
        this.props.update(count);
    },

    render() {
        let i     = this.props.count,
            sugar = [];

        if (i === 0) {
            sugar.push("No Sugar");
        }
        else {
            while(i--) {
                sugar.push(
                    <span className="regular-sugar__icon glyphicon glyphicon-tint" aria-hidden="true" key={i}></span>
                );
            }
        }

        return (
            <div className="regular-sugar pull-left" onClick={this._updateSugarCount}>
                <div className="regular-sugar__count">
                    {this.props.count}
                </div>
                <div className="regular-sugar__icons">
                    {sugar}
                </div>
            </div>
        )
    }
});

module.exports = RegularSugar;
