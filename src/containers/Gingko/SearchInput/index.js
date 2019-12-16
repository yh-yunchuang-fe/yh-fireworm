import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class SearchInputComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'WingBlank 标签栏'
        this.describe = '方便用户在不同功能模块之间进行快速切换'
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
            property: 'onClear',
            describe: '清空输入框',
            type: 'function',
            default: '(){}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='搜索框' src={require('../../../assets/gingko/searchInput.gif')} />
    }

    renderCodeContent() {
        return `import React, {Component} from 'react'
import { View, Text, Slider } from 'react-native'
import { WingBlank, WhiteSpace, SearchInput } from 'gingko'

export default class SearchInputDemo extends Component {
    state = {
        value: 0.1
    }

    changeValue = (value) => {
        this.setState(() => {
            return {
                value
            }
        })
    }

    render() {
        const {value} = this.state
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <SearchInput
                        placeholder="输入商品名称、条码或编号"
                        onSubmit={(value) => {
                            console.log('onSubmit value:', value)
                        }}
                        onChange={(value) => {
                            console.log('onChange value:', value)
                        }}
                        onFocus={() => {
                            console.log('onFocus')
                        }}
                        onBlur={() => {
                            console.log('onBlur')
                        }}
                        onClear={() => {
                            console.log('onClear')
                        }}
                    />
                    <WhiteSpace/>
                    <SearchInput
                        placeholder="输入商品名称、条码或编号"
                        defaultValue="autoFocus"
                        autoFocus={true}
                        onSubmit={(value) => {
                            console.log('onSubmit value:', value)
                        }}
                        onChange={(value) => {
                            console.log('onChange value:', value)
                        }}
                        onFocus={() => {
                            console.log('onFocus')
                        }}
                        onBlur={() => {
                            console.log('onBlur')
                        }}
                        onClear={() => {
                            console.log('onClear')
                        }}
                    />
                    <WhiteSpace/>
                    <Slider value={value} onValueChange={this.changeValue}/>
                    <SearchInput
                        value={value.toString()}
                        placeholder="value props"
                        onSubmit={(value) => {
                            console.log('onSubmit value:', value)
                        }}
                        onChange={(value) => {
                            console.log('onChange value:', value)
                        }}
                        onFocus={() => {
                            console.log('onFocus')
                        }}
                        onBlur={() => {
                            console.log('onBlur')
                        }}
                        onClear={() => {
                            console.log('onClear')
                        }}
                    />
                    <WhiteSpace/>
                    <SearchInput
                        placeholder="value测试"
                        value="value值"
                    />
                </WingBlank>
            </View>
        )
    }
}`
    }
}
