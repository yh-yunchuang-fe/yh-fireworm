import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import './index.less'
import imgUrl from '../../../assets/cedar/swipeAction.gif'
export default class SwipeActionComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'SwipeAction 滑动操作'
        this.describe = '方便用户在不同功能模块之间进行快速切换'
        this.apiDataSource = [{
            property: 'prefixCls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-swipe'
        }, {
            property: 'left',
            describe: '显示方向和滑动方向',
            type: 'array',
            default: '[]'
        }, {
            property: 'right',
            describe: '显示方向和滑动方向',
            type: 'array',
            default: '[]'
        }, {
            property: 'autoClose',
            describe: '是否关闭',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onOpen',
            describe: '打开',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onClose',
            describe: '关闭',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='滑动操作' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { SwipeAction } from 'yh-cedar-ui'
import './index.less'

export default class SwipeActionDemo extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="swipe-container">
                <SwipeAction
                    onOpen={()=>{ console.log('onOpen') }}
                    onClose={()=>{ console.log('onClose') }}
                    right={[{
                        text: '删除',
                        style: {backgroundColor: 'red', color: '#fff'}
                    }]}>
                    <div className="item">打开右边</div>
                </SwipeAction>
                <SwipeAction
                    onOpen={()=>{ console.log('onOpen') }}
                    onClose={()=>{ console.log('onClose') }}
                    left={[{
                        text: '删除',
                        style: {backgroundColor: 'red', color: '#fff'}
                    }]}>
                    <div className="item">打开左边</div>
                </SwipeAction>
                <SwipeAction
                    autoClose={true}
                    left={[{
                        text: '关注'
                    }]}
                    right={[{
                        text: '取消',
                        style: {backgroundColor: '#333', color: '#fff'},
                        onPress: ()=>{ console.log('取消') }
                    },{
                        text: '删除',
                        style: {backgroundColor: 'red', color: '#fff'},
                        onPress: ()=>{ console.log('删除') }
                    }]}>
                    <div className="item">左右打开</div>
                </SwipeAction>
            </div>
        )
    }
}
`
    }
}
