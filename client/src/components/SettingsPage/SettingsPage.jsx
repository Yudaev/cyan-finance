import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './SettingsPage.scss';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import EditOperationPage from '../EditOperationPage/EditOperationPage'
import OperationPageDateBlock from '../OperationsPage/OperationPageDateBlock/OperationPageDateBlock';

const cx = classnames.bind(styles);

class SettingsPage extends Component {

  state = {
    date: new Date(),
    openPopUp: false
  };

  togglePopup = ({
                   id,
                   title ,
                   value,
                   type,
                   category,
                   date,
                   repetitive=true,
                   repetitiveDay,
                   description
  }) => {
    //console.log('1')
    this.setState(state => {
      return {
        openPopup: !state.openPopup,
        popupData: {
          ...state.popupData,
          id: id,
          value: value,
          type: type,
          title: title,
          category: category,
          repetitive: repetitive,
          date: date ? date : this.state.date,
          repetitiveDay: repetitiveDay ? repetitiveDay : 1,
          description: description,
          categories: this.props.categoriesList
        }
      }
    });
  }

  render() {
    const {
      repetitiveOperations: repetitiveOperationsMap,
      categories,
      categoriesAsObject,
      onUpdateItem,
      onDeleteItem,
      addOperation,
    } = this.props;

    let popup = this.state.openPopup ? (
      <EditOperationPage
        togglePopup={this.togglePopup}
        data={this.state.popupData}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
        addOperation={addOperation}
      />
    ) : null;

    const repetitiveOperationsArray = [];
    repetitiveOperationsMap.forEach((items, date) =>
      repetitiveOperationsArray.push({ items, date })
    );

    return (
      <div className={cx("container", "content")}>
        <div className={cx("popupWrapper")}>
          {popup}
        </div>
        <ScrollPanel className={cx("cardList")} style={{display: this.state.openPopup ? 'none' : null}}>
          {repetitiveOperationsArray.map(({ items, date }, key) =>
            (<OperationPageDateBlock
              key={key}
              togglePopup={ this.togglePopup }
              items={items}
              date={date}
              categories={categoriesAsObject}
              header={false}
            />)
          )}
        </ScrollPanel>
        <Button
          label="ДОБАВИТЬ ЗАПИСЬ"
          className="p-button-raised p-button-secondary"
          onClick={this.togglePopup}
          style={{display: this.state.openPopup ? 'none' : null}}
        />
      </div>
    )
  }
}

export default SettingsPage;
