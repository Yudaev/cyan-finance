import React, {Component}  from 'react';
import { Carousel } from "primereact/carousel";
import classnames from 'classnames/bind';
import styles from './MainPage.scss';
import PageIncExp from "../PageIncExp/PageIncExp";
import EditOperationPage from "../EditOperationPage/EditOperationPage";
import PageInputMail from "../PageInputMail/PageInputMail";
import PageRecovery from "../PageRecovery/PageRecovery";

const cx = classnames.bind(styles);

export class MainPage extends Component {
  state = {
    text: window.innerHeight,
    data: [
      {name: 'settings'},
      {name: 'pageIncExp'},
      {name: 'history'},
      {name: 'editOperationPage'},
      {name: 'pageInputMail'},
      {name: 'pageRecovery'},
    ],
    page: 1,
  }

  drawPanels = (dataValue) => {
    if(dataValue.name === 'settings') return <p>window1</p>
    else if (dataValue.name === 'pageIncExp') return <PageIncExp />;
    else if (dataValue.name === 'history') return <p>window 3</p>;
    else if (dataValue.name === 'editOperationPage') return <EditOperationPage />;
    else if (dataValue.name === 'pageInputMail') return <PageInputMail />;
    else if (dataValue.name === 'pageRecovery') return <PageRecovery />;
  }

  render() {
    return(
      <Carousel
        className={cx('carousel')}
        value={this.state.data}
        page={this.state.page}
        onPageChange={(e) => this.setState({page: e.page})}
        itemTemplate={this.drawPanels}
      />
    )
  }
}

export default MainPage;