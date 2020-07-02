import React from 'react';
import styles from './OperationPageDateBlock.scss';
import classnames from 'classnames/bind';

import Cart from '../../SettingsPage/Cards/Card.jsx';

const cx = classnames.bind(styles);

export default class OperationPageDateBlock extends React.Component {
  state = {
    date: ''
  }

  componentDidMount() {
    let { date } = this.props;
    this.setState({
      date
    })
  }

  render() {
    return (
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>{ this.state.date }</h2>
        </div>
            <Cart handlePopUp={ this.props.togglePopup } />
            <Cart handlePopUp={ this.props.togglePopup } />
      </div>
    )
  }
}