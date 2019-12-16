import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class ModalComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'NavBar 导航栏'
        this.describe = '头部导航条'
        this.apiDataSource = [{
            property: 'style',
            describe: '容器样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'leftIcon',
            describe: '左侧图标',
            type: 'string',
            default: 'back'
        }, {
            property: 'leftContent',
            describe: '左侧内容',
            type: 'ReactElement',
            default: 'null'
        }, {
            property: 'rightContent',
            describe: '右侧内容',
            type: 'ReactElement',
            default: 'null'
        }, {
            property: 'onLeftClick',
            describe: '左侧点击事件',
            type: 'Function',
            default: '()=>{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='导航栏' src={require('../../../assets/gingko/navBar.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react" 
import { View } from "react-native"
import { WhiteSpace, NavBar} from "gingko"

export default class NavBarDemo extends Component {
    render() {
        return (
            <View>
                <WhiteSpace/>
                <NavBar
                >
                    导航栏
                </NavBar>
            </View>
        )
    }
}`
    }
}
