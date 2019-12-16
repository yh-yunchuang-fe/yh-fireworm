import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Picker } from 'yh-cedar-ui'
import { BASIC_TYPE_STRING, BASIC_TYPE_BOOL, BASIC_TYPE_FUN, BASIC_TYPE_ARRAY } from '../../../config/type.config'
export default class PickerComponent extends ContentPage {
    constructor(props) {
        super(props)
        this.title = 'Picker 选择器'
        this.describe = '用于底部弹出选择框进行数据选择'
        this.state = {
            visible: false,
            dateVisible: false,
            dateValue: '2008-06-01',
            value: null,
            okValue: null,
            options: [[
                {
                    label: '安徽省',
                    value: 'AHS'
                },
                {
                    label: '湖北省',
                    value: 'HBS'
                },
                {
                    label: '山东省',
                    value: 'SDS'
                },
                {
                    label: '河南省',
                    value: 'HNS'
                },
                {
                    label: '湖南省',
                    value: 'HUNANS'
                },
            ], ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010']]
        }
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: BASIC_TYPE_STRING,
            default: 'yh-badge'
        },{
            property: 'className',
            describe: '组件额外的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'title',
            describe: '选择器的标题',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'okText',
            describe: '确定按钮的文本',
            type: BASIC_TYPE_STRING,
            default: '确定'
        },{
            property: 'dismissText',
            describe: '取消按钮的文本',
            type: BASIC_TYPE_STRING,
            default: '取消'
        },{
            property: 'visible',
            describe: '选择器的显示/隐藏',
            type: BASIC_TYPE_BOOL,
            default: 'false'
        },{
            property: 'options',
            describe: '支持一维和多维数组的数据',
            type: BASIC_TYPE_ARRAY,
            default: '空数组'
        },{
            property: 'value',
            describe: '获取选择器选择的值',
            type: BASIC_TYPE_ARRAY,
            default: '空数组'
        },{
            property: 'onClose',
            describe: '关闭选择器的事件',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'onChange',
            describe: '改变选择器数据的事件',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'onOk',
            describe: '确定选择器数据的事件',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'onDismiss',
            describe: '取消选择器数据的事件',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        }]
    }

    renderCodeReviewContent() {
        const { value, visible, options, okValue } = this.state
        return (
            <div style={{height: 750, color: '#f40'}}>
                <div
                    style={{ marginBottom: 10}}
                    className="selection"
                    onClick={() => {
                        this.setState({
                            visible: true
                        })

                    }}>
                    { okValue ? JSON.stringify(okValue) : '点击展示' }
                </div>
                <div>该组件是移动端组件请切换到移动端！</div>
                <img src={require('../../../assets/cedar/picker.gif')} alt="logo" style={{height: 650, width: 300}}/>
                <Picker
                    visible={visible}
                    onClose={()=>{
                        this.setState({
                            visible: false
                        })
                    }}
                    options={options}
                    value={value}
                    onChange={(value) => {
                        console.log('onChange:', value)
                        this.setState({
                            value
                        })
                    }}
                    onOk={(value)=>{
                        console.log('onOk')
                        this.setState({
                            okValue: value
                        })
                    }}
                    onDismiss={()=>{
                        console.log('onDismiss')
                    }}/>

            </div>
        )
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Picker } from 'yh-cedar-ui'

export default class PickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            dateVisible: false,
            dateValue: '2008-06-01',
            value: null,
            okValue: null,
            options: [[
                {
                    label: '安徽省',
                    value: 'AHS'
                },
                {
                    label: '湖北省',
                    value: 'HBS'
                },
                {
                    label: '山东省',
                    value: 'SDS'
                },
                {
                    label: '河南省',
                    value: 'HNS'
                },
                {
                    label: '湖南省',
                    value: 'HUNANS'
                },
            ], ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010']]
        }

    }

    fixedBody() {
        this.scrollTop = this.getScrollTop()
        // 使body脱离文档流
        document.body.classList.add('dialog-open')

        // 把脱离文档流的body拉上去！否则页面会回到顶部！
        document.body.style.top = -this.scrollTop + 'px'
    }

    staticBody() {
        // 滚回到老地方
        document.body.classList.remove('dialog-open')
        this.to(this.scrollTop)
    }

    to(scrollTop){
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop
    }

    getScrollTop(){
        return document.body.scrollTop || document.documentElement.scrollTop
    }
    render() {
        const { value, visible, options, okValue } = this.state
        return (
            <div style={{height: 100, color: '#f40'}}>
                <div
                    style={{ marginBottom: 10}}
                    className="selection"
                    onClick={() => {
                        this.setState({
                            visible: true
                        })
                        this.fixedBody()

                    }}>
                    { okValue ? JSON.stringify(okValue) : '点击展示' }
                </div>
                <div>该组件是移动端组件请切换到移动端！</div>
                <Picker
                    visible={visible}
                    onClose={()=>{
                        this.setState({
                            visible: false
                        })
                        this.staticBody()
                    }}
                    options={options}
                    value={value}
                    onChange={(value) => {
                        console.log('onChange:', value)
                        this.setState({
                            value
                        })
                    }}
                    onOk={(value)=>{
                        console.log('onOk')

                        this.setState({
                            okValue: value
                        })
                    }}
                    onDismiss={()=>{
                        console.log('onDismiss')
                    }}/>

            </div>
        )
    }
}`
    }
}
