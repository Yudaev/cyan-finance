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
            <Card
              title={title}
              subTitle={`${typeText} ${repetitive ? '(Ежемесячно)' : ''}` }
              className={typeOf}
            >
                {value} p.
                <i className="pi pi-ellipsis-v" />
            </Card> 
        </div> 
    )
}