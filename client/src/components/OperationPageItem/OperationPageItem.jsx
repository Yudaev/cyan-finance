import React from 'react';
import styles from './OperationPageItem.scss';
import classnames from 'classnames/bind';
import {Card} from 'primereact/card';

const cx = classnames.bind(styles);

export default class OperationPageItem extends React.Component {
  state = {

  }

  render() {
    return (
      <Card className={cx("container")}>
        <div className={cx("OperationPageItem__bodyWrapper")}>
          <h3 className={cx("OperationPageItem__operationItemCat")}>Категория</h3>
          <div className={cx("OperationPageItem__timeAndDescriptionBlock")}>
            <span className={cx("OperationPageItem__operationTime")}>13:03</span>
            <span className={cx("OperationPageItem__operationDescription")}>Описание операции</span>
          </div>
        </div>
        <div className={cx("OperationPageItem__amountWrapper")}>
          <p className={cx("OperationPageItem__operationAmount")}> - 1232 р.</p>
        </div>
      </Card>
    )
  }
}