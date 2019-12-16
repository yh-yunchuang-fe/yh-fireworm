import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class PopupComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Popup 弹窗'
        this.describe = '用作显示系统的重要信息，弹出二次确认'
        this.apiDataSource = [{
            property: 'visible',
            describe: '是否显示',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'animateAppear',
            describe: '动画显示',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'animationDuration',
            describe: '动画时长',
            type: 'number',
            default: '300'
        }, {
            property: 'maskClosable',
            describe: '背景是否可点击关闭',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'onClose',
            describe: '关闭',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onAnimationEnd',
            describe: '消失动画',
            type: 'function',
            default: '(){}'
        }, {
            property: 'style',
            describe: '样式',
            type: 'object',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='弹窗' src={require('../../../assets/gingko/popup.gif')} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Popup, Button, WingBlank, WhiteSpace } from 'gingko'

export default class PopupDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <View>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true })
                        }}
                    >basic</Button>
                </WingBlank>
                <Popup
                    visible={this.state.visible}
                    onClose={()=>{
                        this.setState({ visible: false })
                    }}
                >
                    <View style={{
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>Popup</Text>
                    </View>
                </Popup>
            </View>
        )
    }
}`
    }
}
