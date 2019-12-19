import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/result.png'
export default class ResultComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Result 结果页'
        this.describe = '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。'
        this.apiDataSource = [{
            property: 'img',
            describe: 'Result返回的图片',
            type: '',
            default: '<Icon name="alert" size={40}/>'
        }, {
            property: 'message',
            describe: 'Result返回的文字',
            type: 'string',
            default: '暂无数据'
        }, {
            property: 'title',
            describe: '标题',
            type: 'string',
            default: ''
        }, {
            property: 'style',
            describe: '样式',
            type: 'object',
            default: ''
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='结果页' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View } from 'react-native'
import { WhiteSpace, Icon, Result } from 'gingko'

export default class ResultDemo extends Component {
    render() {
        return (
            <View>
                <WhiteSpace/>
                <Result/>
                <WhiteSpace/>
                <Result
                    img={<Icon name="checkmark" size={40}/>}
                    message="还没有订单记录哦"
                />
                <Result
                    img={<Icon name="checkmark" size={30}/>}
                    title="搜索结果"
                    message="还没有订单记录哦"
                />
            </View>
        )
    }
}`
    }
}
