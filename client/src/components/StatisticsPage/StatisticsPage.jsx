import React from 'react'
import classnames from 'classnames/bind'

import styles from './StatisticsPage.scss'

import { ProgressBar } from 'primereact/progressbar'
import { Calendar } from 'primereact/calendar'
import { Chart } from 'primereact/chart'
import { Button } from 'primereact/button'


const cx = classnames.bind(styles)

class StatisticsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            regularityValue: 'Ежемесячно',
            activeCategory: {
                name: 'Доход',
                value: 37555
            },
            names: [                         
                {
                    index: Date.now(),
                    name: 'Авто',
                    value: 133300

                },
                {
                    index: Date.now(),
                    name: 'Кредит',
                    value: 22220
                },
                {
                    index: Date.now(),
                    name: 'ЖКХ',
                    value: 3000
                },
                {
                    index: Date.now(),
                    name: 'Аренда',
                    value: 50000
                },
                {
                    index: Date.now(),
                    name: 'Работа',
                    value: 12000
                },
            ],
            datasets: [{
                    data: [133300, 22220, 3000, 50000, 12000],
                    backgroundColor: [              
                        "#FF6384",                  
                        "#36A2EB",
                        "#FFCE56",
                        "#C14242",
                        "#7FBF3F",
                    ]
                }],
            types: {
                baseValue: {
                    name: 'Баланс',
                    value: 100000,
                },
                categories: [
                    {
                        name: 'Расход',
                        value: 25664
                    },
                    {
                        name: 'Доход',
                        value: 37555
                    },
                    {
                        regularityArray: [
                            {label: 'День', value: 'День'},   
                            {label: 'Месяц', value: 'Месяц'},
                            {label: 'Год', value: 'Год'},
                        ]
                    }
                ],
            },
            rest: {
                name: 'Остаток',
                value: function(b, d) {
                    return b - d
                }
            },
            income: {
                name: 'Суммарно',
                value: function(b, d) {
                    return b + d
                }
            }
        } 
    }

    pickInterval = (e) => {
        this.setState({ regularityValue: e.value })
    }

    switchCategory = (e) => {
        if (e.target.id == '1') {
            this.setState({ activeCategory: this.state.types.categories[0] })
        }
        if (e.target.id == '2') {
            this.setState({ activeCategory: this.state.types.categories[1] })
        }
    }

    render() {
        let bars = [] 
        Object.keys(this.state.names).forEach(            
            key => {
                bars.push(
                    <div key={key} className={cx('progress-bars')}>
                        <div className={cx("pb-title")}>
                            <p>{this.state.names[key].name}</p>
                        </div>
                        <div className={cx("pb-bar")}>
                            <ProgressBar
                                id={ this.state.names[key].name }
                                value={ this.state.names[key].value }
                                unit=" р."
                                mode="determinate"
                                className={cx(`bar`)}
                                showValue={false}
                                maxValue={this.state.types.baseValue.value}
                                color={this.state.datasets[0].backgroundColor[key]}
                            />
                        </div>
                        <div className={cx("pb-value")}>
                            <p>{this.state.names[key].value}&nbsp;р.</p>
                        </div>
                    </div>
                )
            }
        )

        let switchValues = this.state.activeCategory === this.state.types.categories[0] ? 
            this.state.rest.value(this.state.types.baseValue.value, this.state.activeCategory.value) :
            this.state.income.value(this.state.types.baseValue.value, this.state.activeCategory.value)

        let switchLabels = this.state.activeCategory === this.state.types.categories[0] ? 
            this.state.rest.name : this.state.income.name


        return(
            <div className={cx('content')}>
                <div className={cx('body')}>
                    <div className={cx('control-panel')}>
                        <div className={cx('controls')}>
                            <button
                                id="1"
                                className={cx('control-button-spend')} 
                                onClick={ (e) => { this.switchCategory(e) } }
                            >
                                    {this.state.types.categories[0].name}
                            </button>
                            <button
                                id="2"
                                className={cx('control-button-income')} 
                                onClick={ (e) => { this.switchCategory(e) }  }
                            >
                                {this.state.types.categories[1].name}
                            </button>
                                <Calendar
                                    view="month"
                                    monthNavigator
                                    onChange={ (evt) => this.pickInterval(evt)}
                                    placeholder="Месяц"
                                    className={cx('calendar')}>
                                </Calendar>
                        </div>
                    </div>
                    <div className={cx('preview')}>
                        <div className={cx('title')} key={Date.now()} >
                                <div className={cx('title-bars')}>
                                    <span className='label' >{this.state.types.baseValue.name}</span>
                                        <ProgressBar
                                            value={this.state.types.baseValue.value}
                                            id={this.state.types.baseValue.name}
                                            unit=" р."
                                            className={cx('ttl-bar')}
                                            maxValue={this.state.types.baseValue.value}
                                            color='rgb(210,210,210'
                                        />
                                </div>
                                <div className={cx('title-bars')}>
                                    <span className='label'>{this.state.activeCategory.name}</span>
                                        <ProgressBar
                                            id={this.state.activeCategory.name}
                                            value={this.state.activeCategory.value}
                                            unit=" р."
                                            className={cx('ttl-bar')}
                                            maxValue={this.state.types.baseValue.value}
                                        />
                                </div>
                                
                                <div className={cx('title-bars')}>
                                    <span className='label'>{switchLabels}</span>
                                        <ProgressBar
                                            value={switchValues}
                                            id={this.state.rest.name}
                                            unit=" р."
                                            className={cx('ttl-bar')}
                                            maxValue={this.state.types.baseValue.value}
                                            color={ this.state.datasets[0].backgroundColor[2] }
                                        />
                                </div>
                        </div>
                    </div>
                    <div className={cx('chart')}>
                        <Chart type="doughnut" data={this.state} />
                    </div>
                        {bars}
                    <div className={cx('footer-button')}>
                        <Button label="Выгрузить статистику" className="p-button-raised p-button-secondary" />
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsPage;

