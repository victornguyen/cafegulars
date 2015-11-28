import React from 'react';
import { render } from 'react-dom';
import Root from 'components/Root';
import configureStore from 'store/configureStore';

import 'styles/vendor/bootstrap';
import 'styles/base';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
