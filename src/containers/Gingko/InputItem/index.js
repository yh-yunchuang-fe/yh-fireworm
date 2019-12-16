import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class InputItemComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'InputItem 输入框'
        this.describe = '一般用于待验证文本框的输入'
        this.apiDataSource = [ {
            property: 'ok',
            describe: '验证成功的样式的显示',
            type: 'blooean',
            default: 'fasle'
        },{
            property: 'type',
            describe: '输入框验证的类型',
            type: 'string',
            default: 'text'
        },{
            property: 'errorHint',
            describe: '错误提示显示的文字',
            type: 'string',
            default: ''
        },{
            property: 'value',
            describe: '文本框输入的值',
            type: 'string',
            default: ''
        },{
            property: 'style',
            describe: '文本框包裹的样式',
            type: 'object',
            default: '内部样式',  
        },{
            property: 'inputStyle',
            describe: '输入框的样式',
            type: 'object',
            default: '内部样式'
        },{
            property: 'onChange',
            describe: '文本框输入改变',
            type: 'function',
            default: '() => {}'
        },{
            property: 'onBlur',
            describe: '失去焦点的事件',
            type: 'function',
            default: '() => {}'
        },{
            property: 'onFocus',
            describe: '获得焦点的事件',
            type: 'function',
            default: '() => {}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='输入框' src={require('../../../assets/gingko/InputItem.gif')} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { InputItem, WingBlank, WhiteSpace } from 'gingko'

export default class InputItemDemo extends Component {
    state = {
        value: '',
        ok: false,
        error: false,
        errorHint: '',

        value2: '',
        ok2: false,
        error2: false,
        errorHint2: '',
    };

    onChange = (text) => {
        this.setState({
            value: text,
        });
    }

    onBlur = (value) => {
        // 188-5689-8921
        if (value.length === 13) {
            this.setState({
                ok: true,
                error: false,
            });
        } else {
            this.setState({
                ok: false,
                error: true,
                errorHint: '请输入正确的手机号码',
            });
        }
    }

    onChange2 = (text) => {
        this.setState({
            value2: text,
        });
    }

    onBlur2 = (value) => {
        const val = value.trim();
        if (val.length > 0 && val.length < 5) {
            this.setState({
                ok2: true,
                error2: false,
            });
        } else {
            this.setState({
                ok2: false,
                error2: true,
                errorHint2: '请输入合适的昵称',
            });
        }
    }

    onFocus = () => {
        this.setState({
            ok: false,
            error: false,
            errorHint: '',
        });
    }

    onFocus2 = () => {
        this.setState({
            ok2: false,
            error2: false,
            errorHint2: '',
        });
    }

    render() {
        // InputItem为受控组件，请务必设置value属性
        return (
            <View>
                <WingBlank>
                    <InputItem
                        type="phone"
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        ok={this.state.ok}
                        error={this.state.error}
                        errorHint={this.state.errorHint}
                        placeholder="请输入正确的手机号码"
                        value={this.state.value}
                    >手机号码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={this.onChange2}
                        onBlur={this.onBlur2}
                        onFocus={this.onFocus2}
                        ok={this.state.ok2}
                        error={this.state.error2}
                        errorHint={this.state.errorHint2}
                        placeholder="请输入合适的用户名"
                        value={this.state.value2}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        // ... value, onChange, onBlur, onFocus等等
                    >密码</InputItem>
                </WingBlank>
                <WhiteSpace/>
                <View style={{backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 15}}>
                    <InputItem
                        inputStyle={{
                            backgroundColor: 'transparent',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: '#ddd'
                        }}
                        type="phone"
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        ok={this.state.ok}
                        error={this.state.error}
                        errorHint={this.state.errorHint}
                        placeholder="请输入正确的手机号码"
                        value={this.state.value}
                    >手机号码</InputItem>
                </View>
            </View>
        );
    }
}`
    }
}