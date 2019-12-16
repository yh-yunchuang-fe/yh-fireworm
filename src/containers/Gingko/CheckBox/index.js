import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class CheckboxComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Checkbox 复选框'
        this.describe = '多选单选都可'
        this.apiDataSource = [{
            property: 'icon',
            describe: '多选框图标',
            type: 'boolean|Function',
            default: 'true'
        }, {
            property: 'dir',
            describe: '书写方向',
            type: 'left|right',
            default: 'left'
        }, {
            property: 'checked',
            describe: '是否选中',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'defaultChecked',
            describe: '默认是否选中',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onChange',
            describe: '选中状态变更事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'style',
            describe: '容器样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'textStyle',
            describe: '文本样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'disabled',
            describe: '是否禁用',
            type: 'boolean',
            default: 'false'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='多选框' src={require('../../../assets/gingko/checkbox.gif')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react";
import {View,Text} from "react-native";
import {Icon,Checkbox,WhiteSpace} from "gingko";

const CheckIcon = ({ checked }) => {
    const name = checked ? "radio-on" : "radio-off";
    return (
        <Icon name={name} color="red" />
    );
};

export default class extends Component {
    state = {
        checkedStyle: {},
        baiduStyle: {},
        singleValue: "",
        value: 1,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Checkbox
                    defaultChecked={false}
                    onChange={(checked) => console.log("checkedState:", checked)}
                >
                    default icon Checkbox
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    icon={CheckIcon}
                >
                    custom icon Checkbox
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    defaultChecked={true}
                    disabled={true}
                    textStyle={{ color: "red" }}
                >
                    disabled checkbox and customize the text styles
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    style={{
                        backgroundColor: "#fff",
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        ...this.state.checkedStyle,
                    }}
                    onChange={(checked) => {
                        checked ? this.setState({
                            checkedStyle: {
                                backgroundColor: "#e7f7ff",
                            },
                        }) : this.setState({
                            checkedStyle: {},
                        })
                    }}
                >
                    <View>
                        <Text style={{ marginBottom: 10 }}>李荣斌</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text>待提单: 10</Text>
                            <Text>配送中: 20</Text>
                            <Text>详情</Text>
                        </View>
                    </View>
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    icon={false}
                    onChange={(checked) => {
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
                    }}
                >
                    <Text style={{
                        backgroundColor: "#fff",
                        paddingVertical: 15,
                        ...this.state.baiduStyle,
                    }}>no icon, just a checkable component</Text>
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    defaultChecked={true}
                    dir="right"
                    icon={({ checked }) => {
                        return checked ? <Icon name="checkmark" /> : null;
                    }}
                    style={{
                        backgroundColor: "#fff",
                        padding: 10,
                    }}
                >
                    <View>
                        <Text>custom icon and change the default icon"s direction</Text>
                    </View>
                </Checkbox>
                <WhiteSpace />
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}>
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
                </View>
            </View>
        );
    }
}`
    }
}
