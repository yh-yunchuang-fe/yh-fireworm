import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import {Badge} from 'yh-cedar-ui'

export default class BadgeComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Badge 角标'
        this.describe = '一般用于标注任务数量'
        this.apiDataSource = [{
            property: 'prefix-Cls',
            describe: '组件的css前缀',
            type: 'string',
            default: 'yh-badge'
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: 'string',
            default: ''
        }, {
            property: 'dot',
            describe: '小圆点',
            type: 'boolean',
            default: false
        }, {
            property: 'text',
            describe: '角标的数值',
            type: 'string | number',
            default: ''
        }, {
            property: 'corner',
            describe: '控制角标的样式是否为横幅样式',
            type: 'boolean',
            default: false
        }, {
            property: 'overflowCount',
            describe: '超过这个数值出+号, text属性必须为number类型',
            type: 'number',
            default: 99
        }, {
            property: 'size',
            describe: '角标大小',
            type: 'small | large',
            default: 'small'
        },]
    }

    renderCodeReviewContent() {
        return <div>
            <Badge dot className="yhf-right-blank"/>
            <Badge dot size="large" className="yhf-right-blank"/>
            <Badge dot className="yhf-right-blank">
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <Badge className="yhf-right-blank" text={30}>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <Badge className="yhf-right-blank" text={100}>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <Badge text={60} corner={true} className="yhf-right-blank">
                <span style={{ width: '40px', height: '40px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { Badge } from 'yh-cedar-ui'

export default class BadgeDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Badge dot className="yhf-right-blank"/>
                <Badge dot size="large" className="yhf-right-blank"/>
                <Badge dot className="yhf-right-blank">
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge className="yhf-right-blank" text={30}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge className="yhf-right-blank" text={100}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge text={60} corner={true} className="yhf-right-blank">
                    <span style={{ width: '40px', height: '40px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </div>
        )
    }
}`
    }
}
