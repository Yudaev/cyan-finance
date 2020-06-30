import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './PopupSettings.scss';

import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';

const cx = classnames.bind(styles);

class Popup extends Component {

        state = {
            regularity: null,
            type: null,
            category: null
        }

        regularity = [
            {label: 'Ежемесячно', value: 'Ежемесячно'},
            {label: 'Еженедельно', value: 'Еженедельно'},
            {label: 'Ежедневно', value: 'Ежедневно'},
            {label: 'Ежегодно', value: 'Ежегодно'},
        ];

        types = [
            {label: 'Доход', value: 'Доход'},
            {label: 'Расход', value: 'Расход'}
        ];

        categories = [
            {label: 'Автомобиль', value: 'Автомобиль'},
            {label: 'Дети', value: 'Дети'},
            {label: 'Еда', value: 'Еда'},
            {label: 'Квартира', value: 'Квартира'},
            {label: 'Кредит', value: 'Кредит'}
        ]

    render() {
        return(
            <div className={cx("container", "content")}>
                <div className={cx("goBackButton")}>
                    <i className="pi pi-arrow-left" />
                </div>
                <div className={cx("body")}>
                    <div className={cx("inputBlock")}>
                        <span className="p-float-label">
                            <InputText id="in" className={cx("input")} />
                            <label htmlFor="in">Название операции</label>
                        </span>
                    </div>
                    <div className={cx("inputBlock")}>
                        <span className="p-float-label">
                            <InputText id="in" className={cx("input")} />
                            <label htmlFor="in">Сумма</label>
                        </span>
                    </div>
                    <div className={cx("inputBlock")}>
                        <span className="p-float-label">
                            <InputText id="in" className={cx("input")} />
                            <label htmlFor="in">День</label>
                        </span>
                    </div>
                    <div className={cx("selectBlock")}>
                        <Dropdown
                            className={cx("dropDown")}
                            placeholder="Выберите регулярность"
                            value={this.state.regularity} 
                            options={this.regularity}
                            onChange={(e) => this.setState({ regularity: e.value})}  
                        />
                        <SelectButton
                            className={cx("selectButton")}
                            value={this.state.type}
                            options={this.types}
                            onChange={(e) => this.setState({ type: e.value})}  
                        />
                        <Dropdown
                            className={cx("dropDown")}
                            placeholder="Категория"
                            value={this.state.category} 
                            options={this.categories}
                            onChange={(e) => this.setState({ category: e.value})}  
                        />
                    </div>
                </div>
                <div className={cx("footer")}>
                    <Button label="УДАЛИТЬ" className="p-button-danger" />
                    <Button label="OK" className="p-button-success" />
                </div>
            </div>
        )
    }
}

export default Popup;