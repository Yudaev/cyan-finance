import React from 'react';
import styles from './OperationPageDateBlock.scss';
import classnames from 'classnames/bind';

import Cart from '../../SettingsPage/Cards/Card.jsx';

const cx = classnames.bind(styles);

export default class OperationPageDateBlock extends React.Component {
  render() {
    const { date, items, togglePopup, categories, header=true } = this.props;
    return (
      <div className={cx("container")}>
        {
          header ?
            <div className={cx("header")}>
              <h2>{date}</h2>
            </div>
            :
            null
        }
        {items && items.map((item, key) => (
          <Cart key={key} {...item} category={categories[item.category]} handlePopUp={ togglePopup } />
        ))}
      </div>
    )
  }
}