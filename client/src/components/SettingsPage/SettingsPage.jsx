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
    openPopUp: false
  };

  // handlePopUp = () => {
  //   this.setState(prevState => ({ openPopUp: !prevState.openPopUp }))
  // };

  togglePopup = ({ id, title , value, type, category, date, repetitive, repetitiveDay, description }) => {
    //console.log(this.props);

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
          date: date,
          repetitiveDay: repetitiveDay,
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
      addRepetitiveOperation,
      onUpdateItem,
      onDeleteItem,
    } = this.props;

    // let show = this.state.openPopUp === true ? `${cx('popUp')}` : `${cx('noPopUp')}`;
    let popup = this.state.openPopup ? (
      <EditOperationPage
        togglePopup={this.togglePopup}
        data={this.state.popupData}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
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
              // handlePopUp={this.handlePopUp}
              togglePopup={ this.togglePopup }
              items={items}
              date={date}
              categories={categoriesAsObject}
            />)
          )}
        </ScrollPanel>
        <Button
          label="ДОБАВИТЬ ЗАПИСЬ"
          className="p-button-raised p-button-secondary"
          onClick={() => this.togglePopup()}
          style={{display: this.state.openPopup ? 'none' : null}}
        />
      </div>
    )
  }
}

export default SettingsPage;
