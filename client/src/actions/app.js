import {createActions} from 'redux-actions';

export const {
  init,
} = createActions({
  INIT: data => data
}, { prefix: 'app' });

