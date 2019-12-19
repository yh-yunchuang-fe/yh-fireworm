import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/codeInputGroup.gif'
export default class CodeInputGroupComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'CodeInputGroup 短信验证码'
        this.describe = '可配置多位短信验证码组件'
        this.apiDataSource = [{
            property: 'defaultValue',
            describe: '默认值',
            type: 'string',
            default: ''
        }, {
            property: 'size',
            describe: '验证码位数',
            type: 'number',
            default: 6
        }, {
            property: 'autoFocus',
            describe: '是否自动获取焦点',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onChange',
            describe: '状态变更事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onFocus',
            describe: '获取焦点事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onBlur',
            describe: '获取焦点事件',
            type: 'Function',
            default: '()=>{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='短信验证码' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import {View,Text,Alert} from "react-native"
import {WhiteSpace,WingBlank,CodeInputGroup} from "gingko"


export default class CodeInputGroupDemo extends Component {
    state = {
        value: ""
    };

    render() {
        console.log("this.state.value:", this.state.value);
        return (
            <WingBlank>
                <WhiteSpace/>
                <CodeInputGroup
                    onChange={(value)=>{
                        console.log("value:", value);
                        this.setState({ value })
                    }}
                />
                <WhiteSpace/>
                <Text>{ this.state.value }</Text>
            </WingBlank>
        )
    }
}`
    }
}
