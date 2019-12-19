/*
 * @Date: 2019-12-11 17:16:41
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-11 17:30:23
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/optionTag.gif'
export default class OptionTagComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Option 选项标签'
        this.describe = '用于多个项目的选择和展示'
        this.apiDataSource = [{
            property: 'width',
            describe: '选项标签宽度',
            type: 'number',
            default: ''
        }, {
            property: 'height',
            describe: '选项标签高度',
            type: 'number',
            default: ''
        }, {
            property: 'style',
            describe: '选项标签自定义样式',
            type: 'Object',
            default: 'null'
        }, {
            property: 'textStyle',
            describe: '选项标签文本自定义样式',
            type: 'Object',
            default: 'null'
        }, {
            property: 'disabled',
            describe: '是否不可点击',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'multiple',
            describe: '是否多选',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'selected',
            describe: '是否选中',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onChange',
            describe: '选项变化回调函数',
            type: 'Function',
            default: '(selected) => {}'
        }, {
            property: 'renderText',
            describe: '自定义显示文本',
            type: 'Function',
            default: '(selected) => {}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='导航栏' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    WhiteSpace,
    WingBlank,
    OptionTag
} from "../../../components";

export default class OptionTagDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsIndex: 0
        }
    }

    render() {
        const { optionsIndex } = this.state;
        const options = ['水果二配', '蔬菜二配', '安徽'];

        const optionsNode = options.map((item, index)=>{
            return (
                <OptionTag
                    key={index}
                    selected={index === optionsIndex}
                    onChange={(selected)=>{
                        if (selected) {
                            this.setState({
                                optionsIndex: index
                            })
                        }
                    }}
                >{item}</OptionTag>
            )
        });

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        {optionsNode}
                    </View>
                    <WhiteSpace/>
                    <OptionTag disabled>不可点击</OptionTag>
                    <WhiteSpace/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <OptionTag multiple>多选1</OptionTag>
                        <OptionTag multiple>多选2</OptionTag>
                        <OptionTag multiple>多选3</OptionTag>
                    </View>
                    <WhiteSpace/>
                    <Text>自定义Text内容</Text>
                    <View>
                        <OptionTag style={{marginTop: 10}} width={315}
                            renderText={(selected)=>{
                                return (
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{
                                            width: 58,
                                            marginRight: 15,
                                            textAlign: 'right',
                                            color: selected ? '#049CDB' : '#666'
                                        }}>我是</Text>
                                        <Text style={{color: selected ? '#049CDB' : '#666'}}>从多到少</Text>
                                    </View>
                                )
                            }}
                        />
                        <OptionTag style={{marginTop: 10}} width={315}
                                    renderText={(selected)=>{
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{
                                                    width: 58,
                                                    marginRight: 15,
                                                    textAlign: 'right',
                                                    color: selected ? '#049CDB' : '#666'
                                                }}>建议补货</Text>
                                                <Text style={{color: selected ? '#049CDB' : '#666'}}>从多到少</Text>
                                            </View>
                                        )
                                    }}
                        />
                    </View>
                </WingBlank>
            </View>
        )
    }
}`
    }
}
