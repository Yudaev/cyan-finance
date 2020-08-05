import React from 'react';
import classnames from 'classnames/bind';

import styles from './StatisticsPage.scss';

import StatisticsPageProgressBars from './StatisticsPageProgressBars/StatisticsPageProgressBars';

import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import dayjs from 'dayjs';

const cx = classnames.bind(styles);

export default class StatisticsPage extends React.Component {
    state = {
        date: new Date(),
        month: new Date(),
        year: new Date(),
        intervalValue: this.props.yearNow || new Date(),
        intervalArray: [
            {label: 'День', value: 'день'},   
            {label: 'Месяц', value: 'месяц'},
            {label: 'Год', value: 'год'},
            {label: 'Все время', value: 'все время'},
            {label: 'Интервал', value: 'интервал'},
        ],
    }

    componentDidUpdate(prevProps) {
        const { yearNow } = this.props;
        if (yearNow !== prevProps.yearNow) {
            this.setState({ intervalValue: prevProps.yearNow });
        }
    }

    makeChart = () => {
        let data = {
            labels: this.createGroups().map(item => { return item.label }),
            datasets: [{
              data: this.createGroups().map(({children}) => this.categoriesValues(children)),
              backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56', '#C14242', '#7FBF3F' ],
              incBackgroundColor: [ '#3FBFBF', '#7A0DE7', '#E70DE7', '#864707', '#7247bc' ]
            }]
        }
        return data;
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
        const formatYear = dayjs(this.state.year).year();

        switch (type) {
            case 'день': {
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
                        onChange={e => onChangeDate(e.value)}
                    />
            };
            case 'месяц': {
                const formatMonth = dayjs(this.state.month).format('MMMM YYYY');
                return <Calendar
                            inputStyle={{
                                border: 'none',
                                backgroundColor: '#ffffff',
                                padding: '.25em 0em 0em 0em',
                            }}
                            placeholder={`${formatMonth}`}
                            view='month'
                            monthNavigator                        
                            yearNavigator
                            locale={calendarSettings}
                            yearRange='2010:2030'
                            readOnlyInput
                            value={this.state.month}
                            dateFormat='MM yy'
                            onChange={e => onChangeDate(e.value)} 
                        />
            };
            case 'год': {
                const { years } = this.props;
                return <Dropdown
                            placeholder={`${formatYear}`}
                            value={yearNow}
                            options={years}
                            className={cx('year')}
                            onChange={e => onChangeDate(e.value)}
                        />
            };
            case 'все время': {
                return null;
            };
            case 'интервал': {
                return <Calendar
                        inputStyle={{
                            border: 'none',
                            backgroundColor: '#ffffff'
                        }}
                        className={cx('interval')}
                        selectionMode='range'
                        placeholder='Выберите интервал...'
                        locale={calendarSettings}
                        dateFormat='d M y'
                        readOnlyInput
                        value={yearNow}
                        onChange={e => onChangeDate(e.value) }
                    />
            };
            default: {
                return yearNow;
            }
        }
    }

    categoriesValues = (item) => {
        let values = 0;
        Object.values(item).map(item => values += item.value);
        return values;
    }

    createGroups = () => {
        const { categories, operations } = this.props;
        const groups = new Map();
        Object.values(categories).forEach(category => {
            const operationsId = [];
            const otherId = [];
            Object.values(operations).filter(item => { 
                if (item.category !== null && item.category == category._id) operationsId.push(item);
                if (item.category == null) otherId.push(item);  
            });
            groups.set(category.title, [...operationsId]).set('Прочее', otherId);
        });

        const groupsArray = [];
        groups.forEach((children, label) => groupsArray.push({ children, label }));
        return groupsArray;
    }

    render() {
        const { stats, onChangeType, type } = this.props;

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
                                            value={stats.income - stats.expense}
                                            className={cx('ttl-bar')}
                                            showValue={false}
                                        />
                                    <div className={cx('value')}>
                                        <span>{stats.income - stats.expense} p.</span>
                                    </div>
                                </div>

                                <div className={cx('title-bar')}>
                                    <div className={cx('label')}> 
                                        <span>Доход</span>
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
                                        <span>Расход</span>
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
                    {this.createGroups().map(({ children, label }, key) => (
                        <StatisticsPageProgressBars
                            income={stats.income}
                            num={key}
                            key={key}
                            label={label}
                            children={children}
                            value={this.categoriesValues(children)}
                        />
                    ))}
                    <div className={cx('footer-button')}>
                        <Button label='Выгрузить статистику' className='p-button-raised p-button-secondary' />
                    </div>
                </div>
            )
    }
}

