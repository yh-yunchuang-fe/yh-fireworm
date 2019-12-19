import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/datePicker.gif'
export default class DatePickerComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'DatePicker 日期选择器'
        this.describe = '可配置的日期选择组件'
        this.apiDataSource = [{
            property: 'mode',
            describe: '控制选择器模式',
            type: 'date|time|datetime|year|month',
            default: 'date'
        }, {
            property: 'defaultDate',
            describe: '默认值',
            type: 'Date',
            default: 'null'
        }, {
            property: 'minDate',
            describe: '最小日期',
            type: 'Date',
            default: '2000'
        }, {
            property: 'maxDate',
            describe: '最大日期',
            type: 'Date',
            default: '2050'
        }, {
            property: 'date',
            describe: '初始日期，优先级>defaultDate',
            type: 'Date',
            default: ''
        }, {
            property: 'title',
            describe: '初始日期，优先级>defaultDate',
            type: 'Date',
            default: ''
        }, {
            property: 'onDateChange',
            describe: '日期发生变化触发的事件',
            type: 'Function',
            default: '(value, index)=>{}'
        }, {
            property: 'onValueChange',
            describe: '日期发生变化触发的事件',
            type: 'Function',
            default: '(date)=>{}'
        }, {
            property: 'onOk',
            describe: '点击确定触发的事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onDismiss',
            describe: '点击取消触发的事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: '其他',
            describe: '参考Picker组件',
            type: '',
            default: ''
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='日期选择' src={imgUrl} />
    }

    renderCodeContent() {
        return `
import React, { Component } from "react";
import {View, Text} from "react-native";
import {Toast, Button, DatePicker, WhiteSpace} from "gingko";

export default class extends Component {
    state = {
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        date: null,
    };

    onDismiss = () => {
        this.setState({
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
        });
    }

    onOk = (date, values) => {
        console.log("ok_date", date);
        console.log("ok_values", values);
        Toast.show(\`date:\${date}values:\${values\}\`);
        this.onDismiss();
    }

    onDateChange = (date) => {
        console.log("date:", date);
        this.setState({
            date,
        });
    }

    onValueChange = (values, idx) => {
        console.log("changed values:", values);
        console.log("changed value:", values[idx]);
    }

    format = (date) => {
        if (date instanceof Date) {
            const year = date.getFullYear() + "年";
            const month = date.getMonth() + 1 + "月";
            const day = date.getDate() + "日";
            const hour = date.getHours() + "时";
            const minutes = date.getMinutes() + "分";
            return [year, month, day, hour, minutes].join(" ");
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                }}>{this.format(this.state.date)}</Text>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible: true,
                        });
                    }}
                >date</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible2: true,
                        });
                    }}
                >datetime</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible3: true,
                        });
                    }}
                >time</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible4: true,
                        });
                    }}
                >year</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible5: true,
                        });
                    }}
                >month</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible6: true,
                        });
                    }}
                >组件状态自管理</Button>
                <WhiteSpace />
                <DatePicker
                    visible={this.state.visible}
                    onOk={this.onOk}
                    mode="date"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible2}
                    onOk={this.onOk}
                    mode="datetime"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible3}
                    onOk={this.onOk}
                    mode="time"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible4}
                    onOk={this.onOk}
                    mode="year"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible5}
                    onOk={this.onOk}
                    mode="month"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                    minDate={new Date(2010, 6, 1, 0, 0)}
                    maxDate={new Date(2020, 11, 1, 0, 0)}
                />
                <DatePicker
                    visible={this.state.visible6}
                    onOk={this.onOk}
                    onDismiss={this.onDismiss}
                    defaultDate={new Date(2030, 0, 1, 0, 0)}
                />
                <Text>你也可以让组件自管理状态，即不传value prop,然后通过onOK, onValueChange, onDateChange回调来获取改变后的值</Text>
            </View>
        );
    }
}   
`
    }
}