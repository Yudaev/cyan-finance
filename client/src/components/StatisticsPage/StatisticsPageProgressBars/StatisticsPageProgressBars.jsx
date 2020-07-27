import React  from 'react';
import styles from './StatisticsPageProgressBars.scss';
import classnames from 'classnames/bind';
import { ProgressBar } from 'primereact/progressbar';

const cx = classnames.bind(styles);

export default class StatisticsPageProgressBars extends React.Component {

  state = {
    visible: false
  }

  handleClick = (e) => {
    if (e) this.setState( prevState =>  ({ visible: !prevState.visible }))
  }

  render() {
    let { children, label, num, value, income } = this.props;

    let invisible = this.state.visible ? 'transaction-list' : 'invisible';
    
    let spendColorClasses = ['pinkRed', 'blue', 'yellow', 'red', 'yellowGreen', 'cyan', 'lilac', 'pink', 'brown', 'violet'];

    return(
      <div className={cx('progress-bar')} onClick={ e => this.handleClick(e)}>
        <div className={cx('pb-title')}>
          <p>{label}</p>
        </div>
        <div className={cx('pb-bar')}>
          <ProgressBar 
            showValue={false}
            className={cx('bar', spendColorClasses[num])}
            value={value / income * 100}
          />
          <div className={cx(invisible)}>
              {Object.values(children).map((transaction) => (
                <span key={transaction._id} className={cx('transaction', transaction.type)}>
                  {transaction.type === 'income' ? '+' : '-'} {transaction.value} р.
                </span>
              ))}
          </div>
        </div>
        <div className={cx('pb-value')}>
          <p> {value} р.</p>
        </div>
      </div>
    )
  }
}