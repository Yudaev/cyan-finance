import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import appMiddleware from "../middlewares/app";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'cyanFinance',
  storage,
  //whitelist: ['user'], // предположительно будет скидывать в локал сторадж данные о юзере
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initStore = (preloadedState = undefined) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    preloadedState,
    composeEnhancers(applyMiddleware(
      appMiddleware,
    ))
  );

  const persistor = persistStore(store);

  return { store, persistor }
};

export default initStore;
