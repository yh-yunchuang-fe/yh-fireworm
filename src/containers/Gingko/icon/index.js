import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class IconComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'icon 图标'
        this.describe = '图标的显示'
        this.apiDataSource = [{
            property: 'name',
            describe: '特定的icon的样式名称',
            type: 'string',
            default: ''
        },{
            property: 'style',
            describe: '传入的样式',
            type: '{}',
            default: ''
        },{
            property: 'size',
            describe: '字体的大小',
            type: 'number',
            default: '16'
        },{
            property: 'color',
            describe: '字体颜色',
            type: 'string',
            default: '#333'
        }]
    }

    renderCodeReviewContent() {
        return <div style={{display: 'flex',  justifyContent: 'space-around'}}>
            <img className='yh-mobile-container' alt='icon展示' src={require('../../../assets/gingko/icon1.png')} />
            <img className='yh-mobile-container' alt='icon展示' src={require('../../../assets/gingko/icon2.png')} />
            <img className='yh-mobile-container' alt='icon展示' src={require('../../../assets/gingko/icon2.png')} />
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Icon, Grid } from 'gingko'

const list = [
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'back-home',
    'back',
    'camera',
    'close-circle',
    'eye-off',
    'more',
    'unchecked',
    'scan',
    'search',
    'checked',
    'radio-on',
    'radio-off',
    'eye',
    'alert',
    'flash-circle',
    'checkmark',
    'chevron-left-circle',
    'chevron-right-circle',
    'trashcan',
    'close',
    'chevron-down-circle',
    'edit',
    'arrow-down',
    'light-off',
    'light-on',
    'arrow-up',
    'minus',
    'order',
    'plus',
    'remark-active',
    'remark',
    'triangle-down',
    'triangle-up',
    'chevron-up-circle',
    'close-circle-o',
    'user-check',
    'edit-plus',
    'bell',
    'clock-circle-o',
    'store',
];
export default class IconDemo extends Component {
    render() {
        const data = list.map((item)=>{
            return {
                icon: (<Icon name={item} size="md"/>),
                text: item
            }
        });
        return (
            <ScrollView style={{flex: 1}}>
                <Grid
                    data={data}
                />
            </ScrollView>
        )
    }
}`
    }
}