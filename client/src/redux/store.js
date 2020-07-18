import { createStore, compose, applyMiddleware } from 'redux';
import reducer, { history } from '../reducers';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import appMiddleware from "../middlewares/app";
import userMiddleware from "../middlewares/user";
import operationsMiddleware from "../middlewares/operations";
import categoriesMiddleware from "../middlewares/categories";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initStore = (preloadedState = undefined) => {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      appMiddleware,
      userMiddleware,
      operationsMiddleware,
      categoriesMiddleware,
    ))
  );

  const persistor = persistStore(store);

  return { store, persistor }
};

export default initStore;
