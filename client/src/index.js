import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from './redux/store';
import { Provider } from 'react-redux';
import { init as initApp } from './actions/app';
import { PersistGate } from 'redux-persist/integration/react';
import App from "./connectors/app";

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={ null }
      persistor={ persistor }
      onBeforeLift={() => store.dispatch(initApp())}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);