import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/tag.gif'
export default class TagComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Tag 标签'
        this.describe = '进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。'
        this.apiDataSource = [{
            property: 'readonly',
            describe: '只读',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'fill',
            describe: '填充',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'color',
            describe: '背景颜色',
            type: 'string',
            default: '#666'
        }, {
            property: 'textColor',
            describe: '字体颜色',
            type: 'string',
            default: ''
        }, {
            property: 'activeColor',
            describe: '选中后的颜色',
            type: 'string',
            default: '#24A8E8'
        }, {
            property: 'style',
            describe: '样式',
            type: 'null',
            default: 'null'
        }, {
            property: 'size',
            describe: 'tag大小',
            type: 'string',
            default: 'default'
        }, {
            property: 'selected',
            describe: '是否选中',
            type: 'boolean',
            default: 'false'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='标签' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import { Tag, WhiteSpace, WingBlank } from 'gingko'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, color: '#333'}}>高一些</Text>
                    <Tag color="#FD7622" fill>zhangyi</Tag>
                </View>
                <WhiteSpace/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Tag color="#24A8E8">外卖</Tag>
                    <Tag color="#FD7622">堂食</Tag>
                    <Tag color="#24A8E8" fill>配送</Tag>
                </View>
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, color: '#333'}}>高一些</Text>
                    <Tag color="#FD7622" fill>扫码购</Tag>
                </View>

                <WhiteSpace/>
                <Tag color="#589C3E" fill>门店</Tag>
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
                        readonly={false}
                    >
                        今天处理
                    </Tag>
                    <Text style={{marginLeft: 10}}>可点击</Text>
                </View>
                <WhiteSpace/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
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
                        size="large"
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
                        size="large"
                        readonly={false}
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 8,
                        }}
                    >
                        模版三
                    </Tag>
                </View>
                <WhiteSpace/>
                <Tag
                    fill
                    color="#FFF3EC"
                    textColor="#FD7622"
                >
                    请更换电池
                </Tag>
                <WhiteSpace/>
                <Tag
                    fill
                    color="#E7F7FF"
                    textColor="#24A8E8"
                >
                    已报障，等待维修
                </Tag>
                <WhiteSpace/>
                <Tag
                    color="#666"
                    activeColor="#24A8E8"
                    textStyle={{fontSize: 16}}
                    readonly={false}
                >
                    16的字体
                </Tag>
                <WhiteSpace/>
            </WingBlank>
        )
    }
}`
    }
}
