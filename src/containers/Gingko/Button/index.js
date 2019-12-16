import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class ButtonComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Button 按钮'
        this.describe = '用户可操作的页面元素之一'
        this.apiDataSource = [{
            property: 'size',
            describe: '尺寸',
            type: 'large|small',
            default: 'large'
        }, {
            property: 'type',
            describe: '类型',
            type: 'default|primary|warning',
            default: 'default'
        }, {
            property: 'disabled',
            describe: '是否禁用',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'style',
            describe: '容器样式',
            type: 'Obejct',
            default: '{}'
        }, {
            property: 'textStyle',
            describe: '按钮文字样式',
            type: 'React.CSSProperties',
            default: '{}'
        }, {
            property: 'loading',
            describe: '按钮文字左侧的loading',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'activeStyle',
            describe: '按钮激活状态下的样式',
            type: 'Obejct',
            default: '{}'
        }, {
            property: 'icon',
            describe: '按钮的图标',
            type: 'string|IconProps',
            default: '{}'
        }, {
            property: 'onClick',
            describe: '点击事件',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onShowUnderlay',
            describe: '当底层的颜色被显示的时候调用',
            type: 'Function',
            default: '()=>{}'
        }, {
            property: 'onHideUnderlay',
            describe: '当底层的颜色被隐藏的时候调用',
            type: 'Function',
            default: '()=>{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='按钮' src={require('../../../assets/gingko/button.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import { View, Text, Alert } from "react-native"
import { Button, WhiteSpace } from "gingko"

export default class ButtonDemo extends Component {
    render() {
        return (
            <View style={{marginVertical: 50, marginHorizontal: 20}}>
                <Button
                    icon="scan"
                    onClick={()=>{ Alert.alert("button") }}>
                    default button
                </Button>
                <WhiteSpace/>
                <Button disabled>
                    default button
                </Button>
                <WhiteSpace/>
                <Button
                    icon={{
                        name: "search",
                        color: "#fff",
                        size: "lg"
                    }}
                    type="primary">
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="primary" disabled>
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="warning">
                    warning button
                </Button>
                <WhiteSpace/>
                <Button type="warning" disabled>
                    warning button
                </Button>
                <WhiteSpace/>
                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <Button size="large">
                        大按钮
                    </Button>
                    <Button>
                        按钮
                    </Button>
                    <WhiteSpace/>
                    <Button size="small" type="primary">
                        小按钮
                    </Button>
                </View>

                <WhiteSpace/>
                <Button loading>
                    loading button
                </Button>
                <WhiteSpace/>
                <Button type="primary" loading>
                    下一步
                </Button>
                <WhiteSpace/>
                <Button
                    type="primary"
                    style={{height: 60}} textStyle={{fontSize: 12, color: "red"}}>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={{color: "#fff", marginBottom: 5, fontSize: 18}}>早班考勤</Text>
                        <Text style={{color: "#fff", fontSize: 12}}>请在7：45前考勤</Text>
                    </View>
                </Button>
            </View>
        )
    }
}`
    }
}
