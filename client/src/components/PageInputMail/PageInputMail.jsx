import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import styles from './PageInputMail.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {
    render() {
        return(
            <div className={cx("container", "content")}>
                <div className={cx("inpmail-icon")}>
                    <i className="pi pi-times-circle" style={{ fontSize: '1.5em' }}></i>
                </div>
                <div className={cx("inpmail-header")}>
                    <div className={cx("inpmail-header-text")}>
                        <span className={cx("inpmail-header-span")}>Enter your mail, a password</span>
                    </div>
                    <div className={cx("inpmail-header-text")}>
                        <span className={cx("inpmail-header-span")}>recovery link will be sent to you</span> 
                    </div>
                </div>
                <div className={cx("inpmail-body")}>
                    <div className={cx("inpmail-body-input")}>
                        <span className="p-float-label">
                            <InputText id="in2" size={27}/>
                            <label htmlFor="in2">Your e-mail</label>
                        </span>
                    </div>
                    <div className={cx("inpmail-body-button")}>
                        <Button label="Confirm" className="p-button" style={{ width: '15.8em' }}/>
                    </div>
                </div>
            </div>
        )
    }
} 