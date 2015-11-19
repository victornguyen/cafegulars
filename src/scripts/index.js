'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from 'components/App';
import configureStore from 'store/configureStore';

// hax: import vendor css before root component to ensure they output
// before any component css
import 'styles/vendor/bootstrap';
import 'styles/base';

const store = configureStore();
const rootElement = document.getElementById('app');

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
