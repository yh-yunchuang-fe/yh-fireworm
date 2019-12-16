/*
 * @Date: 2019-12-10 17:09:58
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-10 18:01:03
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {InputNumber} from 'yh-cedar-ui'
import './index.less'

export default class InputNumberComponent extends ContentPage {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
        this.title = 'InputNumber 数字输入'
        this.describe = '用于控制输入数量'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-inputnumber'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'autoFocus',
            describe: '自动获取焦点',
            type: 'boolean',
            default: false
        }, {
            property: 'disabled',
            describe: '禁用数字输入',
            type: 'boolean',
            default: false
        }, {
            property: 'minusIcon',
            describe: '自定义减图标',
            type: 'Icon | string',
            default: '<Icon name="minus" />'
        }, {
            property: 'plusIcon',
            describe: '自定义加图标',
            type: 'Icon | string',
            default: '<Icon name="plus" />'
        }, {
            property: 'defaultValue',
            describe: '默认数值',
            type: 'number',
            default: 0
        }, {
            property: 'value',
            describe: '输入的数值',
            type: 'number',
            default: null
        }, {
            property: 'min',
            describe: '最小值',
            type: 'number',
            default: -Infinity
        }, {
            property: 'max',
            describe: '最大值',
            type: 'number',
            default: Infinity
        }, {
            property: 'step',
            describe: '计算因子',
            type: 'number',
            default: 1
        }, {
            property: 'precision',
            describe: '保留小数点位数',
            type: 'number',
            default: null
        }, {
            property: 'onChange',
            describe: '数值发生变化的回调函数',
            type: 'function',
            default: null
        }, {
            property: 'formatter',
            describe: '格式化数值函数',
            type: 'function',
            default: null
        }, {
            property: 'parse',
            describe: '转化数值函数',
            type: 'function',
            default: null
        }, {
            property: 'getInputRef',
            describe: '获取编辑框实例函数',
            type: 'function',
            default: null
        }]
    }

    onChange(val) {
        this.setState({num: val})
    }

    renderCodeReviewContent() {
        const {num} = this.state
        return <div className="inputnumber-demo">
            <div className="item">
                <p>min：-10, max：6</p>
                <InputNumber min={-10} max={6} />
            </div>
            <div className="item">
                <p>min：-10, max：6，defaultValue: 1</p>
                <InputNumber defaultValue={1} min={-10} max={6} />
            </div>

            <div className="item">
                <p>精度precision: 3</p>
                <InputNumber precision={3} />
            </div>

            <div className="item">
                <p>autofocus: true</p>
                <InputNumber autoFocus min={1} defaultValue={1} />
            </div>

            <div className="item">
                <p>disabled: true</p>
                <InputNumber disabled />
            </div>

            <div className="item">
                <p>外部控制value: 10， max: 12</p>
                <InputNumber value={num} max={12} onChange={this.onChange.bind(this)}/>
            </div>

            <div className="item">
                <p>格式化数据</p>
                <InputNumber
                    defaultValue={1}
                    max={10}
                    formatter={(val) => val + '%'}
                    parse={(val) => val.replace('%', '')}
                />
            </div>

            <div className="item">
                <p>自定义图标</p>
                <InputNumber
                    defaultValue={1}
                    minusIcon={<span>减</span>}
                    plusIcon={<span>加</span>}
                />
            </div>
        </div>
    }

    renderCodeContent() {
        return `import React, {Component} from 'react'
import { InputNumber } from 'yh-cedar-ui';
import './index.less'

export default class InputNumberDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num: 1
        }
    }

    onChange(val) {
        this.setState({num: val})
    }

    render() {
        const {num} = this.state
        return <div className="inputnumber-demo">
            <div className="item">
                <p>min：-10, max：6</p>
                <InputNumber min={-10} max={6} />
            </div>
            <div className="item">
                <p>min：-10, max：6，defaultValue: 1</p>
                <InputNumber defaultValue={1} min={-10} max={6} />
            </div>

            <div className="item">
                <p>精度precision: 3</p>
                <InputNumber precision={3} />
            </div>

            <div className="item">
                <p>autofocus: true</p>
                <InputNumber autoFocus min={1} defaultValue={1} />
            </div>

            <div className="item">
                <p>disabled: true</p>
                <InputNumber disabled />
            </div>

            <div className="item">
                <p>外部控制value: 10， max: 12</p>
                <InputNumber value={num} max={12} onChange={this.onChange.bind(this)}/>
            </div>

            <div className="item">
                <p>格式化数据</p>
                <InputNumber
                    defaultValue={1}
                    max={10}
                    formatter={(val) => val + '%'}
                    parse={(val) => val.replace('%', '')}
                />
            </div>

            <div className="item">
                <p>自定义图标</p>
                <InputNumber
                    defaultValue={1}
                    minusIcon={<span>减</span>}
                    plusIcon={<span>加</span>}
                />
            </div>
        </div>
    }
}`
    }
}
