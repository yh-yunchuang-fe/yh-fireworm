import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Tag } from 'yh-cedar-ui'

export default class TagComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Tag 标签'
        this.describe = '进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-tag'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'fill',
            describe: '填充背景',
            type: 'boolean',
            default: ''
        }, {
            property: 'size',
            describe: '字体大小',
            type: 'string | number',
            default: 16
        }, {
            property: 'color',
            describe: '背景色',
            type: 'string',
            default: '#666'
        }, {
            property: 'textColor',
            describe: '字体颜色',
            type: 'string',
            default: ''
        }, {
            property: 'activeColor',
            describe: '选中后背景色',
            type: 'string',
            default: '#24A8E8'
        }, {
            property: 'style',
            describe: '选中后背景色',
            type: 'object',
            default: 'null'
        }, {
            property: 'readonly',
            describe: '只读',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'selected',
            describe: '是否选中',
            type: 'boolean',
            default: 'false'
        }]
    }

    renderCodeReviewContent() {
        return <div style={{padding: '0 10px'}}>
            <div style={{flexDirection: 'row', padding: '10px 0'}}>
                <div style={{fontSize: 20, color: '#333', margin: '10px 0'}}>不可点击:</div>
                <Tag color="#FD7622" style={{marginRight: '10px'}} fill>
                    Hello
                </Tag>
                <Tag color="#589C3E" style={{marginRight: '10px'}} className={'class'} fill>
                    World
                </Tag>
                <Tag color="#FFF3EC" textColor="#FD7622" style={{marginRight: '10px'}} fill>
                    请更换电池
                </Tag>
                <Tag color="#E7F7FF" textColor="#24A8E8" fill>
                    已报障，等待维修
                </Tag>
            </div>

            <div style={{flexDirection: 'row', padding: '10px 0', display: 'flex', justifyContent: 'space-between'}}>
                <Tag color="#24A8E8">外卖</Tag>
                <Tag color="#FD7622">堂食</Tag>
                <Tag color="#24A8E8" fill>配送</Tag>
            </div>

            <div style={{flexDirection: 'row', padding: '10px 0'}}>
                <div style={{fontSize: 20, color: '#333', margin: '10px 0'}}>可点击:</div>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    style={{marginRight: '10px'}}
                    size={14}
                    readonly={false} >
                    今天处理
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    textStyle={{fontSize: 16}}
                    readonly={false} >
                    16px字体
                </Tag>
            </div>

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版一
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版二
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版三
                </Tag>
            </div>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Tag } from 'yh-cedar-ui'

export default class TagDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div style={{padding: '0 10px'}}>
            <div style={{flexDirection: 'row', padding: '10px 0'}}>
                <div style={{fontSize: 20, color: '#333', margin: '10px 0'}}>不可点击:</div>
                <Tag color="#FD7622" style={{marginRight: '10px'}} fill>
                    Hello
                </Tag>
                <Tag color="#589C3E" style={{marginRight: '10px'}} className={'class'} fill>
                    World
                </Tag>
                <Tag color="#FFF3EC" textColor="#FD7622" style={{marginRight: '10px'}} fill>
                    请更换电池
                </Tag>
                <Tag color="#E7F7FF" textColor="#24A8E8" fill>
                    已报障，等待维修
                </Tag>
            </div>

            <div style={{flexDirection: 'row', padding: '10px 0', display: 'flex', justifyContent: 'space-between'}}>
                <Tag color="#24A8E8">外卖</Tag>
                <Tag color="#FD7622">堂食</Tag>
                <Tag color="#24A8E8" fill>配送</Tag>
            </div>

            <div style={{flexDirection: 'row', padding: '10px 0'}}>
                <div style={{fontSize: 20, color: '#333', margin: '10px 0'}}>可点击:</div>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={14}
                    readonly={false} >
                    今天处理
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    textStyle={{fontSize: 16}}
                    readonly={false} >
                    16px字体
                </Tag>
            </div>

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版一
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版二
                </Tag>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    size={12}
                    readonly={false}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                    }}
                >
                    模版三
                </Tag>
            </div>
        </div>  )
    }
}`
    }
}
