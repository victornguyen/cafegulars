import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from 'containers/DevTools';
import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';
import rootReducer from 'reducers';

export default function configureStore(initialState) {
  const engine = createEngine('cafegulars');
  const reduxStorage = storage.createMiddleware(engine);
  const load = storage.createLoader(engine);

  const finalCreateStore = compose(
    applyMiddleware(reduxStorage),
    DevTools.instrument()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  load(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
