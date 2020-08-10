import {handleActions} from 'redux-actions';

import {
  requestItem,
  failureItem,
  failureOperations,
  successItem,
  successOperations,
  successEditItem,
  successDeleteItem,
  saveHistoryDate,
  clearOperationsData,
  saveHistoryType,
} from "../actions/operations";


const initialState = {
  items: [],
  date: new Date(),
  type: 'день',
  loadOperationsError: '',
  itemError: '',
  addItemStatus: {},
};

export default handleActions({
  [successOperations]: (store, { payload: items }) => {
    return {
      ...store,
      items,
      loadOperationsError: null,
    }
  },
  [failureOperations]: (store, { payload }) => {
    return {
      ...store,
      loadOperationsError: payload,
    }
  },
  [requestItem]: (store, { payload }) => {
    return {
      ...store,
      addItemStatus: { type: 'request' },
    }
  },
  [successItem]: (store, { payload }) => {
    return {
      ...store,
      items: [ ...store.items, payload],
      addItemStatus: { type: 'success' },
    }
  },
  [failureItem]: (store, { payload }) => {
    return {
      ...store,
      addItemStatus: { type: 'error', ...payload },
    }
  },
  [successEditItem]: (store, { payload }) => {
    return {
      ...store,
      items: store.items.map(item => item._id === payload._id ? payload : item),
      itemError: null,
    }
  },
  [successDeleteItem]: (store, { payload }) => {
    return {
      ...store,
      items: store.items.filter(item => item._id !== payload._id),
      itemError: null,
    }
  },
  [saveHistoryDate]: (store, { payload }) => {
    return {
      ...store,
      date: payload.date
    }
  },
  [saveHistoryType]: (store, { payload }) => {
    return {
      ...store,
      type: payload.type
    }
  },
  [clearOperationsData]: (store) => {
    return {
      ...store,
      ...initialState
    }
  }
}, initialState);
