import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { togglerReducer } from './toggler';
import { pageReducer } from './pages';

export const rootReducer = combineReducers({
  search: searchReducer,
  toggler: togglerReducer,
  pages: pageReducer,
});
