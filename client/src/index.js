import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initStore } from './redux/store';
import { init as initApp } from './actions/app';
import App from './connectors/app';

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} onBeforeLift={() => store.dispatch(initApp())}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
