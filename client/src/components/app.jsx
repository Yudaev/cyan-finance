import styles from './app.scss';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeicons/primeicons.css';
import classnames from 'classnames/bind';
import React from 'react';
import { Button } from "primereact/button";

const cx = classnames.bind(styles);

export const App = ({
  test
}) => (
  <div className={cx('container')}>
    <h1 style={{ textAlign: 'center' }}>Cyan Finance</h1>
    <div className={cx('content')}>
      <Button label={test}></Button>
      <Button label="Primary" icon="pi pi-check" />
      <Button label="Secondary" className={cx('p-button-secondary')} />
      <Button label="Success" className="p-button p-button-success" />
      <Button label="Info" className="p-button-info" />
      <Button label="Warning" className="p-button-warning" />
      <Button label="Danger" className="p-button-danger" />

    </div>
  </div>
);

export default App;
