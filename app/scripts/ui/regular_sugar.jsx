'use strict';

let React           = require('react');

class RegularSugar extends React.Component {

    constructor(props) {
        super(props);
        this._handleSugarUpdate = this._handleSugarUpdate.bind(this);
    }

    _handleSugarUpdate() {
        var count = (this.props.count + 1 > 5) ? 0 : this.props.count + 1;
        this.props.updateSugar(count);
    }

    render() {
        let i     = this.props.count,
            sugar = [];

        if (i === 0) {
            sugar.push('No Sugar');
        }
        else {
            while(i--) {
                sugar.push(
                    <span className="regular-sugar__icon glyphicon glyphicon-tint" aria-hidden="true" key={i}></span>
                );
            }
        }

        return (
            <button className="regular-sugar pull-left" onClick={this._handleSugarUpdate}>
                <div className="regular-sugar__count">
                    {this.props.count}
                </div>
                <div className="regular-sugar__icons">
                    {sugar}
                </div>
            </button>
        );
    }
}

RegularSugar.propTypes = {
    count:          React.PropTypes.number.isRequired,
    updateSugar:    React.PropTypes.func.isRequired
};

module.exports = RegularSugar;
