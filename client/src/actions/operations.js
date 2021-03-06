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
  deleteItem,
  successDeleteItem,
  saveHistoryDate,
  saveHistoryType,
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
  UPDATE_ITEM: item => item,
  SUCCESS_EDIT_ITEM: item => item,
  DELETE_ITEM: item => item,
  SUCCESS_DELETE_ITEM: item => item,
  SAVE_HISTORY_DATE: date => ({ date }),
  SAVE_HISTORY_TYPE: type => ({ type }),
  CLEAR_OPERATIONS_DATA: () => ({}),
}, { prefix: 'operations' });