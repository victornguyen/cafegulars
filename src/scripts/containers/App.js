import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'components/Container';
import Header from 'components/Header';
import * as regularActionCreators from 'actions/RegularsActions';

class App extends Component {
    static propTypes = {
        regulars: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { actions, regulars, children } = this.props;
        return (
            <Container>
              <Header {...actions} />
              {children}
            </Container>
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
)(App);
