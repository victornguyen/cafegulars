'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

// hax: import vendor css before root component to ensure they output
// before any component css
import 'styles/vendor/bootstrap';
import 'styles/base';

ReactDOM.render(<App />, document.body);
