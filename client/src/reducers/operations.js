import {handleActions} from 'redux-actions';

import {
  failureItem,
  failureOperations,
  successItem,
  successOperations,
  successEditItem,
  successDeleteItem
} from "../actions/operations";


const initialState = {
  items: [],
  loadOperationsError: '',
  itemError: '',
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
  [successItem]: (store, { payload }) => {
    return {
      ...store,
      items: [ ...store.items, payload],
      itemError: null,
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
  [failureItem]: (store, { payload }) => {
    return {
      ...store,
      itemError: payload,
    }
  },
}, initialState);
