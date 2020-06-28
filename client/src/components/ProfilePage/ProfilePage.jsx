import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import styles from './ProfilePage.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {
    render() {
        return(
            <div className={cx("container", "content")}>
                    <div className={cx("profile-header")}>
                            <i className={cx("pi pi-user")}></i>
                    </div>
                        <div className={cx("profile-settings")}>
                                <p className="profile-settings__p">
                                    user@mail.ru
                                </p>
                                <Button label="Change password" className="p-button-raised p-button-secondary" />
                        </div>
                        <div className={cx("profile-body")}>

                        </div>  
                        <div className={cx("profile-footer")}>
                            <div className={cx("profile-footer__social-links")}>
                                    <i className="pi pi-google"></i>
                                    <i className="pi pi-twitter"></i>
                                    <i className="pi pi-facebook"></i>
                                    <i className="pi pi-apple"></i>
                                    <i className="pi pi-android"></i>
                            </div>
                            <div className={cx("profile-footer__exit")}>
                                <a href="#">Выход</a>
                            </div>
                        </div>
            </div>
        )
    }
}
