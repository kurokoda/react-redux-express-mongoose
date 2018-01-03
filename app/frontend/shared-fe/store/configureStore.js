import {localForage} from 'localforage';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {autoRehydrate, persistStore} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../components/dev/DevTools';
import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';

const logger = createLogger({
  level    : 'info',
  collapsed: false,
  logger   : console,
  predicate: (getState, action) => true
});

let middlewares = [
  thunkMiddleware,
  apiMiddleware
];

// Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate(),
      DevTools.instrument()
    )
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  persistStore(store, {
      storage   : localForage,
      transforms: [immutableTransform()]
    },
    function () {
      return;
    }
  ).purge();
  return store;
}
