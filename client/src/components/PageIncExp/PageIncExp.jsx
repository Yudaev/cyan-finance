import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { InputNumber } from 'primereact/inputnumber';
import { MultiSelect } from 'primereact/multiselect';
import { SelectButton } from 'primereact/selectbutton';
import styles from './PageIncExp.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueNum: null,
            valueBut: null,
            category: []
        };        
    }

    render() {

        const options = [
            {label: 'Доход', value: 'Income'},
            {label: 'Расход', value: 'Expense'}
        ];

        const categories = [
            {label: 'Автомобиль', value: 'Car'},
            {label: 'Дети', value: 'Kids'},
            {label: 'Еда', value: 'Food'},
            {label: 'Работа', value: 'Work'},
            {label: 'Развлечения', value: 'Entertainment'}
        ];

        return(
            <div className={cx("container", "content")}>
                <div className={cx("incexp-header")}>
                    <div className={cx("incexp-header-text")}>
                        <span className={cx("incexp-header-span")}>Расход</span>
                        <span className={cx("incexp-header-span")}>Бюджет</span>
                        <span className={cx("incexp-header-span")}>Остаток</span>
                    </div>
                    <div className={cx("incexp-header-text")}>
                        <span className={cx("incexp-header-exp")}>900</span> 
                        <span className={cx("incexp-header-bud")}>516</span>
                        <span className={cx("incexp-header-bal")}>-384</span>
                    </div>
                </div>
                <div className={cx("incexp-body")}>
                    <div className={cx("incexp-body-input")}>
                        <InputNumber value={ this.state.valueNum } 
                            onChange={(e) => this.setState({valueNum: e.value})} 
                            mode="currency" 
                            currency="RUB" 
                            locale="ru-RU" 
                            size={37} 
                            placeholder={ 'Введите сумму' }
                        />
                    </div>
                    <div className={cx("incexp-body-input")}>
                        <MultiSelect 
                            style={{ minWidth:'20.75em', minHeight:'2.2em' }}
                            placeholder={ 'Выберите категорию' }
                            value={ this.state.category } 
                            options={ categories } 
                            onChange={ (e) => this.setState({category: e.value}) }
                            filter={ true }
                        />
                    </div>
                    <div className={cx("incexp-body-button")}>
                        <SelectButton 
                            style={{ fontWeight: 'bold' }}
                            value={ this.state.valueBut }
                            options={ options }
                            onChange={ (e) => this.setState({valueBut: e.value}) }
                        />
                    </div>
                </div>
            </div>
        )
    }
} 