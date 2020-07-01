import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import {Checkbox} from 'primereact/checkbox';
import {InputTextarea} from 'primereact/inputtextarea';
import styles from './EditOperationPage.scss';

const cx = classnames.bind(styles);

const categories = [
    {label: 'Связь', value: 'comm'},
    {label: 'Продукты', value: 'food'},
    {label: 'Транспорт', value: 'transport'},
    {label: 'Отдых', value: 'rest'},
    {label: 'Кафе', value: 'cafe'}
];

export default class Test extends Component {
    state = {
        checked: true,
        category: '',
        amount: null
    }
    render() {
        return(
            <div className={cx("container", "content")}>
                <div className={cx("backIconWrapper")}>
                    <Button className="p-button-raised p-button-secondary" icon="pi pi-arrow-left" onClick={e =>e.preventDefault()} />
                </div>
                <form className={cx("editOperationForm")}>
                    <div className={cx("formBody")}>
                        <InputText className={cx("inputItem")} placeholder="Название операции" />
                        <InputNumber 
                            className={cx("inputItem")} 
                            value={this.state.amount} 
                            onChange={e => this.setState({amount: e.value})} 
                            placeholder="Сумма" 
                            mode="currency"
                            currency = 'RUB' 
                        />
                        <div className={cx("btnWrapper")}>
                            <Button 
                                label="Доход" 
                                className={cx("p-button-raised", "p-button-secondary", "editPageBtn")} 
                                onClick={e =>e.preventDefault()}
                            />
                            <Button 
                                label="Расход" 
                                className={cx("p-button-raised", "p-button-secondary", "editPageBtn")}
                                onClick={e =>e.preventDefault()} 
                            />
                        </div>
                        <Dropdown 
                            className={cx("inputItem")} 
                            value={this.state.category}
                            options={categories}
                            onChange={e => {this.setState({category: e.value})}}
                            placeholder="Выберите категорию" 
                        />
                        <Calendar 
                            className={cx("inputItem")} 
                            showIcon={true} 
                            dateFormat="dd/mm/yy" 
                            placeholder={new Date().toLocaleDateString()} 
                            inputStyle={ {width: "calc(100% - 2.357em)"} } 
                        />
                        <div className={cx("checkboxWrapper")}>
                            <Checkbox 
                                inputId="regularTrue" 
                                checked={this.state.checked} 
                                onChange={e => this.setState({checked: e.checked})} 
                            />
                            <label htmlFor="regularTrue" className={cx("checkboxLabel")}> 
                                {`Повторять `}
                                <span className={cx("regularity")}>ежемесячно</span>
                                <span className={cx("regularDate")}>{` ${new Date().getDate()} `}</span> 
                                числа
                            </label>
                        </div>
                        <InputTextarea className={cx("inputItem")} placeholder="Описание" autoResize={true}/>
                    </div>
                    <div className={cx("formFooter")}>
                        <div className={cx("btnWrapper")}>
                            <Button 
                                label="Удалить" 
                                className={cx("p-button-raised", "p-button-secondary", "p-button-danger", "editPageBtn")}
                                onClick={e =>e.preventDefault()}
                            />
                            <Button 
                                label="ОК" 
                                className={cx("p-button-raised", "p-button-primary", "editPageBtn")}
                                onClick={e =>e.preventDefault()}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
