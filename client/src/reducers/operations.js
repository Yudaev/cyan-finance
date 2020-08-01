import { handleActions } from 'redux-actions';

import {
  failureItem,
  failureOperations,
  successItem,
  successOperations,
  saveHistoryDate,
  clearOperationsData,
  saveHistoryType,
} from '../actions/operations';

const initialState = {
  items: [],
  date: new Date(),
  type: 'день',
  loadOperationsError: '',
  itemError: '',
};

export default handleActions(
  {
    [successOperations]: (store, { payload: items }) => ({
      ...store,
      items,
      loadOperationsError: null,
    }),
    [failureOperations]: (store, { payload }) => ({
      ...store,
      loadOperationsError: payload,
    }),
    [successItem]: (store, { payload }) => ({
      ...store,
      items: [...store.items, payload],
      itemError: null,
    }),
    [failureItem]: (store, { payload }) => ({
      ...store,
      itemError: payload,
    }),
    [saveHistoryDate]: (store, { payload }) => ({
      ...store,
      date: payload.date,
    }),
    [saveHistoryType]: (store, { payload }) => ({
      ...store,
      type: payload.type,
    }),
    [clearOperationsData]: (store) => ({
      ...store,
      ...initialState,
    }),
  },
  initialState,
);
