import { handleActions } from 'redux-actions';

import { failureItem, failureList, successItem, successList, clearCategoriesData } from '../actions/categories';

const initialState = {
  items: [],
  listError: '',
  itemError: '',
};

export default handleActions(
  {
    [successList]: (store, { payload: items }) => ({
      ...store,
      items,
      listError: null,
    }),
    [failureList]: (store, { payload }) => ({
      ...store,
      listError: payload,
    }),
    [successItem]: (store, { payload }) => ({
      ...store,
      items: [...store.items, payload],
      itemError: null,
    }),
    [failureItem]: (store, { payload }) => ({
      ...store,
      itemError: payload,
    }),
    [clearCategoriesData]: (store) => ({
      ...store,
      ...initialState,
    }),
  },
  initialState,
);
