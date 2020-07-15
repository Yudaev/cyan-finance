import {createActions} from 'redux-actions';

export const {
  loadOperations,
} = createActions({
  LOAD_OPERATIONS: options => options,
}, { prefix: 'operations' });