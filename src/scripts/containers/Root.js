import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className="container">
          <App />
        </div>
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
}
