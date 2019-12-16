import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Toast, Button, Icon } from 'yh-cedar-ui'

export default class ToastComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Toast 轻提示'
        this.describe = '一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。'
        this.apiDataSource = [{
            property: 'mask',
            describe: '背景是否可点击',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'icon',
            describe: '插入icon',
            type: 'ReactNode',
            default: ''
        }, {
            property: 'type',
            describe: 'toast类型loading, success, fail, warn',
            type: 'string',
            default: ''
        }, {
            property: 'duration',
            describe: '显示时间',
            type: 'number',
            default: '2000'
        }, {
            property: 'position',
            describe: '显示位置',
            type: 'string',
            default: 'center'
        }, {
            property: 'onClose',
            describe: '关闭Toast',
            type: 'function',
            default: '(){}'
        }, {
            property: 'style',
            describe: 'toast样式',
            type: 'object',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <div style={{
            display: 'flex',
            minHeight: '80vh',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }}>
            <Button onClick={() => {
                Toast.success('我是success toast')
            }}>success</Button>
            <Button onClick={() => {
                Toast.fail('我是fail toast')
            }}>fail</Button>
            <Button onClick={() => {
                Toast.loading('我是loading toast并且默认永久存在,你可以将duration设置为大于0的值或者调用toast.hide使其消失')
            }}>loading</Button>
            <Button onClick={() => {
                Toast.warn('我是warn toast')
            }}>warn</Button>
            <Button onClick={() => {
                Toast.show('我是normal toast')
            }}>normal</Button>
            <Button onClick={() => {
                Toast.show(
                    <div>
                        <span style={{ color: 'blue' }}>toast内容可以是一个组件</span>
                        <span style={{ color: 'white' }}>其实应该说是ReactElement</span>
                    </div>
                )
            }}>自定义内容组件</Button>
            <Button onClick={() => {
                Toast.show(
                    'icon可以是一个functional组件,或者ReactElement',
                    {
                        icon: <Icon name="eye-off" color="red" />
                    }
                )
            }}>自定义Icon</Button>
            <Button onClick={() => {
                const id = Toast.show('当duration为0时,toast永久显示', {
                    type: 'success',
                    duration: 0,
                })
                setTimeout(() => {
                    // remove manually
                    Toast.hide(id)
                }, 10000)
            }}>永久显示Toast</Button>
            <Button onClick={() => {
                Toast.show('第一个toast', {
                    style: {
                        position: 'absolute',
                        top: 100,
                    },
                })
                Toast.show('第二个toast', {
                    style: {
                        position: 'absolute',
                        bottom: 100,
                    },
                })
            }}>
                可以同时显示多个toast
            </Button>
            <Button onClick={() => {
                Toast.show('type|duration|position|style|onClose', {
                    type: 'success',
                    icon: null,
                    duration: 4000,
                    position: 'top',
                    mask: false,
                    style: {
                        backgroundColor: 'red',
                    },
                    onClose() {
                        console.log('onClose callback will be called when the animation ended')
                    }
                })
            }}>
                自定义可选参数
            </Button>
            <Button onClick={() => {
                Toast.show('mask为true时不会响应事件,默认为false', {
                    mask: true,
                })
            }}>
                mask toast
            </Button>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Icon, Toast, Button, } from 'yh-cedar-ui'

export default class ToastDemo extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                minHeight: '80vh',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
                <Button onClick={() => {
                    Toast.success('我是success toast')
                }}>success</Button>
                <Button onClick={() => {
                    Toast.fail('我是fail toast')
                }}>fail</Button>
                <Button onClick={() => {
                    Toast.loading('我是loading toast\n并且默认永久存在,你可以将duration设置为大于0的值\n或者调用toast.hide使其消失')
                }}>loading</Button>
                <Button onClick={() => {
                    Toast.warn('我是warn toast')
                }}>warn</Button>
                <Button onClick={() => {
                    Toast.show('我是normal toast')
                }}>normal</Button>
                <Button onClick={() => {
                    Toast.show(
                        <div>
                            <span style={{ color: 'blue' }}>toast内容可以是一个组件</span>
                            <span style={{ color: 'white' }}>其实应该说是ReactElement</span>
                        </div>
                    )
                }}>自定义内容组件</Button>
                <Button onClick={() => {
                    Toast.show(
                        'icon可以是一个functional组件,或者ReactElement',
                        {
                            icon: <Icon name="eye-off" color="red" />
                        }
                    )
                }}>自定义Icon</Button>
                <Button onClick={() => {
                    const id = Toast.show('当duration为0时,toast永久显示', {
                        type: 'success',
                        duration: 0,
                    })
                    setTimeout(() => {
                        // remove manually
                        Toast.hide(id)
                    }, 10000)
                }}>永久显示Toast</Button>
                <Button onClick={() => {
                    Toast.show('第一个toast', {
                        style: {
                            position: 'absolute',
                            top: 100,
                        },
                    })
                    Toast.show('第二个toast', {
                        style: {
                            position: 'absolute',
                            bottom: 100,
                        },
                    })
                }}>
                    可以同时显示多个toast
                </Button>
                <Button onClick={() => {
                    Toast.show('type|duration|position|style|onClose', {
                        type: 'success',
                        icon: null,
                        duration: 4000,
                        position: 'top',
                        mask: false,
                        style: {
                            backgroundColor: 'red',
                        },
                        onClose() {
                            console.log('onClose callback will be called when the animation ended')
                        }
                    })
                }}>
                    自定义可选参数
                </Button>
                <Button onClick={() => {
                    Toast.show('mask为true时不会响应事件,默认为false', {
                        mask: true,
                    })
                }}>
                    mask toast
                </Button>
            </div>
        )
    }
}`
    }
}
