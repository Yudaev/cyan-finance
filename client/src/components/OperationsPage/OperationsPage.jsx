import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import styles from './OperationsPage.scss';

import OperationsPageDateBlock from './OperationPageDateBlock/OperationPageDateBlock.jsx';
import EditOperationPage from '../EditOperationPage/EditOperationPage';

const cx = classnames.bind(styles);

const months = [
    {label: "Январь", value: "0"},
    {label: "Февраль", value: "1"},
    {label: "Март", value: "2"},
    {label: "Апрель", value: "3"},
    {label: "Май", value: "4"},
    {label: "Июнь", value: "5"},
    {label: "Июль", value: "6"},
    {label: "Август", value: "7"},
    {label: "Сентябрь", value: "8"},
    {label: "Октябрь", value: "9"},
    {label: "Ноябрь", value: "10"},
    {label: "Декабрь", value: "11"},
]

export default class OperationsPage extends Component {
    state = {
        incomeAmount: 21200,
        expensesAmount: 17300,
        month: new Date().getMonth() + '',
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
                        <Dropdown 
                            className={cx("monthPicker")} 
                            inputStyle={{minWidth: "100px"}} 
                            value={this.state.month} 
                            options={months} 
                            onChange={(e) => {this.setState({month: e.value})}}
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
                <div className={cx("upBtnWrapper")}>
                    <Button icon="pi pi-arrow-up" className="p-button-secondary" />
                </div>
            </div>
        )
    }
}
