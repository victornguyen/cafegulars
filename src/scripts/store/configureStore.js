import { createStore, compose, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    devTools()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
