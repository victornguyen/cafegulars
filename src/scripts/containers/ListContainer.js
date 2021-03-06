import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegularList from 'components/RegularList';
import * as regularActionCreators from 'actions/RegularsActions';

class ListContainer extends Component {
  static propTypes = {
    regulars: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions, regulars } = this.props;
    return (
      <RegularList
        regulars={regulars}
        actions={actions}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(regularActionCreators, dispatch)
  };
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps(state) {
  return {
    regulars: state.regulars
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
