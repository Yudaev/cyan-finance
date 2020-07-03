import {createActions} from 'redux-actions';

export const {
  auth,
  requestAuth,
  successAuth,
  failureAuth,
  reg,
  requestReg,
  successReg,
  failureReg,
  logout,
  reset,
  clearAuthError,
  clearRegError,
} = createActions({
  AUTH: settings => settings,
  REQUEST_AUTH: () => ({}),
  SUCCESS_AUTH: user => user,
  FAILURE_AUTH: error => error,
  REG: settings => settings,
  REQUEST_REG: () => ({}),
  SUCCESS_REG: user => user,
  FAILURE_REG: error => error,
  LOGOUT: () => ({}),
  RESET: () => ({}),
  CLEAR_AUTH_ERROR: () => ({}),
  CLEAR_REG_ERROR: () => ({}),
}, { prefix: 'user' });

