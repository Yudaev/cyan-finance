import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './SettingsPage.scss';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import EditOperationPage from '../EditOperationPage/EditOperationPage'
import OperationPageDateBlock from '../OperationsPage/OperationPageDateBlock/OperationPageDateBlock';

const cx = classnames.bind(styles);

class SettingsPage extends Component {

    state = {
        openPopUp: false
    };

    handlePopUp = () => {
        this.setState(prevState => ({ openPopUp: !prevState.openPopUp }))
    };

    render() {

        let show = this.state.openPopUp === true ? `${cx('popUp')}` : `${cx('noPopUp')}`;

        const { 
            repetitiveOperations: repetitiveOperationsMap,
            categories,
            categoriesAsObject,
            addRepetitiveOperation
        } = this.props;
        const repetitiveOperationsArray = [];
        repetitiveOperationsMap.forEach((items, date) => 
            repetitiveOperationsArray.push({ items, date })
        );

        return ( 
            <div className={cx("container", "content")}>
                <div className={show}>
                    <EditOperationPage
                        togglePopup={this.handlePopUp}
                        categories={categories}
                        addRepetitiveOperation={addRepetitiveOperation} 
                    />
                </div>
                <ScrollPanel className={cx("cardList")}>
                    {repetitiveOperationsArray.map(({ items, date }, key) => 
                        (<OperationPageDateBlock
                            key={key}
                            handlePopUp={this.handlePopUp} 
                            items={items}
                            date={date}
                            categories={categoriesAsObject}
                        />)
                    )}
                </ScrollPanel>
                    <Button
                        label="ДОБАВИТЬ ЗАПИСЬ"
                        className="p-button-raised p-button-secondary"
                        onClick={() => this.handlePopUp()} 
                    />
            </div>   
         )
    }
}

export default SettingsPage;
