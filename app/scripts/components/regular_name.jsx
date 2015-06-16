'use strict';

var React = require('react');

class RegularName extends React.Component {

    constructor(props) {
        super(props);

        this._handleKeyDown     = this._handleKeyDown.bind(this);
        this._handleChange      = this._handleChange.bind(this);
        this._handleBlur        = this._handleBlur.bind(this);
    }

    componentDidMount() {
        if (this.props.focusOnMount) {
            React.findDOMNode(this.refs.field).focus();
        }
    }

    _handleKeyDown(e) {
        let field = React.findDOMNode(this.refs.field);

        if (e.key === "Enter") {
            field.blur();
        }
        else if (e.key === 'Escape') {
            field.value = this.props.name;
            field.blur();
        }
    }

    _handleChange(e) {
        // TODO: this method only available when in addMode.. make this better
        if (this.props.updateSubmitStatus) {
            let field = React.findDOMNode(this.refs.field);
            this.props.updateSubmitStatus( field.value !== '' );
        }
    }

    _handleBlur(e) {
        let newName = e.currentTarget.value;

        // restore previous name if new name is empty
        if (newName === '') {
            e.currentTarget.value = this.props.name;
            return;
        }

        if (newName !== this.props.name) {
            this.props.updateName(newName);
        }
    }

    render() {
        return (
            <h3 className="regular-name">
                <input
                    className="regular-name__field"
                    ref="field"
                    type="text"
                    placeholder="Name"
                    defaultValue={this.props.name}
                    onKeyDown={this._handleKeyDown}
                    onChange={this._handleChange}
                    onBlur={this._handleBlur}
                />
            </h3>
        )
    }
}

RegularName.propTypes = {
    name:               React.PropTypes.string.isRequired,
    updateName:         React.PropTypes.func.isRequired,

    // AddRegular methods
    focusOnMount:       React.PropTypes.bool,
    updateSubmitStatus: React.PropTypes.func
};

module.exports = RegularName;
