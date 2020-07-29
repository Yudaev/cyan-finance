import { handleActions } from 'redux-actions';

import { requestAuth, successAuth, failureAuth, requestReg, successReg, failureReg, reset, clearAuthError, clearRegError } from '../actions/user';

const initialState = {
  token: null,
  email: null,
  _id: null,
  authError: null,
  regError: null,
};

export default handleActions(
  {
    [requestAuth]: (store, action) => ({
      ...store,
    }),
    [successAuth]: (store, { payload: user }) => ({
      ...store,
      ...user,
      authError: null,
      regError: null,
    }),
    [failureAuth]: (store, { payload }) => ({
      ...store,
      authError: payload,
    }),
    [requestReg]: (store, action) => ({
      ...store,
    }),
    [successReg]: (store, { payload: user }) => ({
      ...store,
      ...user,
      authError: null,
      regError: null,
    }),
    [failureReg]: (store, { payload }) => ({
      ...store,
      regError: payload,
    }),
    [reset]: (store, { payload }) => ({
      ...store,
      ...initialState,
    }),
    [clearAuthError]: (store) => ({
      ...store,
      authError: null,
    }),
    [clearRegError]: (store) => ({
      ...store,
      regError: null,
    }),
  },
  initialState,
);
