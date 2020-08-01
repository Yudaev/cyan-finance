import { createSelector } from 'reselect'

const selectApp = state => state.app || {};

export const getTestText = createSelector(
  selectApp,
  data => data.test || '',
);