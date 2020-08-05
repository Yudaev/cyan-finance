import {createActions} from 'redux-actions';

export const {
  loadOperations,
  requestOperations,
  successOperations,
  failureOperations,
  addItem,
  requestItem,
  successItem,
  failureItem,
  updateItem,
  successEditItem,
} = createActions({
  LOAD_OPERATIONS: options => options,
  REQUEST_OPERATIONS: () => ({}),
  SUCCESS_OPERATIONS: items => ({items}),
  FAILURE_OPERATIONS: error => error,
  ADD_ITEM: item => item,
  REQUEST_ITEM: () => ({}),
  SUCCESS_ITEM: item => item,
  FAILURE_ITEM: error => error,
  UPDATE_ITEM: item => item,
  SUCCESS_EDIT_ITEM: item => item,
}, { prefix: 'operations' });