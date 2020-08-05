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
      groups.set(formatDate, [ ...groupItems, item]);
    });
    return groups;
  }
);

export const getDate = createSelector(
  selectOperations,
  propOr({}, 'date'),
);

export const getMonth = createSelector(
  getDate,
  date => { 
    const currentDatesObject = {
      month: dayjs(date).month(),
      year: dayjs(date).year(),
    }
    return currentDatesObject;
  },
);

export const getValuesByMonth = createSelector(
  [getMonth, getOperationList],
  (currentDatesObject, items) => {
    const stats = {
      income: 0,
      expense: 0,
    };
    items.forEach(item => {
      const itemDatesObject = {
        month: dayjs(item.date).month(),
        year: dayjs(item.date).year(),
      }
      if (item.type === 'income' && JSON.stringify(currentDatesObject) === JSON.stringify(itemDatesObject))
        stats.income += Number(item.value);
      if (item.type === 'expense' && JSON.stringify(currentDatesObject) === JSON.stringify(itemDatesObject))
        stats.expense += Number(item.value);
    });
    return stats;
  }
);

export const getRepetitiveOperations = createSelector(
  getOperationList,
  items => {
    const repetitiveGroups = new Map();

    items.forEach(item => {
      const itemDate = dayjs(item.date);
      const year = dayjs(itemDate).year() === dayjs().year() ? '' : ' YYYY';
      const formatDate = itemDate.format(`DD MMMM ${year}, dd`);

      const groupItems = repetitiveGroups.get(formatDate) || [];
      if (item.repetitive === true) repetitiveGroups.set(formatDate, [ ...groupItems, item]);
    });

    return repetitiveGroups;
  }
);