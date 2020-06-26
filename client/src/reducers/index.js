import appReducer from './app';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
