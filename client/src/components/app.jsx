import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import styles from './app.scss';
import MainPage from "./MainPage/MainPage";
import RegAuthPage from "../connectors/RegAuthPage";
import ProfilePage from "../connectors/ProfilePage";

const cx = classnames.bind(styles);

export const App = ({ isAuth, logout }) => {
  return (
    <Router>
      {isAuth && (
        <header>
          <div className="p-grid p-nogutter p-justify-around p-my-2">
            <NavLink to='/' exact>Main</NavLink>
            <NavLink to='/statistics'>Stats</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <a href='#logout' onClick={e => {
              e.preventDefault();
              logout();
            }}>
              Logout
            </a>
          </div>
        </header>
      )}
      <div className={cx('container')}>
        <Switch>
          <Route path='/profile'>
            {!isAuth && (<Redirect to='/' />)}
            <ProfilePage />
          </Route>
          <Route path='/statistics'>
            {!isAuth && (<Redirect to='/' />)}
            <div>Статистика</div>
          </Route>
          <Route path='/'>
            {isAuth
              ? (
                <MainPage/>
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