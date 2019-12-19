import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/modal.gif'
export default class ModalComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Modal 蒙层'
        this.describe = '模态对话框'
        this.apiDataSource = [{
            property: 'visible',
            describe: '是否可见',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'title',
            describe: '标题',
            type: 'string',
            default: ''
        }, {
            property: 'maskClosable',
            describe: '是否可以点击蒙层关闭蒙层',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'footer',
            describe: '底部按钮',
            type: 'Array[Button]',
            default: '[]'
        }, {
            property: 'transparent',
            describe: '蒙层是否透明',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'animationType',
            describe: '动画类型',
            type: 'none|fade|slide-up|slide-down',
            default: 'fade'
        }, {
            property: 'animationDuration',
            describe: '蒙层动画持续时间',
            type: 'number',
            default: '300'
        }, {
            property: 'style',
            describe: '容器样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'bodyStyle',
            describe: '内容样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'onClose',
            describe: '关闭蒙层的事件',
            type: 'function',
            default: '()=>{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='蒙层' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet} from "react-native"
import { Modal, Button, WingBlank, WhiteSpace} from "gingko"

const alert = Modal.alert;

export default class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBasic: false,
            visibleInput: false,
            animationType: ""
        }
    }

    render() {
        return (
            <View>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        onClick={()=>{
                            this.setState({ visibleBasic: true, animationType: "none" })
                        }}
                    >basic</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visibleInput: true, animationType: "none" })
                        }}
                    >Modal TextInput</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            alert("Title", "This is content???", [
                                { text: "Cancel", onPress: () => console.log("cancel") },
                                { text: "Ok", type: "primary", onPress: () => console.log("ok") },
                            ])}
                        }
                    >alert</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            alert("", "确认后拣货单将进入配送流程请确认拣货完毕", [
                                { text: "知道了", type: "primary", onPress: () => console.log("ok") },
                            ])}
                        }
                    >alert title empty</Button>
                </WingBlank>

                <Modal
                    visible={this.state.visibleBasic}
                    onClose={()=>{
                        this.setState({ visibleBasic: false })
                    }}
                    title={"这是title"}
                    footer={[{
                        text: "知道了",
                        type: "primary"
                    }]}
                >
                    <Text>这是内容</Text>
                    <Text>content</Text>
                </Modal>

                <Modal
                    visible={this.state.visibleInput}
                    onClose={()=>{
                        this.setState({ visibleInput: false })
                    }}
                    title={"这是title"}
                    footer={[{
                        text: "知道了",
                        type: "primary"
                    }]}
                    style={{top: -100}}
                >
                    <Text>这是内容</Text>
                    <TextInput
                        style={{
                            height: 28,
                            lineHeight: 28,
                            borderColor: "#333",
                            borderWidth: StyleSheet.hairlineWidth
                        }}
                        placeholder="文本框"/>
                    <Text>content</Text>
                </Modal>
            </View>
        )
    }
}`
    }
}
