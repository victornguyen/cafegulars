'use strict';

import React from 'react';

// hax: import vendor css before root component to ensure they output
// before any component css
import 'styles/vendor/bootstrap';

import App from 'components/App';

import 'styles/base';

React.render(<App />, document.body);
