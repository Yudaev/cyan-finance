import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './SettingsPage.scss';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import Card from './Cards/Card.jsx';
import PopupSettings from './PopupSettings/PopupSettings.jsx';

const cx = classnames.bind(styles);

class SettingsPage extends Component {

    state = {
        openPopUp: false
    }

    handlePopUp = () => {
        this.setState(prevState => ({
            openPopUp: !prevState.openPopUp
            })   
        )
    }

    render() {

        let show = this.state.openPopUp === true ? `${cx('popUp')}` : `${cx('noPopUp')}`

        return ( 
            <div className={cx("container", "content")}>
                <div className={show}>
                    <PopupSettings openPopUp={this.state.openPopUp} handlePopUp={this.handlePopUp} />
                </div>
                <ScrollPanel className={cx("cardList")}>
                    <Card handlePopUp={this.handlePopUp} />
                </ScrollPanel>
                    <div className={cx("button")}>
                        <Button label="ДОБАВИТЬ ЗАПИСЬ" className="p-button-secondary" />
                    </div>
            </div>   
         )
    }
}

export default SettingsPage;