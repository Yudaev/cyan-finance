import { createSelector } from 'reselect'
import propOr from 'lodash/fp/propOr';
import dayjs from 'dayjs';
import dayjsRU from 'dayjs/locale/ru';
import { uniqWith, isEqual, isDate } from 'lodash/fp';

const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

dayjs.locale(dayjsRU);

const selectOperations = state => state.operations || {};

export const getOperations = createSelector(
  selectOperations,
  propOr([], 'items')
);

export const getDate = createSelector(
  selectOperations,
  propOr({}, 'date')
);

export const getTypeSwitch = createSelector(
  selectOperations,
  propOr({}, 'type')
);

export const getGroupByYears = createSelector(
  getOperations,
  items => {
    const years = [];
    items.forEach(
      item => {
        const currentYear = dayjs(item.date).year();
        years.push(currentYear);
      });
    const onlyUniq = _.uniqWith(years, _.isEqual);
    return onlyUniq;
  }
);

export const getCurrentDatesObject = createSelector(
  getDate,
  date => {
    const currentDates = {
      day: dayjs(date).date(),
      month: dayjs(date).month(),
      year: dayjs(date).year(),
    };
    return currentDates;
  },
);

export const getValuesByType = createSelector(
  [getCurrentDatesObject, getOperations, getTypeSwitch, getDate],
  (currentDates, items, type, date) => {
    const stats = {
      income: 0,
      expense: 0,
    };
    items.forEach(item => {
      const itemDates = {
        day: dayjs(item.date).date(),
        month: dayjs(item.date).month(),
        year: dayjs(item.date).year(),
      }
      switch (type) {
        case 'день': 
          if (item.type === 'income' && JSON.stringify(currentDates) === JSON.stringify(itemDates)) 
            stats.income += Number(item.value);
          if (item.type === 'expense' && JSON.stringify(currentDates) === JSON.stringify(itemDates)) 
            stats.expense += Number(item.value);
          break;
        case 'месяц':
          delete currentDates.day;
          delete itemDates.day;
            if (item.type === 'income' && JSON.stringify(currentDates) === JSON.stringify(itemDates)) 
              stats.income += Number(item.value);
            if (item.type === 'expense' && JSON.stringify(currentDates) === JSON.stringify(itemDates)) 
              stats.expense += Number(item.value);
          break;
        case 'год':
            if (item.type === 'income' && date == itemDates.year) 
              stats.income += Number(item.value);
            else if (dayjs(date).year() == itemDates.year && item.type === 'income') 
              stats.income += Number(item.value);

            if (item.type === 'expense' && date == itemDates.year) 
              stats.expense += Number(item.value);
            else if (dayjs(date).year() == itemDates.year && item.type === 'expense') 
              stats.expense += Number(item.value);
          break;
        case 'все время':
            if (item.type === 'income') stats.income += Number(item.value);
            if (item.type === 'expense') stats.expense += Number(item.value);
          break;
        case 'интервал':
          const isDate = _.isDate(date);
            if (isDate) return true;
            else {
              const isBetween = dayjs(item.date).isBetween(date[0], date[1], 'day', '[]');
              if (item.type === 'income' && isBetween) stats.income += Number(item.value);
              if (item.type === 'expense' && isBetween ) stats.expense += Number(item.value);
            }
          break;
        default: 
          return stats;
      }
    });
    return stats;
  }
);







