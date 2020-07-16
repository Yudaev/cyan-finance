import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import styles from './PageIncExp.scss';

const cx = classnames.bind(styles);

export default class PageIncExp extends Component {
  state = {
    valueNum: null,
    selectedCategory: null,
    filteredCategories: null
  };

  onButtonClick (type) {
    const { addOperation } = this.props;
    const { valueNum: value, selectedCategory: category } = this.state;

    if (value && type) {
      addOperation({ value, category, type });
      this.setState({
        valueBut: null,
        selectedCategory: null,
        valueNum: null,
      });
    }
  }

  componentDidMount () {
    this.categories = [
      { title: 'Автомобиль', _id: 1 },
      { title: 'Дети', _id: 2 },
      { title: 'Еда', _id: 3 },
      { title: 'Работа', _id: 4 },
      { title: 'Развлечения', _id: 5 },
    ];
  };

  filterCategories = (event) => {
      let results;

      if (event.query.length === 0) {
          results = [...this.categories];
      } else {
          results = this.categories.filter((category) => {
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

  render () {
    return (
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
              value={this.state.valueNum}
              onChange={(e) => this.setState({ valueNum: e.value })}
              mode="currency"
              currency="RUB"
              locale="ru-RU"
              size={37}
              placeholder={'Введите сумму'}
            />
          </div>
          <div className={cx("incexp-body-input", 'category')}>
            <AutoComplete
              placeholder={'Выберите категорию'}
              size={32}
              value={this.state.selectedCategory && this.state.selectedCategory.title}
              suggestions={this.state.filteredCategories}
              completeMethod={this.filterCategories}
              dropdown={true}
              style={{ height: '33px' }}
              itemTemplate={this.categoriesTemplate}
              onChange={(e) => {
                  if(typeof e.value === 'string') {
                      const category = this.categories.find(
                        category => category.title.toLowerCase() === e.value.toLowerCase()
                      ) || { title: e.value, _id: null };
                      this.setState({ selectedCategory: category })
                  } else {
                      this.setState({ selectedCategory: e.value });
                  }

              }}
            />
          </div>
          <div className={cx("incexp-body-button")}>
            <div className={cx('buttons-container')}>
              <Button
                label="Доход"
                className='p-button-secondary'
                onClick={() => this.onButtonClick('income')}
              />
              <Button
                label="Расход"
                className='p-button-secondary'
                onClick={() => this.onButtonClick('expense')}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
} 