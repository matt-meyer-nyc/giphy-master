// main reducer filename

import { combineReducers } from 'redux';
//function that combines subreducers into one main function
import searchReducer from './search';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
});
