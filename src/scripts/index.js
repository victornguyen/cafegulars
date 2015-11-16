'use strict';

import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App             from 'components/App';
import cafegularsApp   from 'reducers/reducers';

// hax: import vendor css before root component to ensure they output
// before any component css
import 'styles/vendor/bootstrap';
import 'styles/base';

let finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = finalCreateStore(cafegularsApp);
let rootElement = document.getElementById('app');

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <App />
        </Provider>
        <DebugPanel top right bottom>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>,
    rootElement
);
