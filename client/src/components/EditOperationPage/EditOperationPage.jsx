import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import {Checkbox} from 'primereact/checkbox';
import {InputTextarea} from 'primereact/inputtextarea';
import styles from './EditOperationPage.scss';
import {RadioButton} from 'primereact/radiobutton';

const cx = classnames.bind(styles);

export default class EditOperationPage extends Component {
  state = {
    _id: this.props.data.id,
    title: this.props.data.title || undefined,
    value: this.props.data.value,
    type: this.props.data.type,
    selectedCategory: this.props.data.category,
    filteredCategories: null,
    categories: this.props.data.categories || [],
    date: new Date(this.props.data.date) || undefined,
    repetitive: this.props.data.repetitive || false,
    repetitiveDay: this.props.data.repetitiveDay || undefined,
    description: this.props.data.description || undefined,
    try: false
  }

  filterCategories = (event) => {
    let results;

    if (event.query.length === 0) {
      results = [...this.state.categories];
    } else {
      results = this.state.categories.filter((category) => {
        return category.title.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }

    this.setState({ filteredCategories: results });
  };

  categoriesTemplate = (category) => {
    return (
      <div style={{ fontSize: '16px' }}>{category.title}</div>
    );
  };

  render() {
    return (
      <div className={cx("container", "content")}>
        <div className={cx("backIconWrapper")}>
          <Button className="p-button-raised p-button-secondary" icon="pi pi-arrow-left"
                  onClick={this.props.togglePopup}/>
        </div>
        <form className={cx("editOperationForm")}>
          <div className={cx("formBody")}>
            <InputText
              className={cx("inputItem")}
              placeholder="Название операции"
              value={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}
            />
            <InputNumber
              className={cx("inputItem")}
              value={this.state.value}
              placeholder="Сумма"
              mode="currency"
              currency='RUB'
              onChange={(e) => this.setState({value: e.value})}
              required={true}
            />
            <div className={cx("chkWrapper")}>
              <div className={cx("chkElem")}>
                <RadioButton
                  value="income"
                  inputId="income"
                  name="type"
                  onChange={(e) => this.setState({type: e.value})}
                  checked={this.state.type === 'income'} />
                <label htmlFor="income" className="p-radiobutton-label">Доход</label>
              </div>
              <div className={cx("chkElem")}>
                <RadioButton
                  value="expense"
                  inputId="expense"
                  name="type"
                  onChange={(e) => this.setState({type: e.value})}
                  checked={this.state.type === 'expense'} />
                <label htmlFor="expense" className="p-radiobutton-label">Расход</label>
              </div>
            </div>
            <AutoComplete
              className={cx("inputItem", "someClass")}
              size={32}
              value={this.state.selectedCategory && this.state.selectedCategory.title}
              onChange={(e) => this.setState({category: e.value})}
              suggestions={this.state.filteredCategories}
              completeMethod={this.filterCategories}
              itemTemplate={this.categoriesTemplate}
              dropdown={true}
              placeholder="Выберте категорию"
              inputStyle={{
                width: "calc(100% - 33px)",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                borderRight: "none"
              }}
              buttonStyle={{height: "20px"}}
              field="label"
              onChange={(e) => {
                if (typeof e.value === 'string') {
                  const category = this.state.categories.find(
                    category => category.title.toLowerCase() === e.value.toLowerCase()
                  ) || {title: e.value};
                  this.setState({selectedCategory: category})
                } else {
                  this.setState({selectedCategory: e.value});
                }
              }
              }
            />
            <Calendar
              className={cx("inputItem")}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder={this.state.date.toLocaleString()}
              value={this.state.date}
              inputStyle={{width: "calc(100% - 33px)"}}
              showTime={true}
              hourFormat="24"
              onChange={(e) => this.setState({date: e.value})}
            />
            <div className={cx("checkboxWrapper")}>
              <Checkbox
                inputId="regularTrue"
                checked={this.state.repetitive}
                onChange={e => this.setState({repetitive: e.checked})}
              />
              <label htmlFor="regularTrue" className={cx("checkboxLabel")}>
                {`Повторять `}
                <span className={cx("regularity")}>ежемесячно</span>
                <span className={cx("regularDate")}>{` ${this.state.repetitiveDay} `}</span>
                числа
              </label>
            </div>
            <InputTextarea
              className={cx("inputItem")}
              placeholder="Описание"
              autoResize={true}
              value={this.state.description}
              onChange={(e) => this.setState({description: e.target.value})}
            />
          </div>
          <div className={cx("formFooter")}>
            <div className={cx("btnWrapper")}>
              {this.state._id ?
                <Button
                  label="Удалить"
                  className={cx("p-button-raised", "p-button-secondary", "p-button-danger", "editPageBtn")}
                  onClick={e => {
                    e.preventDefault();
                    this.props.onDeleteItem(this.state);
                    this.props.togglePopup(this.state._id);
                  }}
                /> :
                null
              }
              <Button
                label="ОК"
                className={cx("p-button-raised", "p-button-primary", "editPageBtn")}
                onClick={e => {
                  e.preventDefault();
                  this.setState({try: true})
                  this.state._id ?
                    this.props.onUpdateItem(this.state):
                    this.props.addOperation(this.state);
                  this.state._id ?
                    this.props.togglePopup(this.state._id):
                      this.state.value !== undefined ?
                        this.state.type === 'income' ||
                        this.state.type ==='expense' ?
                          this.props.togglePopup('new') :
                          null :
                      null;
                }}
              />
            </div>
            {
              this.state.try === true ?
                this.state.value === undefined ||
                this.state.type !== 'income' ||
                this.state.type !== 'expense'?
                  <div>
                    Заполните обязательные поля:
                    {this.state.value === undefined ? <div>Сумма</div> : null}
                    {this.state.type === 'income' || this.state.type === 'expense' ? null : <div>Доход / Расход</div>}
                  </div>
                  :
                  null
                :
                null
              }
          </div>
        </form>
      </div>
    )
  }
}