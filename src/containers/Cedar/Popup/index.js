import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Popup, Button} from 'yh-cedar-ui'
import { BASIC_TYPE_STRING, } from '../../../config/type.config'

export default class PopupComponent extends ContentPage {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.title = 'Popup 弹出层'
        this.describe = '弹出一个背景遮罩层'
        this.apiDataSource = [{
            property: 'prefixCls',
            describe: '组件css的前缀',
            type: BASIC_TYPE_STRING,
            default: 'yh-popup'
        },{
            property: 'position',
            describe: '元素的定位方式',
            type: BASIC_TYPE_STRING,
            default: 'fixed'
        },{
            property: 'className',
            describe: '额外的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: '参考Dialog的属性',
            describe: '通用属性',
            type: BASIC_TYPE_STRING,
            default: ''
        }]
    }

    onPopup = () => {
        this.setState({
            visible: true
        },() => {
            setTimeout(() => {
                this.hide()
            },1500)
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    renderCodeReviewContent() {
        const {visible} = this.state

        return <div>
            <Button type='primary' inline onClick={this.onPopup}>弹出</Button>
            <Popup
                visible={visible}
            ></Popup>
        </div>
    }

    renderCodeContent() {
        return `import React, {Component} from 'react'
import {Popup, Button} from 'yh-cedar-ui'

export default class PopupDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    onPopup = () => {
        this.setState({
            visible: true
        },() => {
            setTimeout(() => {
                this.hide()
            },1500)
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const {visible} = this.state

        return <div>
            <Button type='primary' inline onClick={this.onPopup}>弹出</Button>
            <Popup
                visible={visible}
            ></Popup>
        </div>
    }
}`
    }
}
