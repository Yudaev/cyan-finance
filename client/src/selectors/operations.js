import { createSelector } from 'reselect'
import propOr from 'lodash/fp/propOr';
import dayjs from 'dayjs';
import dayjsRU from 'dayjs/locale/ru';

dayjs.locale(dayjsRU);

const selectOperations = state => state.operations || {};

export const getOperationList = createSelector(
  selectOperations,
  propOr([], 'items')
);

export const getOperationByDate = createSelector(
  getOperationList,
  items => items.sort((a, b) =>  new Date(b.date) < new Date(a.date) ? -1 : 1)
);

export const getGroupsByDate = createSelector(
  getOperationByDate,
  items => {
    const groups =  new Map();

    items.forEach(item => {
      const itemDate = dayjs(item.date);
      const year = dayjs(itemDate).year() === dayjs().year() ? '' : ' YYYY';
      const formatDate = itemDate.format(`DD MMMM ${year}, dd`);

      const groupItems = groups.get(formatDate) || [];
      groups.set(formatDate, [ ...groupItems, item])
    });
    return groups;
  }
);