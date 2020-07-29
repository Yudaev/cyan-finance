import React from 'react';
import classnames from 'classnames/bind';
import { Card } from 'primereact/card';
import styles from './Card.scss';

const cx = classnames.bind(styles);

export default ({ type, repetitive, value, title, handlePopUp, category }) => {
  const typeText = type === 'income' ? 'Доход' : 'Расход';
  const typeOf = type === 'income' ? `${ cx('greenCard') }` : `${ cx('redCard') }`;

  return (
    <div className={cx('card')} onClick={handlePopUp}>
      <Card className={typeOf}>
        <div className={cx('left')}>
          {category && <div className={cx('category')}>{category.title}</div>}
          <div className={cx('description')}>
            <span className={cx('type')}>{typeText}</span>
            {repetitive && <span className={cx('repetitive')}>(Ежемесячно)</span>}
            {title && <span className={cx('title')}>{title}</span>}
          </div>
        </div>
        <div className={cx('right')}>{value} p.</div>
      </Card>
    </div>
  );
};
