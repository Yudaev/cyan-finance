import React, {Component}  from 'react';
import { Carousel } from "primereact/carousel";
import classnames from 'classnames/bind';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primeicons/primeicons.css';
import styles from './app.scss';

const cx = classnames.bind(styles);

export class App extends Component {

  state = {
    text: window.innerHeight,
    data: [
      {name: 'settings'},
      {name: 'daily'},
      {name: 'history'},
    ],
    page: 1,
  }

  drawPanels = (dataValue) => {
    if(dataValue.name === 'settings') return <p>window 1</p>;
    else if (dataValue.name === 'daily') return <p>window 2</p>;
    else if (dataValue.name === 'history') return <p>window 3</p>;
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
