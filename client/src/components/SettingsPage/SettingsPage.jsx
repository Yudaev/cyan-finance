import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './SettingsPage.scss';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

const cx = classnames.bind(styles);

class SettingsPage extends Component {
    render() {
        return ( 
            <div className={cx("container", "content")}>
                <ScrollPanel className={cx("cardList")}>
                    <div className={cx("cardBack")}>
                        <div className={cx("card")}>
                            <div className={cx("leftSide")}>
                                <p className={cx("title")}>Доход</p>
                                <p className={cx("date")}>
                                    10 марта 
                                    <span className={cx("regular")}>(раз в месяц)</span>
                                </p>
                            </div>
                            <div className={cx("rightSide")}>
                                <p className={cx("amount")}>22000 р.</p>
                                <i className="pi pi-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("altCardBack")}>
                        <div className={cx("altCard")}>
                            <div className={cx("leftSide")}>
                                <p className={cx("title")}>Расход</p>
                                <p className={cx("date")}>
                                    12 марта 
                                    <span className={cx("regular")}>(раз в месяц)</span>
                                </p>
                            </div>
                            <div className={cx("rightSide")}>
                                <p className={cx("amount")}>17500 р.</p>
                                <i className="pi pi-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("cardBack")}>
                        <div className={cx("card")}>
                            <div className={cx("leftSide")}>
                                <p className={cx("title")}>Доход</p>
                                <p className={cx("date")}>
                                    10 марта 
                                    <span className={cx("regular")}>(раз в месяц)</span>
                                </p>
                            </div>
                            <div className={cx("rightSide")}>
                                <p className={cx("amount")}>22000 р.</p>
                                <i className="pi pi-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("cardBack")}>
                        <div className={cx("card")}>
                            <div className={cx("leftSide")}>
                                <p className={cx("title")}>Доход</p>
                                <p className={cx("date")}>
                                    10 марта 
                                    <span className={cx("regular")}>(раз в месяц)</span>
                                </p>
                            </div>
                            <div className={cx("rightSide")}>
                                <p className={cx("amount")}>22000 р.</p>
                                <i className="pi pi-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("altCardBack")}>
                        <div className={cx("altCard")}>
                            <div className={cx("leftSide")}>
                                <p className={cx("title")}>Расход</p>
                                <p className={cx("date")}>
                                    12 марта 
                                    <span className={cx("regular")}>(раз в месяц)</span>
                                </p>
                            </div>
                            <div className={cx("rightSide")}>
                                <p className={cx("amount")}>17500 р.</p>
                                <i className="pi pi-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                </ScrollPanel>
                    <div className={cx("button")}>
                        <Button label="ДОБАВИТЬ ЗАПИСЬ" className="p-button-secondary" />
                    </div>
            </div>
                
         )
    }
}

export default SettingsPage;