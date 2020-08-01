import React from 'react';
import classnames from 'classnames/bind';
import { ProgressBar } from 'primereact/progressbar';
import dayjs from 'dayjs';
import styles from './StatisticsPageProgressBars.scss';

const cx = classnames.bind(styles);

export default class StatisticsPageProgressBars extends React.Component {
  state = {
    visible: false,
  };

  handleClick = (e) => {
    if (e) this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { transactions, label, num, value, income } = this.props;

    const invisible = this.state.visible ? 'transaction-list' : 'invisible';

    const icon = this.state.visible ? 'pi pi-caret-down' : 'pi pi-caret-right';

    const spendColorClasses = ['pinkRed', 'blue', 'yellow', 'red', 'yellowGreen', 'cyan', 'lilac', 'pink', 'brown', 'violet'];

    return (
      <div className={cx('progress-bar')} onClick={(e) => this.handleClick(e)}>
        <span className={cx('pb-icon')}>
          <i className={cx(icon)} />
        </span>
        <div className={cx('pb-title')}>
          <p>{label}</p>
        </div>
        <div className={cx('pb-bar')}>
          <ProgressBar showValue={false} className={cx('bar', spendColorClasses[num])} value={(value / income) * 100} />
        </div>
        <div className={cx('pb-value')}>
          <p> {value} р.</p>
        </div>
        <div className={cx(invisible)}>
          {Object.values(transactions).map((transaction) => (
            <div key={transaction._id} className={cx('transaction', transaction.type)}>
              <span>{dayjs(transaction.date).format('D.MM.YYг.')}</span>
              <div>
                <span>{transaction.title === undefined ? 'Описание отсутствует' : transaction.title}</span>
              </div>
              <span className={cx(transaction.type)}>
                {transaction.type === 'income' ? '+' : '-'} {transaction.value} р.
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
