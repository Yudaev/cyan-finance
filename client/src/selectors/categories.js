import { createSelector } from 'reselect'
import propOr from 'lodash/fp/propOr';

const selectCategories = state => state.categories || {};

export const getCategoryList = createSelector(
  selectCategories,
  propOr([], 'items')
);

export const getCategoryListAsObject = createSelector(
  getCategoryList,
  items => {
    const categories = {};
    Array.isArray(items) && items.forEach(item => {
      categories[item._id] = {...item};
    });
    return categories;
  }
);
