import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class DatePickerComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'DatePicker 日期选择器'
        this.describe = '可配置的日期选择组件'
        this.apiDataSource = [{
            property: 'mode',
            describe: '控制选择器模式',
            type: 'string',
            default: 'date'
        }, {
            property: 'defaultValue',
            describe: '默认值',
            type: 'Date',
            default: 'null'
        }, {
            property: 'minDate',
            describe: '最小日期',
            type: 'Date',
            default: '当前日期往前10年'
        }, {
            property: 'maxDate',
            describe: '最大日期',
            type: 'Date',
            default: '当前日期往后10年'
        }, {
            property: '其他',
            describe: '参考Picker组件',
            type: '',
            default: ''
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='日期选择' src={require('../../../assets/cedar/datePicker.gif')} />
    }

    renderCodeContent() {
        return `
import React, { Component } from "react"
import { DatePicker } from "yh-cedar-ui"

export default class SearchDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateVisible: false,
            dateValue: "2008-06-01"
        }
    }

    fixedBody() {
        this.scrollTop = this.getScrollTop();
        document.body.classList.add("dialog-open");

        document.body.style.top = -this.scrollTop + "px";
    }

    staticBody() {
        document.body.classList.remove("dialog-open")
        this.to(this.scrollTop)
    }

    to(scrollTop){
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    }

    getScrollTop(){
        return document.body.scrollTop || document.documentElement.scrollTop;
    }

    render() {
        const { dateValue, dateVisible } = this.state

        return (
            <div style={{height: 1000}}>

                <div
                    style={{marginTop: 10}}
                    className="selection"
                    onClick={() => {
                        this.setState({
                            dateVisible: true
                        })
                        this.fixedBody()

                    }}>
                    { dateValue ? JSON.stringify(dateValue) : "请选择日期" }
                </div>
                <DatePicker
                    visible={dateVisible}
                    onClose={()=>{
                        this.setState({
                            dateVisible: false
                        })
                        this.staticBody()
                    }}
                    defaultValue={dateValue}
                    onChange={(value) => {
                        console.log("onChange:", value)
                        this.setState({
                            dateValue: value
                        })
                    }}
                    />
            </div>
        )
    }
}
`
    }
}