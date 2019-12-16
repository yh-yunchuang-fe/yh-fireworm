import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { SearchBar } from 'yh-cedar-ui'

export default class SearchBarComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'SearchBar 搜索栏'
        this.describe = '一般可位于 NavBar 下方'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-search'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'fixed',
            describe: '固定',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'placeholder',
            describe: 'placeholder',
            type: 'string',
            default: 'Search'
        }, {
            property: 'autoFocus',
            describe: '是否获取焦点',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'showCancel',
            describe: '是否可以取消',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'cancelText',
            describe: '取消文字',
            type: 'string',
            default: '取消'
        }, {
            property: 'cancelColor',
            describe: '取消颜色',
            type: 'string',
            default: ''
        }, {
            property: 'defaultValue',
            describe: '默认值',
            type: 'string',
            default: ''
        }, {
            property: 'onSubmit',
            describe: '提交',
            type: 'function',
            default: '(){}'
        },{
            property: 'onChange',
            describe: '输入',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onFocus',
            describe: '获取焦点',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onBlur',
            describe: '失去焦点',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onCancel',
            describe: '取消',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onClear',
            describe: '清空',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <SearchBar
                onSubmit={()=>{ console.log('onSubmit') }}
                onChange={(value)=>{ console.log('onChange value:', value) }}
                onFocus={()=>{ console.log('onFocus') }}
                onBlur={()=>{ console.log('onBlur') }}
                onCancel={(value)=>{ console.log('onCancel value:', value) }}
                onClear={()=>{ console.log('onClear') }}/>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { SearchBar } from 'yh-cedar-ui'

export default class SearchDemo extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <SearchBar
                    onSubmit={()=>{ console.log('onSubmit') }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={(value)=>{ console.log('onCancel value:', value) }}
                    onClear={()=>{ console.log('onClear') }}/>
            </div>
        )
    }
}`
    }
}
