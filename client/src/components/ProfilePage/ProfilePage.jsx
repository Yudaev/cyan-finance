import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import styles from './ProfilePage.css';

const cx = classnames.bind(styles);

export default class Test extends Component {
    render() {
        return(
            <div
                className={cx('container content')}>
                    <div
                        className={cx("profile-header")}>
                            <i className={cx("pi pi-user")}></i>
                    </div>
                        <div
                            className={cx("profile-settings")}>
                                <p className="profile-settings__p">
                                    user@mail.ru
                                </p>
                                <Button label="Change password" className="p-button-raised p-button-secondary" />
                        </div>
                        <div
                            className={cx("profile-body")}>

                        </div>
                        <div
                            className={cx("profile-social-links")}>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                        </div>
                    <div className={cx("footer")}>
                        <a href="#">Выход</a>
                    </div>
            </div>
        )
    }
}