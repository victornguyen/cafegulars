import { createStore, compose, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    devTools()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // TODO: figure out why this isn't working when hot loading reducers.
    //   Type error: reducer is not a function
    // nextRootReducer here is an es6 module object (not a reducer fn),
    // could that be it?
    //
    // Enable Webpack hot module replacement for reducers
    // module.hot.accept('../reducers', () => {
    //   const nextRootReducer = require('../reducers');
    //   store.replaceReducer(nextRootReducer);
    // })
  }

  return store;
}
