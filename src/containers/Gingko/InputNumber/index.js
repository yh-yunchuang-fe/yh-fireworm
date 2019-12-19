import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/inputNumber.gif'
export default class InputNumberComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'InputNumber 数字输入框'
        this.describe = '可带单位的数字调节器'
        this.apiDataSource = [{
            property: 'value',
            describe: '值',
            type: 'number',
            default: 0
        }, {
            property: 'max',
            describe: '最大值',
            type: 'number',
            default: 'Infinity'
        }, {
            property: 'min',
            describe: '最小值',
            type: 'number',
            default: '-Infinity'
        }, {
            property: 'step',
            describe: '加减的步伐',
            type: 'number',
            default: 1
        }, {
            property: 'disabled',
            describe: '是否禁用',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'editable',
            describe: '是否可编辑',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'autoFocus',
            describe: '是否自动获取焦点',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'unit',
            describe: '数字后缀',
            type: 'string',
            default: ''
        }, {
            property: 'style',
            describe: '容器样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'width',
            describe: '默认宽度',
            type: 'string|number',
            default: 110
        }, {
            property: 'onChange',
            describe: '值改变事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onFocus',
            describe: '获得焦点事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onBlur',
            describe: '失去焦点事件',
            type: 'Function',
            default: '()=>{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='数字输入框' src={imgUrl} />
    }

    renderCodeContent() {
        return `
import React, { Component } from "react"
import { View } from "react-native"
import { WhiteSpace, WingBlank, InputNumber} from "gingko";

export default class InputNumberDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: 0,
            value2: 100,
            value3: 1.1
        }
    }

    render() {
        const { value1, value2, value3 } = this.state;
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <WingBlank>
                    <WhiteSpace/>
                    <InputNumber
                        width={175}
                        value={value1}
                        unit="份"
                        onChange={(value)=>{
                            this.setState({value1: value})
                        }}
                    />
                    <WhiteSpace/>
                    <InputNumber
                        value={10}
                        unit="份"
                        disabled={true}
                    />
                    <WhiteSpace/>
                    <InputNumber
                        width={175}
                        value={value2}
                        min={100}
                        max={105}
                        step={5}
                        unit="kg"
                        onChange={(value)=>{
                            this.setState({value2: value})
                        }}
                    />
                    <WhiteSpace/>
                    <InputNumber
                        value={value3}
                        editable={false}
                        min={0}
                        max={20}
                        unit="kg"
                        onChange={(value)=>{
                            this.setState({value3: value})
                        }}
                    />
                </WingBlank>
            </View>
        )
    }
}
`
    }
}