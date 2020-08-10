import React from 'react';
import classnames from 'classnames/bind';
import { Card } from 'primereact/card';
import styles from './Card.scss';

const cx = classnames.bind(styles);

export default ({ _id, title, value, type, category, date, repetitive, repetitiveDay, description, handlePopUp }) => {
  const typeText = type === 'income' ? 'Доход' : 'Расход';
  let typeOf = type === 'income' ? `${cx("greenCard")}` : `${cx("redCard")}`;
  let itemData = {
    id: _id,
    title: title,
    value: value,
    type: type,
    category: category,
    date: date,
    repetitive: repetitive,
    repetitiveDay: repetitiveDay,
    description: description,
  }

  return (
    <div className={cx("card")} onClick={() => handlePopUp(itemData)}>
      <Card className={typeOf}>
        <div className={cx('left')}>
          {category && <div className={cx('category')}>{category.title}</div>}
          <div className={cx('description')}>
            <span className={cx('type')}>{typeText}</span>
            {repetitive && <span className={cx('repetitive')}>(Ежемесячно)</span>}
            {title && <span className={cx('title')}>{title}</span>}
          </div>
        </div>
        <div className={cx('right')}>
          {value} p.
        </div>
      </Card>
    </div>
  )
}