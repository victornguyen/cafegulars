import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from 'containers/App';
import ListContainer from 'containers/ListContainer';
import Settings from 'containers/Settings';
import DevTools from './DevTools';

const history = createBrowserHistory();

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={ListContainer} />
              <Route path="settings" component={Settings} />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
