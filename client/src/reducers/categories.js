import {handleActions} from 'redux-actions';

import { failureItem, failureList, successItem, successList, clearCategoriesData } from "../actions/categories";

const initialState = {
  items: [],
  listError: '',
  itemError: '',
};

export default handleActions({
  [successList]: (store, { payload: items }) => {
    return {
      ...store,
      items,
      listError: null,
    }
  },
  [failureList]: (store, { payload }) => {
    return {
      ...store,
      listError: payload,
    }
  },
  [successItem]: (store, { payload }) => {
    return {
      ...store,
      items: [ ...store.items, payload],
      itemError: null,
    }
  },
  [failureItem]: (store, { payload }) => {
    return {
      ...store,
      itemError: payload,
    }
  },
  [clearCategoriesData]: (store) => {
    return {
      ...store,
      ...initialState
    }
  }
}, initialState);
