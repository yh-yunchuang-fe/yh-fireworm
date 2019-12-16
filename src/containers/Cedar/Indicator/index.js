/*
 * @Date: 2019-12-10 16:45:28
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-11 16:56:18
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Indicator} from 'yh-cedar-ui'

export default class IndicatorComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Indicator 提示'
        this.describe = '一般用于显示正在加载中'
        this.apiDataSource = [{
            property: 'size',
            describe: '提示的大小( xxs | xs | sm | md | lg )',
            type: 'string',
            default: 'md'
        }, {
            property: 'color',
            describe: '提示的颜色',
            type: 'string',
            default: 'blue'
        }, {
            property: 'text',
            describe: '提示文字',
            type: 'string',
            default: ''
        }, {
            property: 'className',
            describe: '提示的类名',
            type: 'string',
            default: ''
        },{
            property: 'textStyle',
            describe: '提示文字样式',
            type: 'object',
            default: null
        },{
            property: 'textClassName',
            describe: '提示文字类名',
            type: 'string',
            default: ''
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <Indicator size='lg' text='加载中'/>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Indicator } from 'yh-cedar-ui'

export default class IndicatorDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Indicator size='lg' text='加载中'/>
            </div>
        )
    }
}`
    }
}
