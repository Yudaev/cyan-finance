import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import classnames from 'classnames/bind';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import styles from './app.scss';
import MainPage from "./MainPage/MainPage";
import RegAuthPage from "../connectors/RegAuthPage";
import ProfilePage from "../connectors/ProfilePage";
import SettingsPage from "../connectors/SettingsPage";
import PageIncExp from "../connectors/PageIncExp";
import OperationsPage from "../connectors/OperationsPage";
import StatisticsPage from "../connectors/StatisticsPage";

const cx = classnames.bind(styles);

export const App = ({ isAuth, logout }) => {
  const headerClass = classnames(
    'p-grid',
    'p-nogutter',
    'p-justify-around',
    cx('menu')
  )
  return (
    <Router>
      {isAuth && (
        <header className='main-header'>
          <div className={headerClass}>
            <NavLink to='/statistics'><i className="pi pi-chart-bar"></i></NavLink>
            <NavLink to='/history'><i className="pi pi-clock"></i></NavLink>
            <NavLink to='/' exact><i className="pi pi-plus-circle"></i></NavLink>
            <NavLink to='/regular'><i className="pi pi-briefcase"></i></NavLink>
            <NavLink to='/profile'><i className="pi pi-user"></i></NavLink>
          </div>
        </header>
      )}
      <div className={cx('container')}>
        <Switch>
          <Route path='/statistics'>
            {!isAuth && (<Redirect to='/' />)}
            <StatisticsPage />
          </Route>
          <Route path='/history'>
            {!isAuth && (<Redirect to='/' />)}
            <OperationsPage />
          </Route>
          <Route path='/regular'>
            {!isAuth && (<Redirect to='/' />)}
            <SettingsPage />
          </Route>
          <Route path='/profile'>
            {!isAuth && (<Redirect to='/' />)}
            <ProfilePage />
          </Route>
          <Route path='/'>
            {isAuth
              ? (
                <PageIncExp />
              ) : (
                <RegAuthPage/>
              )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;