import {handleActions} from 'redux-actions';

import { failureOperations, successOperations } from "../actions/operations";


const initialState = {
  items: [],
  loadOperationsError: '',
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
}, initialState);
