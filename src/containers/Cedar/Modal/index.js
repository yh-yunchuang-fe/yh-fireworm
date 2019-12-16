import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Modal, Button } from 'yh-cedar-ui'
import { BASIC_TYPE_STRING, BASIC_TYPE_OBJECT, BASIC_TYPE_FUN, BASIC_TYPE_ARRAY } from '../../../config/type.config'

export default class ModalComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            titleVisible: false,
        }

        this.title = 'Modal 蒙层'
        this.describe = '弹出模态框进行选择背景出现蒙层'
        this.apiDataSource = [{
            property: 'prefixCls',
            describe: '组件的css前缀',
            type: BASIC_TYPE_STRING,
            default: 'yh-modal'
        },{
            property: 'title',
            describe: '模态框的标题',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'className',
            describe: '额外的css类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'maskClassName',
            describe: '弹出框的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'visible',
            describe: '显示/隐藏',
            type: BASIC_TYPE_STRING,
            default: 'false'
        },{
            property: 'onClose',
            describe: '关闭模态框事件',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'style',
            describe: 'css样式',
            type: BASIC_TYPE_OBJECT,
            default: 'null'
        },{
            property: 'footer',
            describe: '模态框的按钮的编辑',
            type: BASIC_TYPE_ARRAY,
            default: 'null'
        }]
    }

    show = () => {
        this.setState({
            visible: true
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    renderCodeReviewContent() {
        return <div style={{display: 'flex',  justifyContent: 'space-around'}}>
            <Button type="primary" inline onClick={this.show}>打开Modal</Button>
            <Button type="primary" inline onClick={() => {
                this.setState({
                    titleVisible: true
                })
            }}>无标题Modal</Button>
            <Modal
                visible={this.state.visible}
                onClose={this.hide}
                title="Title"
                footer={[{
                    text: '确定', onPress: () => {
                        console.log('onPress ')
                        this.hide()
                    }
                }]}
            >
                <div>
                    <h1>zhangyisdkkkk</h1>
                </div>
            </Modal>
            <Modal
                visible={this.state.titleVisible}
                onClose={this.hide}
                footer={[
                    {
                        text: 'cancel', color: 'red', onPress: () => {
                            this.setState({
                                titleVisible: false
                            })
                        }
                    }
                ]}>
                <div>
                    <h1>hello world</h1>
                </div>
            </Modal>
        </div>
    }

    renderCodeContent() {
        return `import React from 'react'
import { Modal, Button } from 'yh-cedar-ui'

export default class ModalDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            titleVisible: false
        }
    }

    show = () => {
        this.setState({
            visible: true
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return <div>
            <Button type="primary" inline onClick={this.show}>打开Modal</Button>
            <Button type="primary" inline onClick={() => {
                this.setState({
                    titleVisible: true
                })
            }}>无标题Modal</Button>
            <Modal
                visible={this.state.visible}
                onClose={this.hide}
                title="Title"
                footer={[{
                    text: '确定', onPress: () => {
                        console.log('onPress ')
                        this.hide()
                    }
                }]}
            >
                <div>
                    <h1>zhangyisdkkkk</h1>
                </div>
            </Modal>
            <Modal
                visible={this.state.titleVisible}
                onClose={this.hide}
                footer={[
                    {
                        text: 'cancel', color: 'red', onPress: () => {
                            this.setState({
                                titleVisible: false
                            })
                        }
                    }
                ]}>
                <div>
                    <h1>hello world</h1>
                </div>
            </Modal>
        </div>
    }
}`
    }
}