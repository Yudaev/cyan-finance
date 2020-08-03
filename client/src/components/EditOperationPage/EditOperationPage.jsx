import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import styles from './EditOperationPage.scss';

const cx = classnames.bind(styles);

export default class EditOperation extends Component {

    state = {
        checked: true,
        categories: this.props.categories || [],
        filteredCategories: null,
        category: null,
        amount: null,
        date: new Date(),
        type: null,
        title: 'Без названия',
        description: 'Описание отсутствует',
    };

    onButtonClick () {
        let { addRepetitiveOperation } = this.props;
        const { 
            amount: value,
            category: category,
            checked: repetitive,
            date: date,
            title: title,
            type: type,
            description: description,
        } = this.state;
    
        try {
            if ((value && type && repetitive && date) !== (null || undefined)) {
                addRepetitiveOperation({
                    value,
                    category,
                    type,
                    repetitive,
                    date,
                    title,
                    description
                });
                this.setState({
                  category: null,
                  amount: null,
                  checked: true,
                  type: null,
                  title: null,
                  description: null,
                });
              }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidUpdate(prevProps) {
        const { categories } = this.props;
            if (categories !== prevProps.categories) {
                this.setState({
                    categories
                })
            };
    };

    filterCategory = (event) => {
        let results;
        if (!event.query) {
            results = [...this.state.categories];
        } else {
            results = this.state.categories.filter(cat => {
                return cat.title.toLowerCase().startsWith(event.query.toLowerCase())
            });
        }
        this.setState({
            filteredCategories: results
        });
    };

    categoriesTemplate = (category) => {
        return (
          <div style={{ fontSize: '16px' }}>{category.title}</div>
        );
    };

    render() {
        
        const types = [
            { label: 'Расход', value: 'expense' },
            { label: 'Доход', value: 'income' }
        ];

        return(
            <div className={cx("container", "content")}>
                <div className={cx("backIconWrapper")}>
                    <Button
                        className="p-button-raised p-button-secondary"
                        icon="pi pi-arrow-left"
                        onClick={this.props.togglePopup} />
                </div>
                <form className={cx("editOperationForm")}>
                    <div className={cx("formBody")}>
                        <InputText 
                            className={cx("inputItem")} 
                            placeholder="Название операции"
                            value={this.state.title}
                            onChange={e => this.setState({ title: e.target.value })}    
                        />
                        <InputNumber 
                            className={cx("inputItem")} 
                            value={this.state.amount} 
                            onChange={e => this.setState({ amount: e.value })} 
                            placeholder="Сумма" 
                            mode="currency"
                            currency = 'RUB' 
                        />
                        <div className={cx("btnWrapper")}>
                            <SelectButton 
                                options={ types }
                                onChange={ (e) => this.setState({ type: e.value }) }
                                value={ this.state.type }
                            />
                        </div>
                        <AutoComplete 
                            className={cx("inputItem", "someClass")}
                            id="categoryInput"
                            value={this.state.category && this.state.category.title} 
                            onChange={(e) => {
                                if(typeof e.value === 'string') {
                                    const category = this.state.categories.find(
                                      category => category.title.toLowerCase() === e.value.toLowerCase()
                                    ) || { title: e.value };
                                    this.setState({ category: category })
                                } else {
                                    this.setState({ category: e.value });
                                }
              
                            }}
                            suggestions={this.state.filteredCategories} 
                            completeMethod = {this.filterCategory}
                            dropdown
                            itemTemplate={this.categoriesTemplate}
                            placeholder="Выберите категорию"
                            inputStyle={{
                                width: "calc(100% - 32.98px)",
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                borderRight: "none"
                            }} 
                            buttonStyle={{ height: "20px" }}
                            field="label"
                        />
                        <Calendar 
                            className={cx("inputItem")} 
                            showIcon
                            value={this.state.date}
                            onSelect={(event) => this.setState({ date: event.value }) }
                            dateFormat="dd/mm/yy" 
                            placeholder={new Date().toLocaleDateString()} 
                            inputStyle={{ width: "calc(100% - 2.357em)" }} 
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
                                <span className={cx("regularDate")}>
                                    {` ${this.state.date.getDate()} `}
                                </span> 
                                числа
                            </label>
                        </div>
                        <InputTextarea
                            className={cx("inputItem")}
                            placeholder="Описание"
                            autoResize
                            value={this.state.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </div>
                    <div className={cx("formFooter")}>
                        <div className={cx("btnWrapper")}>
                            <Button 
                                label="Удалить" 
                                className={cx(
                                    "p-button-raised", 
                                    "p-button-secondary", 
                                    "p-button-danger", 
                                    "editPageBtn")}
                                onClick={ e => e.preventDefault() }
                            />
                            <Button 
                                label="ОК" 
                                className={cx(
                                    "p-button-raised",
                                    "p-button-primary",
                                    "editPageBtn")}
                                onClick={() => this.onButtonClick() }
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
