import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Card } from 'primereact/card';

import styles from './Card.scss';

const cx = classnames.bind(styles); 

export default (props) => {

    let { type, regularity } = props;

    type = 'Доход';
    regularity = 'Ежемесячно';

    let typeOf = type === 'Доход' ? `${cx("greenCard")}` : `${cx("redCard")}`;

    return(
        <div className={cx("card")} onClick={() => props.handlePopUp()}>
            <Card title={type} subTitle={`10 марта ` + `(` + regularity + `)` } className={typeOf}>
                22000 p.
                <i className="pi pi-ellipsis-v" />
            </Card> 
        </div> 
    )
}