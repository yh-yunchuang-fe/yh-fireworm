/*
 * @Date: 2019-12-10 18:05:12
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-10 18:17:34
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Label} from 'yh-cedar-ui'

export default class BadgeComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Label 标签'
        this.describe = '一般用于显示信息'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-label'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'left',
            describe: '标签左边文字',
            type: 'string',
            default: ''
        }, {
            property: 'leftColor',
            describe: '标签左边文字颜色',
            type: 'string',
            default: '#999'
        }, {
            property: 'right',
            describe: '标签右边文字',
            type: 'string',
            default: ''
        }, {
            property: 'rightColor',
            describe: '标签右边文字颜色',
            type: 'string',
            default: '#333'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <Label left='姓名' right='白小龙'/>
            <Label left='手机号' right='13888888888' rightColor='#24A8E8'/>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Label } from 'yh-cedar-ui'

export default class LabelDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <Label left='姓名' right='白小龙'/>
            <Label left='手机号' right='13888888888' rightColor='#24A8E8'/>
            </div>
        )
    }
}`
    }
}
