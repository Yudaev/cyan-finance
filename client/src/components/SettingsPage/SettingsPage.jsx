import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './SettingsPage.scss';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import Card from './Cards/Card.jsx';
import EditOperationPage from '../EditOperationPage/EditOperationPage.jsx'

const cx = classnames.bind(styles);

class SettingsPage extends Component {

    state = {
        openPopUp: false
    }

    handlePopUp = ({}) => {
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
                  {/*<EditOperationPage openPopUp={this.state.openPopUp} togglePopup={() => this.handlePopUp}/>*/}
                </div>
                <ScrollPanel className={cx("cardList")}>
                    <Card handlePopUp={this.handlePopUp} />
                    <Card handlePopUp={this.handlePopUp} />
                </ScrollPanel>
                        <Button label="ДОБАВИТЬ ЗАПИСЬ" className="p-button-raised p-button-secondary" />
            </div>   
         )
    }
}

export default SettingsPage;
