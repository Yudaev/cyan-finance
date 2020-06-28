import React, { Component } from 'react';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

import './style.scss';

export default class Test extends Component {
    render() {
        return(
            <div
                className="container content">
                    <div
                        className="profile-header">
                            <i className="pi pi-user"></i>
                    </div>
                        <div
                            className="profile-settings">
                                <p className="profile-settings__p">
                                    user@mail.ru
                                </p>
                                <Button label="Change password" className="p-button-raised p-button-secondary" />
                        </div>
                        <div
                            className="profile-body">

                        </div>
                        <div
                            className="profile-social-links">
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                                <i className="pi pi-spinner pi-spin"></i>
                        </div>
                    <div className="footer">
                        <a href="#">Выход</a>
                    </div>
            </div>
        )
    }
}