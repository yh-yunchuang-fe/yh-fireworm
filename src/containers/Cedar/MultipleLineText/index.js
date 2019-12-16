import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {MultipleLineText} from 'yh-cedar-ui'
import { BASIC_TYPE_STRING, BASIC_TYPE_NUMBER, BASIC_TYPE_OBJECT } from '../../../config/type.config'

export default class MultipleLineTextComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'MultipleLineText 字段省略'
        this.describe = '文本段落的显示与隐藏'
        this.apiDataSource = [{
            property: 'textLine',
            describe: '段落开始显示的行',
            type: BASIC_TYPE_NUMBER,
            default: '2'
        },{
            property: 'className',
            describe: '组件css的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'style',
            describe: '添加css的样式',
            type: BASIC_TYPE_OBJECT,
            default: 'null'
        },{
            property: 'ellipsiClassName',
            describe: '省略号css的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        },{
            property: 'ellipsisStyle',
            describe: '添加省略号的样式',
            type: BASIC_TYPE_OBJECT,
            default: 'null'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <MultipleLineText 
            >
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
            </MultipleLineText>
        </div>
    }

    renderCodeContent() {
        return `import React from 'react'
import {MultipleLineText} from 'yh-cedar-ui'

export default class MultipleLineTextDemo extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div>
            <MultipleLineText   
            >
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
                从商品中心调取组合码商品份数和组合码单位接口如果组合码没有配置单位，单位默认显示份。
            </MultipleLineText>
        </div>
    }
}`
    }
}