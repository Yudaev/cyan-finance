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
        incomeAmount: 21200,
        expensesAmount: 17300,
        date: new Date(),
        openPopup: false
    }

    togglePopup = () => {
        console.log('click')
        this.setState(state => {
            return {
                openPopup: !state.openPopup
            }
        });
    }

    render() {
        let popup = this.state.openPopup ? (<EditOperationPage togglePopup={ this.togglePopup } />) : null;
        let calendarSettings = {
            firstDayOfWeek: 1,
            dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            dayNamesShort: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
            dayNamesMin: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            clear: 'Limpiar',
        };

        return(
            <div className={cx("container", "content")}>
                <div className = {cx("popupWrapper")}>
                    { popup }
                </div>
                <div className={cx("header")}>
                    <div className={cx("incomeWrapper")}>
                        <span className={cx("incomeAmount")}>{`${this.state.incomeAmount} р.`}</span>
                        <span className={cx("mark")}>доход</span>
                    </div>
                    <div className="monthWrapper">
                    <Calendar
                        locale={calendarSettings}
                        className={cx("monthPicker")}
                        inputStyle={{minWidth: "100px"}} 
                        value={this.state.date} 
                        onChange={(e) => this.setState({ date: e.value })} 
                        view="month"
                        dateFormat="MM yy"
                        yearNavigator={true}
                        yearRange="2020:2030"
                    />
                    </div>
                    <div className={cx("expensesWrapper")}>
                        <span className={cx("expensesAmount")}>{`${this.state.expensesAmount} р.`}</span>
                        <span className={cx("mark")}>расход</span>
                    </div>
                </div>
                <div className={cx("body")}>
                    <OperationsPageDateBlock date = '01-07-2020' togglePopup={ this.togglePopup } />
                    <OperationsPageDateBlock date = '30-06-2020' togglePopup={ this.togglePopup } />
                    <OperationsPageDateBlock date = '29-06-2020' togglePopup={ this.togglePopup } />
                </div>
                <div className={cx("upBtnWrapper")} style={{display: 'none'}}>
                    <Button icon="pi pi-arrow-up" className="p-button-secondary" />
                </div>
            </div>
        )
    }
}