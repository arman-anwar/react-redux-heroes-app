/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createReducer from './reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import { watchHeros } from './sagas/saga'
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

const persistConfig = {
  key: 'root',
  storage: storage,
};

export default function configureStore(initialState = {}) {
  const store = createStore(
    persistReducer(persistConfig, createReducer()),
    fromJS(initialState),
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  sagaMiddleware.run(watchHeros);
  return store;
}

