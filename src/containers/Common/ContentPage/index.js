import React, {Component} from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import {Content, ContentBlock} from '../../../components/'
import {Table} from 'antd'
import {Toast} from 'yh-cedar-ui'
import {copy} from '../../../utils/'
import './index.less'

export default class ContentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            codeExpand: true
        }

        this.apiColumns = [{
            title: '属性',
            dataIndex: 'property',
            key: 'property'
        }, {
            title: '说明',
            dataIndex: 'describe',
            key: 'describe'
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type'
        }, {
            title: '默认值',
            dataIndex: 'default',
            key: 'default'
        }]

        this.apiDataSource = []
    }

    renderCodeReview() {
        return <ContentBlock title='组件展示'>
            <div className="yhf-code-view">
                {this.renderCodeReviewContent()}
            </div>
        </ContentBlock>
    }

    copyCode() {
        const result = copy()
        if (result) {
            Toast.success('复制成功')
        } else {
            Toast.fail('复制失败')
        }
    }

    renderCode() {
        return <ContentBlock title='代码展示'>
            <div className='yhf-view'>
                <div className='content-copy' onClick={this.copyCode}>复制代码</div>
                <SyntaxHighlighter id='code-view' language='jsx' style={prism} customStyle={{width: '100%', margin: 0}}>
                    {this.renderCodeContent()}
                </SyntaxHighlighter>
            </div>
        </ContentBlock>
    }

    renderApi() {
        return <ContentBlock
            title='API'
        >
            <Table pagination={false} columns={this.apiColumns} dataSource={this.apiDataSource} />
        </ContentBlock>
    }

    renderCodeReviewContent() {
        return null
    }

    renderCodeContent() {
        return null
    }

    render() {
        return <Content
            title={this.title}
            describe={this.describe}
        >
            {this.renderCodeReview()}
            {this.renderCode()}
            {this.renderApi()}
        </Content>
    }
}
