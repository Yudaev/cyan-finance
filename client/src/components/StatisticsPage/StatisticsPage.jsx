import React from 'react'
import classnames from 'classnames/bind'

import styles from './StatisticsPage.scss'

import { ProgressBar } from 'primereact/progressbar'
import { Calendar } from 'primereact/calendar'
import { Chart } from 'primereact/chart'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'


const cx = classnames.bind(styles)

class StatisticsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            intervalValue: 'день',
            calendarValue: new Date(),
            minDate: null,
            maxDate: null,
            intervalArray: [
                {label: 'День', value: 'день'},   
                {label: 'Месяц', value: 'месяц'},
                {label: 'Год', value: 'год'},
                {label: 'Все время', value: 'все время'},
                {label: 'Интервал', value: 'интервал'},
            ],
            year: 2020,
            baseValue: {
                name: 'Баланс',
                value: 100000
            },
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

        if (this.state.intervalValue === 'день') {
            return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff'
                        }}
                        placeholder={`${this.state.calendarValue}`}
                        monthNavigator
                        yearNavigator
                        locale={calendarSettings}
                        yearRange='2010:2030'
                        dateFormat='dd MM yy'
                        value={this.state.calendarValue}
                        onSelect={e => this.setState({calendarValue: e.value})}
                    />
        }

        if (this.state.intervalValue === 'месяц') {
            return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff'
                        }}
                        placeholder={`${this.state.calendarValue}`}
                        view='month'
                        monthNavigator                        
                        yearNavigator
                        locale={calendarSettings}
                        yearRange='2010:2030'
                        value={this.state.calendarValue}
                        dateFormat='MM yy'
                        onSelect={(e) => this.setState({calendarValue: e.value})} 
                    />
        }

        if (this.state.intervalValue === 'год') {
            
            let years = [
                {label: 2020, value: 2020},
                {label: 2021, value: 2021}
            ]

            return <Dropdown
                        placeholder={`${this.state.year}`}
                        value={this.state.year}
                        options={years}
                        className={cx('year')}
                        onChange={e => this.setState({ year: e.value })}
                    />
        }

        if (this.state.intervalValue === 'все время') {
            return null
        }
    
        if (this.state.intervalValue === 'интервал') {
            return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff',
                            width: '150%'
                        }}
                        selectionMode='range'
                        placeholder='Выберите интервал...'
                        minDate={this.state.minDate}
                        maxDate={this.state.maxDate}
                        readOnlyInput
                        locale={calendarSettings}
                        dateFormat='d MM y'
                        value={this.state.calendarValue}
                        onChange={(e) => this.setState({calendarValue: e.value})} 
                    />
        }
    }

    render() {

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
                                value={`Показать за ` + this.state.intervalValue}
                                onChange={ (e) => { this.setState({ intervalValue: e.value }) }}
                                placeholder={'Показать за ' + this.state.intervalValue}
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
                                        <span>{this.state.baseValue.name}</span>
                                    </div>
                                        <ProgressBar
                                            value={this.state.rest.value(this.state.categories[1].value(), this.state.categories[0].value())}
                                            id={`${11}`}
                                            className={cx('ttl-bar')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{this.state.rest.value(this.state.categories[1].value(), this.state.categories[0].value())} p.</span>
                                    </div>
                                </div>

                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}> 
                                        <span>{this.state.categories[1].name}</span>
                                    </div>
                                        <ProgressBar
                                            id={`${12}`}
                                            value={this.state.categories[1].value()}
                                            className={cx('ttl-bar', 'incomes')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{this.state.categories[1].value()} p.</span>
                                    </div>
                                </div>

                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}>
                                        <span>{this.state.categories[0].name}</span>
                                    </div>
                                        <ProgressBar
                                            value={this.state.categories[0].value()}
                                            id={`${13}`}
                                            className={cx('ttl-bar', 'expense')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{this.state.categories[0].value()} p.</span>
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

export default StatisticsPage;

