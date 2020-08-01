import {handleActions} from 'redux-actions';

import {
  requestAuth,
  successAuth,
  failureAuth,
  requestReg,
  successReg,
  failureReg,
  reset,
  clearAuthError,
  clearRegError,
} from '../actions/user';


const initialState = {
  token: null,
  email: null,
  _id: null,
  authError: null,
  regError: null,
};

export default handleActions({
  [requestAuth]: (store, action) => {
    return {
      ...store,
    }
  },
  [successAuth]: (store, { payload: user }) => {
    return {
      ...store,
      ...user,
      authError: null,
      regError: null,
    }
  },
  [failureAuth]: (store, { payload }) => {
    return {
      ...store,
      authError: payload,
    }
  },
  [requestReg]: (store, action) => {
    return {
      ...store,
    }
  },
  [successReg]: (store, { payload: user }) => {
    return {
      ...store,
      ...user,
      authError: null,
      regError: null,
    }
  },
  [failureReg]: (store, { payload }) => {
    return {
      ...store,
      regError: payload,
    }
  },
  [reset]: (store, { payload }) => {
    return {
      ...store,
      ...initialState,
    }
  },
  [clearAuthError]: (store) => {
    return {
      ...store,
      authError: null,
    }
  },
  [clearRegError]: (store) => {
    return {
      ...store,
      regError: null,
    }
  },
}, initialState);
