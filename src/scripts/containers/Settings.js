import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Settings extends Component {
  static propTypes = {
    regulars: PropTypes.array.isRequired
  }

  render() {
    const { regulars } = this.props;
    const totalCoffees = regulars.reduce(
      (total, regular) => total + regular.purchased
    , 0);

    return (
      <div>
        <h3>Settings</h3>
        <p>There are { regulars.length } Regulars.</p>
        <p>{ totalCoffees } coffees have been purchased.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    regulars: state.regulars
  }
}

export default connect(mapStateToProps)(Settings);
