import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { Rate } from 'yh-cedar-ui'

export default class RateComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Rate 百分比'
        this.describe = '方便用户在不同功能模块之间进行快速切换'
        this.apiDataSource = [{
            property: 'rates',
            describe: '组件的css前缀',
            type: 'function',
            default: '() {' +
                'const {count = 5, value} = this.props' +
                'let rates = []' +
                'for(let i = 0; i < count; i++) {' +
                    'rates.push({' +
                        'key: `rate` + i,' +
                        'selected: i < Number(value) ? true : false' +
                    '})' +
                '}' +
                'return rates' +
            '}'
        }, {
            property: 'beginClear',
            describe: '',
            type: 'boolean',
            default: 'false'
        }]
    }

    renderCodeReviewContent() {
        return <div>
            <Rate count={5} onChange={()=>{}} />
            <Rate count={5} allowClear onChange={()=>{}} />
            <Rate count={5} value={3} />
            <Rate count={5} value={1} disabled />
        </div>
    }

    renderCodeContent() {
        return `import React, {Component} from 'react'
import {Rate} from 'yh-cedar-ui'

export default class RateDemo extends Component {
    onChange(rate) {
        console.log(rate)
    }

    onCChange(rate) {
        console.log(rate)
    }

    render() {
        return <div>
            <Rate count={5} onChange={this.onChange.bind(this)} />
            <Rate count={5} allowClear onChange={this.onCChange.bind(this)}  />
            <Rate count={5} value={3} />
            <Rate count={5} value={1} disabled />
        </div>
    }
}`
    }
}

