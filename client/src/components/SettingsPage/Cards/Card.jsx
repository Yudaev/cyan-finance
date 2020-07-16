import React from 'react';
import classnames from 'classnames/bind';
import { Card } from 'primereact/card';
import styles from './Card.scss';

const cx = classnames.bind(styles); 

export default ({ type, repetitive, value, title, handlePopUp }) => {
    const typeText = type === 'income' ? 'Доход' : 'Расход';
    let typeOf = type === 'income' ? `${cx("greenCard")}` : `${cx("redCard")}`;

    return(
        <div className={cx("card")} onClick={handlePopUp}>
            <Card className={typeOf}>
              <div className={cx('left')}>
                {title && <div className={cx('title')}>{title}</div>}
                <div className={cx('description')}>{`${typeText} ${repetitive ? '(Ежемесячно)' : ''}` }</div>
              </div>
              <div className={cx('right')}>
                {value} p.
              </div>
            </Card> 
        </div> 
    )
}