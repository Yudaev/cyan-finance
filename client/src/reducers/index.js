import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories';
import operationsReducer from './operations';
import userReducer from './user';
import appReducer from './app';

export const history = createBrowserHistory();

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['authError', 'regError'],
};

const reducer = combineReducers({
  app: appReducer,
  user: persistReducer(userPersistConfig, userReducer),
  operations: operationsReducer,
  categories: categoriesReducer,
  router: connectRouter(history),
});

export default reducer;
