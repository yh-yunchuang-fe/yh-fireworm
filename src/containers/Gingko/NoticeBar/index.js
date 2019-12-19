/*
 * @Date: 2019-12-11 16:53:58
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-11 17:15:11
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/noticeBar.png'
export default class NoticeBarComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'NoticeBar 通知栏'
        this.describe = '一般用于显示通知'

        this.apiDataSource = [{
            property: 'color',
            describe: '字体颜色',
            type: 'string',
            default: '#666'
        }, {
            property: 'mode',
            describe: '模式("" | "link" | "closeable")',
            type: 'string',
            default: ''
        }, {
            property: 'icon',
            describe: '通知栏图标',
            type: 'string',
            default: ''
        }, {
            property: 'bgColor',
            describe: '通知栏背景颜色',
            type: 'string',
            default: '#FFF5CC'
        }, {
            property: 'action',
            describe: '通知栏右侧显示内容',
            type: 'string | ReactElement',
            default: ''
        }, {
            property: 'onClick',
            describe: '点击事件',
            type: 'Function',
            default: '() => {}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='导航栏' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { WhiteSpace, NoticeBar} from '../../../components/index';

export default class NoticeBarDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <NoticeBar
                    mode="link"
                    color="#FD7622"
                    action={<Text style={{fontSize: 14, color: '#333'}}>去设置</Text>}
                    onClick={()=>{ this.props.navigation.goBack() }}
                >
                    请允许“永辉管家”使用手机定位
                </NoticeBar>
                <WhiteSpace/>
                <NoticeBar
                    icon="alert"
                    mode="closeable"
                    onClick={()=>{ console.log('close') }}
                >
                    请扫描订单小票的二维码，可快速操作
                </NoticeBar>
                <WhiteSpace/>
                <NoticeBar
                    mode="link"
                    icon="alert"
                    onClick={()=>{ this.props.navigation.goBack() }}
                >
                    请扫描订单小票的二维码，可快速操作
                </NoticeBar>
                <WhiteSpace/>
                <NoticeBar
                    icon="alert"
                >
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8}}>
                            此单共3架无人机，3架待接航
                        </Text>
                        <Text style={{fontSize: 14, color: '#666', marginBottom: 8}}>扫码无人机上的二维码即可接航</Text>
                        <Text style={{fontSize: 14, color: '#666'}}>扫码无人机上的二维码即可接航</Text>
                    </View>
                </NoticeBar>
            </View>
        )
    }
}`
    }
}
