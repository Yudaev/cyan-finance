import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { SelectButton } from 'primereact/selectbutton';
import styles from './PageIncExp.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueNum: null,
            valueBut: null,
            selectedCategory: null,
            filteredCategories: null
        };  
        
        this.filterCategories = this.filterCategories.bind(this);
        this.categoriesTemplate = this.categoriesTemplate.bind(this);

    };

    buttonsTemplate(option) {
        return (
            <div className={cx("incexp-body-button-temp")}>{ option.label }</div>
        )
    };

    componentDidMount() {
        this.categories = ['Автомобиль', 'Дети', 'Еда', 'Работа', 'Развлечения'];
    };

    filterCategories(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.categories];
            }
            else {
                results = this.categories.filter((category) => {
                    return category.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredCategories: results });
        }, 250);
    };

    categoriesTemplate(categories) {
        return (
            <div style={{ fontSize: '16px' }}>{ categories }</div>  
        );
    };

    render() {

        const options = [
            {label: 'Доход', value: 'Income'},
            {label: 'Расход', value: 'Expense'}
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
                        <span className={cx("incexp-header-span-opt")}>за день</span> 
                        <span className={cx("incexp-header-span-opt")}>за месяц</span>
                        <span className={cx("incexp-header-span-opt")}>за день</span>
                    </div>
                    <div className={cx("incexp-header-text")}>
                        <span className={cx("incexp-header-exp")}>900</span> 
                        <span className={cx("incexp-header-bud")}>516</span>
                        <span className={cx("incexp-header-bal")}>-384</span>
                    </div>
                </div>
                <div className={cx("incexp-body")}>
                    <div className={cx("incexp-body-input")}>
                        <InputNumber 
                            value={ this.state.valueNum } 
                            onChange={(e) => this.setState({valueNum: e.value})} 
                            mode="currency" 
                            currency="RUB" 
                            locale="ru-RU" 
                            size={37} 
                            placeholder={ 'Введите сумму' }
                        />
                    </div>
                    <div className={cx("incexp-body-input")}>
                        <AutoComplete 
                            placeholder={ 'Выберите категорию' }
                            size={32}
                            value={ this.state.selectedCategory }
                            suggestions={ this.state.filteredCategories }
                            completeMethod={ this.filterCategories }
                            dropdown={ true }
                            style={{ height: '33px' }}
                            itemTemplate={ this.categoriesTemplate }
                            onChange={ (e) => this.setState({selectedCategory: e.value}) }
                        />
                    </div>
                    <div className={cx("incexp-body-button")}>
                        <SelectButton 
                            style={{ fontWeight: 'bold' }}
                            value={ this.state.valueBut }
                            options={ options }
                            onChange={ (e) => this.setState({valueBut: e.value}) } 
                            itemTemplate={ this.buttonsTemplate }
                        />
                    </div>
                </div>
            </div>
        )
    }
} 