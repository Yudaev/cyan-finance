import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import styles from './OperationsPage.scss';

import OperationsPageDateBlock from './OperationPageDateBlock/OperationPageDateBlock.jsx';
import EditOperationPage from '../EditOperationPage/EditOperationPage';

const cx = classnames.bind(styles);

export default class OperationsPage extends Component {
  state = {
    date: new Date(),
    openPopup: false,
    popupData: {},
    groups: [],
  }

  togglePopup = ({ id, title , value, type, category, date, repetitive, repetitiveDay, description }) => {
    //console.log(this.props);

    this.setState(state => {
      return {
        openPopup: !state.openPopup,
        popupData: {
          ...state.popupData,
          id: id,
          value: value,
          type: type,
          title: title,
          category: category,
          repetitive: repetitive,
          date: date,
          repetitiveDay: repetitiveDay,
          description: description,
          categories: this.props.categoriesList
        }
      }
    });
  }

  render() {
    const {
      groups: groupsMap,
      categories,
      onUpdateItem,
      onDeleteItem,
      onChangeDate
    } = this.props;

    const groupsArray = [];
    // неожидал что Map нельзя нормально проитерировать в реакте
    // пришлось преобразовать в массив, @todo: избавиться от Map в компоненте
    groupsMap.forEach((items, date) => groupsArray.push({date, items}));

    let popup = this.state.openPopup ? (
      <EditOperationPage
        togglePopup={this.togglePopup}
        data={this.state.popupData}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
      ) : null;
    let calendarSettings = {
      firstDayOfWeek: 1,
      dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      dayNamesShort: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
      dayNamesMin: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      clear: 'Limpiar',
    };

    return (
      <div className={cx("container", "content")}>
        <div className={cx("popupWrapper")}>
          {popup}
        </div>
        <div className={cx("header")}  style={{display: this.state.openPopup ? 'none' : null}}>
          <div className={cx("incomeWrapper")}>
            <span className={cx("incomeAmount")}>{`${this.props.stats.income} р.`}</span>
            <span className={cx("mark")}>доход</span>
          </div>
          <div className="monthWrapper">
            <Calendar
              locale={calendarSettings}
              className={cx("monthPicker")}
              inputStyle={{minWidth: "100px"}}
              value={this.state.date}
              onSelect={(e) => onChangeDate(e.value)}
              view="month"
              dateFormat="MM yy"
              yearNavigator={true}
              yearRange="2020:2030"
            />
          </div>
          <div className={cx("expensesWrapper")}>
            <span className={cx("expensesAmount")}>{`${this.props.stats.expense} р.`}</span>
            <span className={cx("mark")}>расход</span>
          </div>
        </div>
        <div className={cx("body")} style={{display: this.state.openPopup ? 'none' : null}}>
          {groupsArray.map(({date, items}, key) => (
            <OperationsPageDateBlock
              key={key}
              date={date}
              items={items}
              togglePopup={ this.togglePopup }
              categories={categories}
            />
          ))}
        </div>
        <div className={cx("upBtnWrapper")} style={{display: 'none'}}>
          <Button icon="pi pi-arrow-up" className="p-button-secondary"/>
        </div>
      </div>
    )
  }
}
