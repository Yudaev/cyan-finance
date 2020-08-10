import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import styles from './PageIncExp.scss';
import { Messages } from 'primereact/messages';

const cx = classnames.bind(styles);

export default class PageIncExp extends Component {
  state = {
    valueNum: null,
    selectedCategory: null,
    filteredCategories: null,
    categories: this.props.categories || [],
  };

  onButtonClick (type) {
    const { addOperation } = this.props;
    const { valueNum: value, selectedCategory: category } = this.state;

    !value && this.showError('Не заполнена сумма');
    !type && this.showError('Не выбран тип операции');

    if (value && type) {
      addOperation({ value, category, type });
    }
  }

  componentDidUpdate (prevProps) {
    const { categories, addItemStatus = {} } = this.props;
    if (categories !== prevProps.categories) {
      this.setState({
        categories
      })
    }
    if(addItemStatus.type !== prevProps.addItemStatus.type) {
      if(addItemStatus.type === 'success') {
        this.showSuccess('Операция добавлена');
        this.setState({
          valueBut: null,
          selectedCategory: null,
          valueNum: null,
        });
      }
      if(addItemStatus.type === 'error') {
        this.showError(addItemStatus._message || 'Ошибка. Попробуйте еще раз');
      }
    }
  };

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

  showError(summary, detail) {
    this.messages.show({severity: 'error', summary, detail});
  }
  showSuccess(summary, detail) {
    this.messages.show({severity: 'success', summary, detail});
  }

  render () {
    const { expenseOfMonth, expenseOfDay, budgetOfMonth, currentMonth } = this.props;
    
    return (
      <div className={cx('container', 'content')}>
        <div className={cx('stats')}>
          <div className={cx('stats-block')}>
            <span className={cx('title')}>Расход</span>
            <span className={cx('period')}>за сегодня</span>
            <span className={cx('value')}>{expenseOfDay}</span>
          </div>
          <div className={cx('stats-block')}>
            <span className={cx('title')}>Расход</span>
            <span className={cx('period')}>за {currentMonth}</span>
            <span className={cx('value')}>{expenseOfMonth}</span>
          </div>
          <div className={cx('stats-block')}>
            <span className={cx('title')}>Бюджет</span>
            <span className={cx('period')}>на месяц</span>
            <span
              className={cx('value', Number(budgetOfMonth) >= 0 ? 'plus' : 'minus')}
            >{budgetOfMonth}</span>
          </div>
        </div>
        <div className={cx('incexp-body')}>
          <div className={cx('incexp-body-input')}>
            <InputNumber
              value={this.state.valueNum}
              onChange={(e) => this.setState({ valueNum: e.value })}
              mode='currency'
              currency='RUB'
              locale='ru-RU'
              placeholder={'Введите сумму'}
            />
          </div>
          <div className={cx('incexp-body-input', 'category')}>
            <AutoComplete
              placeholder={'Выберите категорию'}
              size={32}
              value={this.state.selectedCategory && this.state.selectedCategory.title}
              suggestions={this.state.filteredCategories}
              completeMethod={this.filterCategories}
              dropdown
              style={{ height: '33px' }}
              itemTemplate={this.categoriesTemplate}
              onChange={(e) => {
                  if(typeof e.value === 'string') {
                      const category = this.state.categories.find(
                        category => category.title.toLowerCase() === e.value.toLowerCase()
                      ) || { title: e.value };
                      this.setState({ selectedCategory: category })
                  } else {
                      this.setState({ selectedCategory: e.value });
                  }

              }}
            />
          </div>
          <div className={cx('incexp-body-button')}>
            <div className={cx('buttons-container')}>
              <Button
                label='Доход'
                className='p-button-secondary'
                onClick={() => this.onButtonClick('income')}
              />
              <Button
                label='Расход'
                className='p-button-secondary'
                onClick={() => this.onButtonClick('expense')}
              />
            </div>

          </div>
        </div>

        <div className={cx('messages-container')}>
          <Messages ref={(el) => this.messages = el} />
        </div>
      </div>
    )
  }
} 