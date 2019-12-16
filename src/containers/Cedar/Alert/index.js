import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Button, alert} from 'yh-cedar-ui'

export default class AlertComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Alert 提示框'
        this.describe = '一般用于给出警示'
        this.apiDataSource = [{
            property: 'title',
            describe: '标题',
            type: 'string',
            default: ''
        }, {
            property: 'subTitle',
            describe: '副标题或者描述',
            type: 'string',
            default: ''
        }, {
            property: 'buttons',
            describe: '设置提示框地步按钮',
            type: 'Array<Object>',
            default: ''
        }]
    }

    openAlert = () => {
        alert('提示', '你确定吗？', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
        ])
    }

    openColor = () => {
        alert('', '张老板帅吗？', [
            { text: '帅', color: '#24A8E8', onPress: () => console.log('cancel') },
            { text: '非常帅', color: '#FD7622', onPress: () => console.log('ok') },
        ])
    }

    renderCodeReviewContent() {
        return <div>
            <Button type='primary' inline onClick={this.openAlert}>打开Alert</Button>
            <br/>
            <Button type='primary' inline onClick={this.openColor}>可修改按钮颜色</Button>
        </div>
    }

    renderCodeContent() {
        return `
    import React, { Component } from "react"
    import { alert, Button } from "yh-cedar-ui"
    
    export default class ModalDemo extends Component {
        openAlert = () => {
            alert("提示", "你确定吗？", [
                { text: "Cancel", onPress: () => console.log("cancel") },
                { text: "Ok", onPress: () => console.log("ok") },
            ])
        }
    
        openColor = () => {
            alert("", "张老板帅吗？", [
                { text: "帅", color: "#24A8E8", onPress: () => console.log("cancel") },
                { text: "非常帅", color: "#FD7622", onPress: () => console.log("ok") },
            ])
        }
    
        render () {
            return (
                <div className="modal-container">
                    <Button type="primary" inline onClick={this.openAlert}>打开Alert</Button>
                    <Button type="primary" inline onClick={this.openColor}>可修改按钮颜色</Button>
                </div>
            )
        }
    }
`
    }
}
