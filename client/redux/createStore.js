import { applyMiddleware, createStore as _createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const createStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = _createStore(reducer, undefined, middlewareEnhancer);
  return store;
};

export default createStore;
