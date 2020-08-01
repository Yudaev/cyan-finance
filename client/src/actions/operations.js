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
  saveHistoryDate,
  clearOperationsData,
} = createActions({
  LOAD_OPERATIONS: options => options,
  REQUEST_OPERATIONS: () => ({}),
  SUCCESS_OPERATIONS: items => ({items}),
  FAILURE_OPERATIONS: error => error,
  ADD_ITEM: item => item,
  REQUEST_ITEM: () => ({}),
  SUCCESS_ITEM: item => item,
  FAILURE_ITEM: error => error,
  SAVE_HISTORY_DATE: date => ({ date }),
  CLEAR_OPERATIONS_DATA: () => ({}),
}, { prefix: 'operations' });