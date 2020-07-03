import { createSelector } from 'reselect'
import propOr from 'lodash/fp/propOr';
import prop from 'lodash/fp/prop';

const selectUser = state => state.user || {};

export const getUser = createSelector(
  selectUser,
  user => user || {},
);

export const getToken = createSelector(
  selectUser,
  propOr('', 'token')
);

export const getIsAuth = createSelector(
  selectUser,
  user => user.token && user._id
);

export const getAuthError = createSelector(
  selectUser,
  prop('authError')
);
export const getRegError = createSelector(
  selectUser,
  prop('regError')
);