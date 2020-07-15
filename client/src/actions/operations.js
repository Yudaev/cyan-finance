import {createActions} from 'redux-actions';

export const {
  loadOperations,
  requestOperations,
  successOperations,
  failureOperations,
} = createActions({
  LOAD_OPERATIONS: options => options,
  REQUEST_OPERATIONS: () => ({}),
  SUCCESS_OPERATIONS: items => ({items}),
  FAILURE_OPERATIONS: error => error,
}, { prefix: 'operations' });