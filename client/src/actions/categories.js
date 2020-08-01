import {createActions} from 'redux-actions';

export const {
  loadList,
  requestList,
  successList,
  failureList,
  addItem,
  requestItem,
  successItem,
  failureItem,
  clearCategoriesData,
} = createActions({
  LOAD_LIST: () => ({}),
  REQUEST_LIST: () => ({}),
  SUCCESS_LIST: items => ({items}),
  FAILURE_LIST: error => error,
  ADD_ITEM: item => item,
  REQUEST_ITEM: () => ({}),
  SUCCESS_ITEM: item => item,
  FAILURE_ITEM: error => error,
  CLEAR_CATEGORIES_DATA: () => ({}),
}, { prefix: 'categories' });