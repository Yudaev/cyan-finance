import React from 'react';
import styles from './OperationPageDateBlock.scss';
import classnames from 'classnames/bind';

import OperationPageItem from '../OperationPageItem/OperationPageItem.jsx';

const cx = classnames.bind(styles);

export default class OperationPageDateBlock extends React.Component {
  state = {

  }

  render() {
    return (
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>Дата</h2>
        </div>
            <OperationPageItem />
            <OperationPageItem />
      </div>
    )
  }
}