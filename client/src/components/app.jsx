import React, {Component}  from 'react';
import { Carousel } from "primereact/carousel";
import classnames from 'classnames/bind';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeicons/primeicons.css';
import styles from './app.scss';

import ProfilePage from './ProfilePage/ProfilePage.jsx';
import SettingsPage from './SettingsPage/SettingsPage.jsx';
import EditOperationPage from './EditOperationPage/EditOperationPage.jsx';
import PageInputMail from './PageInputMail/PageInputMail.jsx';
import PageRecovery from './PageRecovery/PageRecovery.jsx';
import OperationsPage from './OperationsPage/OperationsPage.jsx';
import PageIncExp from './PageIncExp/PageIncExp.jsx';

const cx = classnames.bind(styles);

export class App extends Component {

  state = {
    text: window.innerHeight,
    data: [
      {name: 'settings'},
      {name: 'pageIncExp'},
      {name: 'operationsPage'},
      {name: 'profilePage'},
      {name: 'editOperationPage'},
      {name: 'profilePage'},
      {name: 'pageInputMail'},
      {name: 'pageRecovery'},
    ],
    page: 1,
  }

  drawPanels = (dataValue) => {
    if(dataValue.name === 'settings') return <SettingsPage />;
    else if (dataValue.name === 'pageIncExp') return <PageIncExp />;
    else if (dataValue.name === 'operationsPage') return <OperationsPage />;
    else if (dataValue.name === 'profilePage') return <ProfilePage />;
    else if (dataValue.name === 'editOperationPage') return <EditOperationPage />;
    else if (dataValue.name === 'pageInputMail') return <PageInputMail />;
    else if (dataValue.name === 'pageRecovery') return <PageRecovery />;
  }

  render() {
    return(
      <div className={cx('container')}>
          <Carousel
            value={this.state.data}
            page={this.state.page}
            onPageChange={(e) => this.setState({page: e.page})}
            itemTemplate={this.drawPanels}
          />
      </div>
    )
  }
}

export default App;
