import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Switch } from 'yh-cedar-ui'

export default class SwitchComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Switch 滑动开关'
        this.describe = '在两个互斥对象进行选择，eg：选择开或关。'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-switch'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'checked',
            describe: '是否打开',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'disabled',
            describe: '禁用',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'color',
            describe: '开关打开后的背景颜色',
            type: 'boolean',
            default: ''
        }, {
            property: 'onChange',
            describe: '点击事件',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onClick',
            describe: '未禁用点击事件',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <Switch
                checked={this.state.firstChecked}
                onChange={(checked)=>{
                    console.log('onChange checked:', checked)
                    this.setState({
                        firstChecked: checked
                    })
                }}
                onClick={(checked)=>{
                    console.log('onClick checked:', checked)
                }}
            />
            <div style={{marginBottom: '10px'}}></div>
            <Switch checked={true} disabled={true} />
            <div style={{marginBottom: '10px'}}></div>
            <Switch checked={false} disabled={true} />
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Switch } from 'yh-cedar-ui'

export default class SwitchDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstChecked: false,
        }
    }

    render() {
        return (
            <div>
                <Switch
                    checked={this.state.firstChecked}
                    onChange={(checked)=>{
                        console.log('onChange checked:', checked)
                        this.setState({
                            firstChecked: checked
                        })
                    }}
                    onClick={(checked)=>{
                        console.log('onClick checked:', checked)
                    }}
                />
                <br/>
                <Switch checked={true} disabled={true} />
                <br/>
                <Switch checked={false} disabled={true} />
            </div>
        )
    }
}`
    }
}
