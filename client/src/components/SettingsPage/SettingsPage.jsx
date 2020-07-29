import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';
import styles from './SettingsPage.scss';

import Card from './Cards/Card';
import EditOperationPage from '../EditOperationPage/EditOperationPage';

const cx = classnames.bind(styles);

class SettingsPage extends Component {
  state = {
    openPopUp: false,
  };

  handlePopUp = () => {
    this.setState((prevState) => ({
      openPopUp: !prevState.openPopUp,
    }));
  };

  render() {
    const show = this.state.openPopUp === true ? `${ cx('popUp') }` : `${ cx('noPopUp') }`;

    return (
      <div className={cx('container', 'content')}>
        <div className={show}>
          <EditOperationPage openPopUp={this.state.openPopUp} handlePopUp={this.handlePopUp} />
        </div>
        <ScrollPanel className={cx('cardList')}>
          <Card handlePopUp={this.handlePopUp} />
          <Card handlePopUp={this.handlePopUp} />
        </ScrollPanel>
        <Button label="ДОБАВИТЬ ЗАПИСЬ" className="p-button-raised p-button-secondary" />
      </div>
    );
  }
}

export default SettingsPage;
