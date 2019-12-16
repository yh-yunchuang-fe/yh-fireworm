import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { TabBar } from 'yh-cedar-ui'

export default class TabBarComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'TabBar 标签栏'
        this.describe = '方便用户在不同功能模块之间进行快速切换'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-tab-bar'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'tabBarPosition',
            describe: 'tabBar位置',
            type: 'string',
            default: 'top'
        }, {
            property: 'style',
            describe: 'tabBar样式',
            type: 'object',
            default: 'null'
        }, {
            property: 'scroll',
            describe: '是否滚动',
            type: 'boolean',
            default: false
        }, {
            property: 'scrollWidth',
            describe: '可滚动的宽度',
            type: 'number | string',
            default: 120
        }, {
            property: 'items',
            describe: 'tabbar数据',
            type: 'array',
            default: []
        }, {
            property: 'barTintColor',
            describe: 'tabbar背景色',
            type: 'string',
            default: ''
        }, {
            property: 'tintColor',
            describe: '选中的字体颜色',
            type: 'string',
            default: ''
        }, {
            property: 'unselectedTintColor',
            describe: '未选中的字体颜色',
            type: 'string',
            default: ''
        },{
            property: 'defaultActiveIndex',
            describe: '默认选中第几个',
            type: 'number',
            default: 0
        }, {
            property: 'underline',
            describe: '是否有上下边线和指示器',
            type: 'boolean',
            default: true
        }, {
            property: 'onChange',
            describe: '点击出发切换',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <div style={{marginTop: 20}}>
            <TabBar items={['first tab', 'second tab', 'third tab']} style={{marginBottom: 20}}/>
            <TabBar items={['first tab', 'second tab', 'third tab', 'fourth tab', 'fifth tab']} scroll style={{marginBottom: 20, width: 350}}/>
            <TabBar items={['first tab', 'second tab', 'third tab']} defaultActiveIndex={1} style={{marginBottom: 20}}/>
            <TabBar items={['first tab', 'second tab', 'third tab']} barTintColor="#ddd" tintColor="red"/>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { TabBar } from 'yh-cedar-ui'

export default class TabBarDemo extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div style={{marginTop: 20}}>
                <TabBar items={['first tab', 'second tab', 'third tab']} style={{marginBottom: 20}}/>
                <TabBar items={['first tab', 'second tab', 'third tab', 'fourth tab', 'fifth tab']} scroll style={{marginBottom: 20, width: 350}}/>
                <TabBar items={['first tab', 'second tab', 'third tab']} defaultActiveIndex={1} style={{marginBottom: 20}}/>
                <TabBar items={['first tab', 'second tab', 'third tab']} barTintColor="#ddd" tintColor="red"/>
            </div>
        )
    }
}`
    }
}
