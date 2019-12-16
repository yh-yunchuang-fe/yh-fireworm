import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Checkbox, Icon} from 'yh-cedar-ui'
import './index.less'

export default class CheckboxComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'CheckBox 多选框'
        this.describe = '多选单选都可'
        this.apiDataSource = [{
            property: 'prefixCls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-checkbox'
        }, {
            property: 'icon',
            describe: '选择按钮的图标',
            type: 'boolean|Function',
            default: 'true'
        }, {
            property: 'dir',
            describe: '图标放置位置，左侧或者右侧',
            type: 'string',
            default: 'left'
        }, {
            property: 'defaultChecked',
            describe: '默认是否选中',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onChange',
            describe: '点击多选框之后的回调',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'style',
            describe: '容器的行内样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'textStyle',
            describe: '多选框文本的样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'disabled',
            describe: '是否禁用',
            type: 'boolean',
            default: 'false'
        }]
    }

    onFirstChange = (checked) => {
        if (checked) {
            this.setState({
                baiduStyle: {
                    color: '#24a8e8',
                },
            })
        } else {
            this.setState({
                baiduStyle: {

                },
            })
        }
    }

    onSecondChange = (checked) => {
        checked ? this.setState({
            checkedStyle: {
                backgroundColor: '#e7f7ff',
            },
        }) : this.setState({
            checkedStyle: {},
        })
    }

    // eslint-disable-next-line react/display-name
    renderIcon = ({ checked }) => {
        return checked ?
            <div style={{marginLeft: '10px'}}>
                <Icon name='checkmark' size={12}/>
            </div> : null
    }

    // eslint-disable-next-line react/display-name
    renderCheckIcon = ({ checked }) => {
        const name = checked ? 'radio-on' : 'radio-off'
        return (
            <div style={{marginRight: '10px'}}>
                <Icon name={name} color='red' />
            </div>
        )
    }

    renderCodeReviewContent() {
        return <div style={{padding: '0 10px', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ padding: '10px 0', alignItems: 'center', justifyContent: 'center'}}>
                <Checkbox
                    checked={this.state.value === 1}
                    onChange={() => {
                        this.setState({
                            value: 1,
                        })
                    }}
                >
                    选项一
                </Checkbox>
                <Checkbox
                    checked={this.state.value === 2}
                    style={{
                        margin: '5px 0'
                    }}
                    onChange={() => {
                        this.setState({
                            value: 2,
                        })
                    }}
                >
                    选项二
                </Checkbox>
                <Checkbox
                    checked={this.state.value === 3}
                    onChange={() => {
                        this.setState({
                            value: 3,
                        })
                    }}
                >
                    选项三
                </Checkbox>
            </div>

            <Checkbox
                defaultChecked={false}
                onChange={(checked) => console.log('checkedState:', checked)}
            >
                default icon Checkbox
            </Checkbox>
            <div style={{padding: '5px 0'}}></div>
            <Checkbox
                icon={this.renderCheckIcon}
                textStyle={{ color: 'red' }}
            >
                custom icon Checkbox
            </Checkbox>
            <div style={{padding: '5px 0'}}></div>
            <Checkbox
                defaultChecked={true}
                disabled={true}
            >
                disabled checkbox and customize the div styles
            </Checkbox>

            <div style={{padding: '5px 0'}}></div>
            <Checkbox
                icon={false}
                onChange={this.onFirstChange}
            >
                <div style={{
                    backgroundColor: '#fff',
                    padding: '10px 15px',
                    ...this.state.baiduStyle,
                }}>no icon, just a checkable component</div>
            </Checkbox>
            <div style={{padding: '5px 0'}}></div>
            <Checkbox
                defaultChecked={true}
                dir="right"
                icon={this.renderIcon}
                style={{
                    backgroundColor: '#fff',
                    padding: '10px',
                }}
            >
                <div>
                    <div>custom icon and change the default icon direction</div>
                </div>
            </Checkbox>

            <div style={{padding: '5px 0'}}></div>
            <Checkbox
                style={{
                    backgroundColor: '#fff',
                    padding: '20px 15px',
                    ...this.state.checkedStyle,
                }}
                onChange={this.onSecondChange}
            >
                <div>
                    <div style={{ marginBottom: '10px', fontSize: '16px' }}>组件</div>
                    <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <div>支持插入组件</div>
                        <div>可修改选中icon</div>
                        <div>可自定义选中后的背景色</div>
                    </div>
                </div>
            </Checkbox>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import { Checkbox, Icon } from "yh-cedar-ui"

export default class CheckboxDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedStyle: {},
            baiduStyle: {},
            singleValue: "",
            value: 1,
        };
    }

    onFirstChange = (checked) => {
        if (checked) {
            this.setState({
                baiduStyle: {
                    color: "#24a8e8",
                },
            });
        } else {
            this.setState({
                baiduStyle: {

                },
            });
        }
    }

    onSecondChange = (checked) => {
        checked ? this.setState({
            checkedStyle: {
                backgroundColor: "#e7f7ff",
            },
        }) : this.setState({
            checkedStyle: {},
        })
    }

    renderIcon = ({ checked }) => {
        return checked ?
                <div style={{marginLeft: "10px"}}>
                    <Icon name="checkmark" size={12}/>
                </div> : null;
    }

    render () {
        const CheckIcon = ({ checked }) => {
            const name = checked ? "radio-on" : "radio-off";
            return (
                <div style={{marginRight: "10px"}}>
                    <Icon name={name} color="red" />
                </div>
            );
        };

        return (
            <div style={{padding: "0 10px", flex: 1, justifyContent: "center", alignItems: "center"}}>
                <div style={{ padding: "10px 0", alignItems: "center", justifyContent: "center"}}>
                    <Checkbox
                        checked={this.state.value === 1}
                        onChange={() => {
                            this.setState({
                                value: 1,
                            });
                        }}
                    >
                        选项一
                    </Checkbox>
                    <Checkbox
                        checked={this.state.value === 2}
                        style={{
                            margin: "5px 0"
                        }}
                        onChange={() => {
                            this.setState({
                                value: 2,
                            });
                        }}
                    >
                        选项二
                    </Checkbox>
                    <Checkbox
                        checked={this.state.value === 3}
                        onChange={() => {
                            this.setState({
                                value: 3,
                            });
                        }}
                    >
                        选项三
                    </Checkbox>
                </div>

                <Checkbox
                    defaultChecked={false}
                    onChange={(checked) => console.log("checkedState:", checked)}
                >
                    default icon Checkbox
                </Checkbox>
                <div style={{padding: "5px 0"}}></div>
                <Checkbox
                    icon={CheckIcon}
                    textStyle={{ color: "red" }}
                >
                    custom icon Checkbox
                </Checkbox>
                <div style={{padding: "5px 0"}}></div>
                <Checkbox
                    defaultChecked={true}
                    disabled={true}
                >
                    disabled checkbox and customize the div styles
                </Checkbox>

                <div style={{padding: "5px 0"}}></div>
                <Checkbox
                    icon={false}
                    onChange={this.onFirstChange}
                >
                    <div style={{
                        backgroundColor: "#fff",
                        padding: "10px 15px",
                        ...this.state.baiduStyle,
                    }}>no icon, just a checkable component</div>
                </Checkbox>
                <div style={{padding: "5px 0"}}></div>
                <Checkbox
                    defaultChecked={true}
                    dir="right"
                    icon={this.renderIcon}
                    style={{
                        backgroundColor: "#fff",
                        padding: "10px",
                    }}
                >
                    <div>
                        <div>custom icon and change the default icon"s direction</div>
                    </div>
                </Checkbox>

                <div style={{padding: "5px 0"}}></div>
                <Checkbox
                    style={{
                        backgroundColor: "#fff",
                        padding: "20px 15px",
                        ...this.state.checkedStyle,
                    }}
                    onChange={this.onSecondChange}
                >
                    <div>
                        <div style={{ marginBottom: "10px", fontSize: "16px" }}>组件</div>
                        <div style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <div>支持插入组件</div>
                            <div>可修改选中icon</div>
                            <div>可自定义选中后的背景色</div>
                        </div>
                    </div>
                </Checkbox>
            </div>
        )
    }
}
`
    }
}