import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class SearchBarComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'SearchBar 搜索栏'
        this.describe = '搜索栏'
        this.apiDataSource = [{
            property: 'defaultValue',
            describe: '默认值',
            type: 'string',
            default: ''
        }, {
            property: 'placeholder',
            describe: '输入框提示文案',
            type: 'string',
            default: 'Search'
        }, {
            property: 'showCancel',
            describe: '是否显示取消按钮',
            type: 'boolean',
            default: 'true'
        }, {
            property: 'cancelText',
            describe: '取消文案',
            type: 'string',
            default: '取消'
        }, {
            property: 'cancelColor',
            describe: '‘取消’字体颜色',
            type: 'string',
            default: '#ddd'
        }, {
            property: 'autoFocus',
            describe: '是否获得焦点',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'onSubmit',
            describe: '提交',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onChange',
            describe: '输入',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onFocus',
            describe: '输入框获得焦点',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onBlur',
            describe: '输入框失去焦点',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onCancel',
            describe: '取消输入',
            type: 'function',
            default: '(){}'
        }, {
            property: 'onClear',
            describe: '清空输入框',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='搜索栏' src={require('../../../assets/gingko/searchBar.gif')} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, Slider } from 'react-native'
import { WingBlank, WhiteSpace, SearchBar } from 'gingko'

export default class SearchBarDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            value2: 0
        }
    }

    changeValue = (value) => {
        this.setState({
            value2: value
        })
    }

    render() {
        return (
            <View style={{backgroundColor: '#f8f8f8'}}>
                <SearchBar
                    placeholder="输入商品名称、条码或编号"
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{
                        this.setState({ value })
                    }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={()=>{ console.log('onCancel') }}
                    onClear={()=>{ console.log('onClear') }}
                />
                <WhiteSpace/>
                <SearchBar
                    placeholder="输入商品名称、条码或编号"
                    defaultValue="autoFocus"
                    autoFocus={true}
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={()=>{ console.log('onCancel') }}
                    onClear={()=>{ console.log('onClear') }}
                />
                <WhiteSpace/>
                <Slider value={this.state.value2} onValueChange={this.changeValue}/>
                <SearchBar
                    value={this.state.value2.toString()}
                    placeholder="value props"
                />
            </View>
        )
    }
}`
    }
}
