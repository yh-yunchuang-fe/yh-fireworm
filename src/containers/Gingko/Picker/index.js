/*
 * @Date: 2019-12-11 17:31:25
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-11 17:52:58
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/picker.gif'
export default class PickerComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Picker 选择器'
        this.describe = '一般用于日期等选项的选择'
        this.apiDataSource = [{
            property: 'data',
            describe: '选择器数据源',
            type: 'Array<{label?: string | number, value: string | number }>',
            default: '[]'
        }, {
            property: 'value',
            describe: '选中的值',
            type: 'number | string[]',
            default: 'back'
        }, {
            property: 'defaultValue',
            describe: '默认值',
            type: 'number | string[]',
            default: 'null'
        }, {
            property: 'dismissText',
            describe: '取消文本',
            type: 'string',
            default: '取消'
        }, {
            property: 'okText',
            describe: '确定文本',
            type: 'string',
            default: '确定'
        }, {
            property: 'title',
            describe: '选择器标题',
            type: 'string',
            default: ''
        }, {
            property: 'children',
            describe: '自定义选择器内容',
            type: 'ReactElement',
            default: '()=>{}'
        }, {
            property: 'style',
            describe: '自定义选择器样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'visible',
            describe: '是否显示选择器',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'selectedValue',
            describe: '选中的值',
            type: 'string',
            default: ''
        }, {
            property: 'itemStyle',
            describe: '自定义选择项样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'columnStyle',
            describe: '自定义选择器列样式',
            type: 'Object',
            default: '{}'
        }, {
            property: 'onChange',
            describe: '选择项改变回调函数',
            type: 'Function',
            default: '(values?: any, idx?: number) => {}'
        }, {
            property: 'onDismiss',
            describe: '取消事件回调函数',
            type: 'Function',
            default: '(value?: any) => {}'
        }, {
            property: 'onOk',
            describe: '确定时间回调函数',
            type: 'Function',
            default: '(value?: any) => {}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='导航栏' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    Button,
    WhiteSpace,
    Picker,
} from '../../../components/index';

const styles = StyleSheet.create({
    multiPicker: {
        backgroundColor: 'red',
        height: 217,
    },
    singlePicker: {
        backgroundColor: 'yellowgreen',
    },
});

export default class PickerDemo extends Component {
    state = {
        value: ['2014', '2', '11'],
        value2: '',
        visible: false,
        visible2: false,
    };

    handleDismiss = () => {
        this.setState({
            visible: false,
            visible2: false,
        });
    }

    handleOk = (value) => {
        console.log('ok callback:', value);
        this.handleDismiss();
    };

    handlePicker = () => {
        this.setState({
            visible: true,
        });
    }

    handlePicker2 = () => {
        this.setState({
            visible2: true,
        });
    }

    render() {
        return (
            <View>
                {
                    <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>
                        {this.state.value}
                    </Text>
                }
                {
                    <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>
                        {this.state.value2}
                    </Text>
                }
                <Button onClick={this.handlePicker}>多列Picker</Button>
                <WhiteSpace/>
                <Button onClick={this.handlePicker2}>单列Picker</Button>
                <Picker
                    title="多列"
                    visible={this.state.visible}
                    data={[
                        [
                            {
                                // label是可选的, 不设置就取value的值
                                // label/value 可以是字符串或数字
                                value: '2010',
                            },
                            {
                                value: '2011',
                            },
                            {
                                value: '2012',
                            },
                            {
                                value: '2013',
                            },
                            {
                                value: '2014',
                            },
                            {
                                value: '2015',
                            },
                        ],
                        [
                            {
                                label: 1,
                                value: 1,
                            },
                            {
                                label: 2,
                                value: '2',
                            },
                            {
                                label: '3',
                                value: 3,
                            },
                        ],
                        [
                            {
                                label: '10',
                                value: '10',
                            },
                            {
                                label: '11',
                                value: '11',
                            },
                            {
                                label: '12',
                                value: '12',
                            },
                            {
                                label: '13',
                                value: '13',
                            },
                        ],
                    ]}
                    value={this.state.value}
                    onChange={(values, idx) => {
                        this.setState({
                            value: values,
                        });
                    }}
                    onOk={this.handleOk}
                    onDismiss={this.handleDismiss}
                    style={styles.multiPicker}
                    columnStyle={[
                        {
                            backgroundColor: 'yellow',
                        },
                    ]}
                    itemStyle={[
                        {
                            color: 'red',
                        },
                        {
                            color: 'gray',
                        },
                        {
                            color: 'blue',
                        }
                    ]}
                />
                <Picker
                    title="单列"
                    visible={this.state.visible2}
                    onOk={this.handleOk}
                    style={styles.singlePicker}
                    onDismiss={this.handleDismiss}
                    value={this.state.value2}
                    onChange={(val, idx) => {
                        this.setState({
                            value2: val,
                        });
                    }}
                >
                    <Picker.Item value="gba" label="gba" />
                    <Picker.Item value="ps4" label="ps4" />
                    <Picker.Item value="ns" label="ns" />
                    <Picker.Item value="xbox" label="xbox" />
                </Picker>
                <WhiteSpace/>
                <Text>你也可以让组件自管理状态，即不传value prop,然后通过onOK和onChange回调来获取改变后的值</Text>
            </View>
        );
    }
}`
    }
}
