import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import styles from './PageRecovery.scss';

const cx = classnames.bind(styles);

export default class Test extends Component {
    render() {
        return(
            <div className={cx("container", "content")}>
                <div className={cx("recovery-header")}>
                    <div className={cx("recovery-header-main-text")}>
                        <span className="recovery-header-span">Change your password</span>
                    </div>
                    <div className={cx("recovery-header-text")}>
                        <span className="recovery-header-span">
                            or back to <a href="#">main</a>
                        </span> 
                    </div>
                </div>
                <div className={cx("recovery-body")}>
                    <div className={cx("recovery-body-input")}>
                        <span className="p-float-label">
                            <Password id="in1" size={27} promptLabel='Рassword complexity'/>
                            <label htmlFor="in1">Enter your new password</label>
                        </span>
                    </div>
                    <div className={cx("recovery-body-input")}>
                        <span className="p-float-label">
                            <Password id="in2" size={27} promptLabel='Рassword complexity'/>
                            <label htmlFor="in2">Confirm your new password</label>
                        </span>
                    </div>
                    <div className={cx("recovery-body-button")}>
                        <Button label="Confirm" className="p-button" style={{ width: '16em' }}/>
                    </div>
                </div>
            </div>
        )
    }
} 