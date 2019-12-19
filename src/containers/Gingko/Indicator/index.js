import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/indicator.gif'
export default class CardComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Indicator 指示器'
        this.describe = '用于给用户特定提示'
        this.apiDataSource = [{
            property: 'size',
            describe: '样式的大小',
            type: 'string',
            default: 'md'
        },{
            property: 'color',
            describe: '指示器的颜色',
            type: 'string',
            default: 'blue'
        },{
            property: 'style',
            describe: '指示器附加的样式',
            type: 'object',
            default: '{}'
        },{
            property: 'textStyle',
            describe: '指示器文字样式',
            type: 'object',
            default: '{}'
        },{
            property: 'text',
            describe: '指示器的文字',
            type: 'string',
            default: ''
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='指示器' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, Button, Indicator, WingBlank, WhiteSpace } from 'gingko'

export default class IndicatorDemo extends Component {

    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <Indicator size="sm"/>
                <WhiteSpace/>
                <Indicator/>
                <WhiteSpace/>
                <Indicator size="lg"/>
                <WhiteSpace/>
                <Indicator size="xl"/>
                <WhiteSpace/>
                <Indicator text="Loading..."/>
                <WhiteSpace/>
                <WhiteSpace/>
                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#000',
                    opacity: 0.8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4
                }}>
                    <Indicator size="lg" color="white" text="加载中"
                               style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                               textStyle={{fontSize: 14, color: '#fff', marginTop: 8, marginLeft: 0}}
                    />
                </View>

            </WingBlank>
        )
    }
}`
    }
}