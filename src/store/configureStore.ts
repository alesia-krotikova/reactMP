import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { createWrapper } from 'next-redux-wrapper';

const middleware = [thunk];
const initStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export const wrapper = createWrapper(initStore);
