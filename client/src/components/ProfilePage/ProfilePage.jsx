import React, { Component } from 'react';
import classnames from 'classnames/bind';   

import { Button } from 'primereact/button';
import styles from './ProfilePage.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {
    render() {
        const { logout, user: { email } } = this.props;
        return(
            <div className={cx("container", "content")}>
                    <div className={cx("header")}>
                            <i className={cx("pi pi-user")}></i>
                    </div>
                        <div className={cx("settings")}>
                                <p className={cx("p")}>{email}</p>
                                <Button label="Change password" className="p-button-raised p-button-secondary" />
                        </div>
                        <div className={cx("body")}>
                        </div>  
                        <div className={cx("footer")}>
                            <div className={cx("footer__social-links")}>
                                    <i className="pi pi-google"></i>
                                    <i className="pi pi-twitter"></i>
                                    <i className="pi pi-facebook"></i>
                                    <i className="pi pi-apple"></i>
                                    <i className="pi pi-android"></i>
                            </div>
                            <div className={cx("footer__exit")}>
                                <a href='#logout' onClick={e => {
                                  e.preventDefault();
                                  logout();
                                }}>
                                  Выход
                                </a>
                            </div>
                        </div>
            </div>
        )
    }
}
