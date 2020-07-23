import React, { Component } from 'react'
import classnames from 'classnames/bind'

import styles from './StatisticsPage.scss'

import { ProgressBar } from 'primereact/progressbar'
import { Calendar } from 'primereact/calendar'
import { Chart } from 'primereact/chart'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import dayjs from 'dayjs';


const cx = classnames.bind(styles)

export default class StatisticsPage extends Component {
        state = {
            calendarValue: null,
            date: new Date(),
            minDate: null,
            maxDate: null,
            intervalArray: [
                {label: 'День', value: 'день'},   
                {label: 'Месяц', value: 'месяц'},
                {label: 'Год', value: 'год'},
                {label: 'Все время', value: 'все время'},
                {label: 'Интервал', value: 'интервал'},
            ],
            categories: [
                {
                    name: 'Расход',
                    value: function() {
                        let sum = 0
                            for (let i = 0; i < this.list.length; i++) {
                                sum += this.list[i].value()
                            }
                        return sum 
                    },
                    list: [
                    {
                        index: Date.now(),
                        title: 'Авто',
                        value: function() {
                            let sum = 0;
                                for (let i = 0; i < this.transactions.length; i++) {
                                    sum += this.transactions[i].value
                                }
                            return sum
                        },
                        transactions: [
                            {
                                date: null,
                                value: 33333
                            },
                            {
                                date: null,
                                value: 567
                            },
                        ]
                    },
                    {
                        index: Date.now(),
                        title: 'Кредит',
                        value: function() {
                            let sum = 0;
                                for (let i = 0; i < this.transactions.length; i++) {
                                    sum += this.transactions[i].value
                                }
                            return sum
                        },
                        transactions: [
                            {
                                date: null,
                                value: 86786
                            },
                            {
                                date: null,
                                value: 23435
                            },
                        ]
                    },
                    {
                        index: Date.now(),
                        title: 'Развлечения',
                        value: function() {
                            let sum = 0;
                                for (let i = 0; i < this.transactions.length; i++) {
                                    sum += this.transactions[i].value
                                }
                            return sum
                        },
                        transactions: [
                            {
                               date: null,
                               value: 23133
                            },
                            {
                                date: null,
                                value: 23333
                            },
                            ]
                        }
                    ],
                },
                {
                    name: 'Доход',
                    value: function () {
                        let sum = 0
                            for (let i = 0; i < this.list.length; i++) {
                                sum += this.list[i].value()
                            }
                        return sum 
                    },
                    list: [                         
                        {
                            index: Date.now(),
                            title: 'ЖКХ',
                            value: function() {
                                let sum = 0;
                                    for (let i = 0; i < this.transactions.length; i++) {
                                        sum += this.transactions[i].value
                                    }
                                return sum
                            },
                            transactions: [
                                {
                                    date: null,
                                    value: 23333
                                },
                                {
                                    date: null,
                                    value: 23333
                                },
                            ]
                        },
                        {
                            index: Date.now(),
                            title: 'Аренда',
                            value: function() {
                                let sum = 0;
                                    for (let i = 0; i < this.transactions.length; i++) {
                                        sum += this.transactions[i].value
                                    }
                                return sum
                            },
                            transactions: [
                                {
                                    date: null,
                                    value: 23333
                                },
                                {
                                    date: null,
                                    value: 23333
                                },
                            ]
                        },
                        {
                            index: Date.now(),
                            title: 'Работа',
                            value: function() {
                                let sum = 0;
                                    for (let i = 0; i < this.transactions.length; i++) {
                                        sum += this.transactions[i].value
                                    }
                                return sum
                            },
                            transactions: [
                                {
                                    date: null,
                                    value: 2312
                                },
                                {
                                    date: null,
                                    value: 3456
                                },
                            ]
                        },
                    ],
                },
            ],    
        
            rest: {
                name: 'Остаток',
                value: function(b, d) {
                    return b - d
                }
            },
        }

    getLabels = () => {
        let labelsArr = Object.keys(this.state.categories[0]?.list).map(
            key => {
                return this.state.categories[0]?.list[key].title
            }
        )
        return labelsArr
    }

    makeChart = () => {
        let data = {
            labels: this.getLabels(),
            datasets: [{
              data: this.getDataForChart(),
              backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56', '#C14242', '#7FBF3F' ],
              incBackgroundColor: [ '#3FBFBF', '#7A0DE7', '#E70DE7', '#864707', '#7247bc' ]
            }]
        }
        return data
    }

    getDataForChart = () => {
        let data = Object.keys(this.state.categories[0]?.list).map(
            key => {
                return this.state.categories[0].list[key].value()
            }
        )
        return data
    }

    switchCalendars = () => {

        let calendarSettings = {
            firstDayOfWeek: 1,
            dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            dayNamesShort: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
            dayNamesMin: ["Пн", "Вт", "Ср", "Ч", "Пт", "Сб", "Вс"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            clear: 'Limpiar',
        };

        const { onChangeDate, type } = this.props;
        const { yearNow } = this.props;

        if (type === 'день') {
            return <Calendar
                        inputStyle={{
                            padding: '.25em 0em 0em 0em',
                            border: 'none',
                            backgroundColor: '#ffffff'
                        }}
                        placeholder={`${this.state.date}`}
                        monthNavigator
                        yearNavigator
                        locale={calendarSettings}
                        yearRange='2010:2030'
                        dateFormat='dd MM yy'
                        readOnlyInput
                        value={this.state.date}
                        onSelect={e => onChangeDate(e.value)}
                    />
        }

        if (type === 'месяц') {
            return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff',
                            padding: '.25em 0em 0em 0em',
                        }}
                        placeholder={`${this.state.date}`}
                        view='month'
                        monthNavigator                        
                        yearNavigator
                        locale={calendarSettings}
                        yearRange='2010:2030'
                        readOnlyInput
                        value={this.state.date}
                        dateFormat='MM yy'
                        onSelect={e => onChangeDate(e.value)} 
                    />
        }

        if (type === 'год') {
            
            const { years } = this.props;
            const formatYear = dayjs(this.state.year).year();

            return <Dropdown
                        placeholder={`${formatYear}`}
                        value={yearNow}
                        options={years}
                        className={cx('year')}
                        onChange={e => onChangeDate(e.value)}
                    />
        }

        if (type === 'все время') {
            return null
        }
    
        if (type === 'интервал') {
            return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff',
                            width: '110%',
                            padding: '0.25em 0em 0em 0.1em',
                        }}
                        className={cx('interval')}
                        selectionMode='range'
                        placeholder='Выберите интервал...'
                        minDate={this.state.minDate}
                        maxDate={this.state.maxDate}
                        locale={calendarSettings}
                        dateFormat='d M y'
                        readOnlyInput
                        value={yearNow}
                        onChange={e => onChangeDate(e.value) }
                    />
        }
    }

    render() {

        const { stats, onChangeType, type } = this.props;

        // Вытащить прогрессбары в отдельный компонент
        // Связать компонент прогрессбаров с Tree

        let incomeColorClasses = ['cyan', 'lilac', 'pink', 'brown', 'violet']
        let spendColorClasses = ['pinkRed', 'blue', 'yellow', 'red', 'yellowGreen']

        let spendBars = []
        Object.keys(this.state.categories[0]?.list).forEach(            
            key => {
                spendBars.push(
                    <div key={key} className={cx('progress-bar')}>
                        <div className={cx('pb-title')}>
                            <p>{this.state.categories[0]?.list[key].title}</p>
                        </div>
                        <div className={cx('pb-bar')}>
                            <ProgressBar
                                id={`${key}`}
                                value={ this.state.categories[0]?.list[key].value() / this.state.categories[1].value() * 100 }
                                unit=' р.'
                                mode='determinate'
                                className={cx('bar', spendColorClasses[key])}
                                showValue={false}
                            />
                        </div>
                        <div className={cx('pb-value', 'spend')}>
                            <p>{this.state.categories[0]?.list[key].value()}&nbsp;р.</p>
                        </div>
                    </div>
                )
            }
        )

        let incomeBars = []
        Object.keys(this.state.categories[1]?.list).forEach(            
            key => {
                incomeBars.push(
                    <div key={key} className={cx('progress-bar')}>
                        <div className={cx('pb-title')}>
                            <p>{this.state.categories[1]?.list[key].title}</p>
                        </div>
                        <div className={cx('pb-bar')}>
                            <ProgressBar
                                id={`${key}`}
                                value={ this.state.categories[1]?.list[key].value() / this.state.categories[1].value() * 100 }
                                unit=' р.'
                                mode='determinate'
                                className={cx('bar', incomeColorClasses[key])}
                                showValue={false}
                            />
                        </div>
                        <div className={cx('pb-value', 'income')}>
                            <p>{this.state.categories[1]?.list[key].value()}&nbsp;р.</p>
                        </div>
                    </div>
                )
            }
        )

        return(
                <div className={cx('body')}>
                    <div className={cx('control-panel')}>
                        <div className={cx('controls')}>
                            <Dropdown
                                className={cx('dropdown')}
                                value={`Показать за ` + type}
                                onChange={ e => onChangeType(e.value) }
                                placeholder={'Показать за ' + type}
                                options={this.state.intervalArray}
                            />
                            <div className={cx('calendar')}>
                                {this.switchCalendars()}
                            </div>
                        </div>
                    </div>
                    <div className={cx('preview')}>
                        <div className={cx('title')} key={Date.now()} >
                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}>
                                        <span>Баланс</span>
                                    </div>
                                        <ProgressBar
                                            value={this.state.rest.value(stats.income, stats.expense)}
                                            className={cx('ttl-bar')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{this.state.rest.value(stats.income, stats.expense)} p.</span>
                                    </div>
                                </div>

                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}> 
                                        <span>{this.state.categories[1].name}</span>
                                    </div>
                                        <ProgressBar
                                            value={stats.income}
                                            className={cx('ttl-bar', 'incomes')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{stats.income} p.</span>
                                    </div>
                                </div>

                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}>
                                        <span>{this.state.categories[0].name}</span>
                                    </div>
                                        <ProgressBar
                                            value={stats.expense}
                                            className={cx('ttl-bar', 'expense')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{stats.expense} p.</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={cx('chart')}>
                        <Chart type='doughnut' data={this.makeChart()}/>
                    </div>
                        {incomeBars}
                        {spendBars}
                    <div className={cx('footer-button')}>
                        <Button label='Выгрузить статистику' className='p-button-raised p-button-secondary' />
                    </div>
                </div>
            )
    }
}

