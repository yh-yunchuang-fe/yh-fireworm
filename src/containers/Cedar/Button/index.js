import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Button} from 'yh-cedar-ui'

export default class ButtonComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Button 按钮'
        this.describe = '用户可操作的页面元素之一'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-button'
        }, {
            property: 'size',
            describe: '按钮大小，large / size',
            type: 'string',
            default: 'large'
        }, {
            property: 'inline',
            describe: '是否为行内元素',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'disabled',
            describe: '是否禁用',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'type',
            describe: '按钮类型，可选值[default, primary, ghost, warning]',
            type: 'string',
            default: 'default'
        }, {
            property: 'className',
            describe: '容器的类名',
            type: 'string',
            default: ''
        }, {
            property: 'style',
            describe: '容器的行内样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'onClick',
            describe: '点击按钮之后的回调函数',
            type: 'Function',
            default: '() => {}'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <div>
                <Button type="default" style={{marginBottom: 20}}>default</Button>
                <Button type="default" disabled style={{marginBottom: 20}}>default</Button>
                <Button type="primary" style={{marginBottom: 20}}>primary</Button>
                <Button type="primary" disabled style={{marginBottom: 20}}>primary</Button>
                <Button type="warning" style={{marginBottom: 20}}>warning</Button>
                <Button type="warning" disabled style={{marginBottom: 20}}>warning</Button>
                <Button type="ghost" style={{marginBottom: 20}}>ghost</Button>
                <Button type="ghost" disabled style={{ marginBottom: 20 }}>ghost</Button>

                <Button type="ghost" inline style={{marginBottom: 20}}>ghost</Button>
            </div>
            <div>
                <Button type="primary" inline style={{ marginRight: 20 }}>primary</Button>

                <Button type="ghost" inline  size="small" style={{marginRight: 20}}>
                    ghost
                </Button>
                <Button type="ghost" disabled inline style={{ marginBottom: 20 }}>ghost</Button>
                <Button type="primary"  style={{ marginBottom: 20, height: 60, width: 400 }}>设置高度后 文字默认垂直居中</Button>
            </div>
        </div>
    }

    renderCodeContent() {
        return `
import React, { Component } from "react"
import { Button } from "yh-cedar-ui"

export default class ButtonDemo extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div style={{padding: "0 20px"}}>
                    <Button type="default" style={{marginBottom: 20}}>default</Button>
                    <Button type="default" disabled style={{marginBottom: 20}}>default</Button>
                    <Button type="primary" style={{marginBottom: 20}}>primary</Button>
                    <Button type="primary" disabled style={{marginBottom: 20}}>primary</Button>
                    <Button type="warning" style={{marginBottom: 20}}>warning</Button>
                    <Button type="warning" disabled style={{marginBottom: 20}}>warning</Button>
                    <Button type="ghost" style={{marginBottom: 20}}>ghost</Button>
                    <Button type="ghost" disabled style={{ marginBottom: 20 }}>ghost</Button>

                    <Button type="ghost" inline style={{margin: 20}}>ghost</Button>
                </div>
                <div>
                    <Button type="primary" inline style={{ marginRight: 20 }}>primary</Button>

                    <Button type="ghost" inline  size="small" style={{marginRight: 20}}>
                        ghost
                    </Button>
                    <Button type="ghost" disabled inline style={{ marginBottom: 20 }}>ghost</Button>
                    <Button type="primary"  style={{ marginBottom: 20, height: 60, width: 400 }}>设置高度后 文字默认垂直居中</Button>
                </div>
            </div>
        )
    }
}
`
    }
}