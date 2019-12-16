import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class DialogComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Dialog 询问框'
        this.describe = '在页面上弹出询问框'
        this.apiDataSource = [{
            property: 'style',
            describe: 'css样式',
            type: 'object',
            default: '{}'
        }, {
            property: 'wrapStyle',
            describe: '包裹的样式',
            type: '{}',
            default: '内部样式'
        },{
            property: 'maskStyle',
            describe: '弹出的样式',
            type: '{}',
            default: '内部样式'
        },{
            property: 'animationType',
            describe: '动画效果',
            type: 'string : none | fade | slide-up | slide-down',
            default: 'none'
        },{
            property: 'animationDuration',
            describe: '动画效果的延迟',
            type: 'number',
            default: '300'
        },{
            property: 'animateAppear',
            describe: '是否出现动画',
            type: 'boolean',
            default: 'fasle'
        },{
            property: 'visible',
            describe: '询问框的是否出现',
            type: 'boolean',
            default: 'false'
        },{
            property: 'transparent',
            describe: '蒙层是否透明',
            type: 'boolean',
            default: 'true'
        },{
            property: 'maskClosable',
            describe: '蒙层是否消失',
            type: 'boolean',
            default: 'true'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='询问框' src={require('../../../assets/gingko/dialog.gif')} />
    }

    renderCodeContent() {
        return   `import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Dialog, Button, WingBlank, WhiteSpace } from 'gingko'

export default class DialogDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            animationType: ''
        }
    }

    render() {
        return (
            <View>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'none' })
                        }}
                    >open Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'fade' })
                        }}
                    >open fade Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'slide-up' })
                        }}
                    >open slide-up Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'slide-down' })
                        }}
                    >open slide-up Dialog</Button>
                </WingBlank>

                <Dialog
                    visible={this.state.visible}
                    animationType={this.state.animationType}
                    wrapStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    maskClosable={true}
                    onClose={()=>{
                        this.setState({ visible: false })
                    }}
                >
                    <View style={{
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        shadowColor: '#333',
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowRadius: 3,
                        shadowOpacity: .2,
                        elevation: 10
                    }}>
                        <Text>Loading</Text>
                    </View>
                </Dialog>
            </View>
        )
    }
}`
    }
}
