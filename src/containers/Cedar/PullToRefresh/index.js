import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import { PullToRefresh } from 'yh-cedar-ui'
import { BASIC_TYPE_STRING, BASIC_TYPE_NUMBER, BASIC_TYPE_OBJECT, BASIC_TYPE_REACTNODE, BASIC_TYPE_BOOL, BASIC_TYPE_FUN } from '../../../config/type.config'

export default class PullToRefreshComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'PullToRefresh 下拉刷新'
        this.describe = '用于移动端的下拉刷新'
        this.state = {
            refreshing: true,
            loading: false,
            hasMore: true,
            page: 0,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        }
        this.apiDataSource = [{
            property: 'prefixCls',
            describe: '组件的css前缀',
            type: BASIC_TYPE_STRING,
            default: 'yh-pull-refresh'
        },{
            property: 'height',
            describe: '头部的高度',
            type: BASIC_TYPE_STRING,
            default: ''
        }, {
            property: 'className',
            describe: '组件额外的类名',
            type: BASIC_TYPE_STRING,
            default: ''
        }, {
            property: 'downRefreshText',
            describe: '下拉显示的文本',
            type: BASIC_TYPE_STRING,
            default: '下拉刷新'
        },{
            property: 'refershText',
            describe: '加载页面的文本',
            type: BASIC_TYPE_STRING,
            default: '加载中'
        },{
            property: 'upRefreshText',
            describe: '更新完成的文本',
            type: BASIC_TYPE_STRING,
            default: '释放更新'
        },{
            property: 'distanceLoadMore',
            describe: '上拉加载触发的距离的倍数',
            type: BASIC_TYPE_NUMBER,
            default: '0.5'
        },{
            property: 'pullRate',
            describe: '下拉刷新滑动距离的倍率触发释放刷新',
            type: BASIC_TYPE_NUMBER,
            default: '0.4'
        },{
            property: 'duration',
            describe: '动画持续的时间',
            type: BASIC_TYPE_NUMBER,
            default: '800'
        },{
            property: 'loading',
            describe: '是否加载',
            type: BASIC_TYPE_BOOL,
            default: 'false'
        },{
            property: 'style',
            describe: '添加样式',
            type: BASIC_TYPE_OBJECT,
            default: 'null'
        },{
            property: 'footer',
            describe: '底部的样式',
            type: BASIC_TYPE_REACTNODE,
            default: 'null'
        },{
            property: 'footerLoading',
            describe: '加载的样式',
            type: BASIC_TYPE_REACTNODE,
            default: 'null'
        },{
            property: 'refershControl',
            describe: '下拉刷新的样式',
            type: BASIC_TYPE_REACTNODE,
            default: 'null'
        },{
            property: 'loading',
            describe: '是否在加载中',
            type: BASIC_TYPE_BOOL,
            default: 'false'
        },{
            property: 'hasMore',
            describe: '上拉加载是否有更多数据',
            type: BASIC_TYPE_BOOL,
            default: 'true'
        },{
            property: 'refreshing',
            describe: '是否刷新',
            type: BASIC_TYPE_BOOL,
            default: 'false'
        },{
            property: 'onRefresh',
            describe: '下拉刷新触发的函数',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'onLoadMore',
            describe: '上拉加载触发的函数',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        },{
            property: 'getComponentRef',
            describe: '获取真实的dom',
            type: BASIC_TYPE_FUN,
            default: '() => {}'
        }]}
    componentDidMount() {
        this.setState({ refreshing: true })

        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 1000)
    }

    onLoadMore() {
        const { page, data } = this.state

        if (page >= 1) { return }

        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                page: 1,
                data: [...data, ...[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]]
            })
        }, 2000)
    }

    onRefresh() {

        this.setState({
            refreshing: true
        })
        setTimeout(() => {
            this.setState({
                refreshing: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            })

        }, 2000)
    }
    renderCodeReviewContent() {
        const {
            refreshing,
            hasMore,
            loading,
            data
        } = this.state

        return <div style={{ width: 450, backgroundColor: '#F3F4F6' }}>
            <PullToRefresh
                refresh={true}
                refreshing={refreshing}
                loading={loading}
                hasMore={hasMore}
                onLoadMore={this.onLoadMore.bind(this)}
                onRefresh={this.onRefresh.bind(this)}
            >
                <div>
                    {data.map(item => <p key={item} style={{ height: '50px', fontSize: 14, textAlign: 'center' }}>{item}</p>)}
                </div>
            </PullToRefresh>
        </div>
    }

    renderCodeContent() {
        return `import React from 'react'
import { PullToRefresh } from 'yh-cedar-ui'

export default class PullToRefreshDemo extends Component{
    constructor(props) {
        super(props)

        this.state = {
            refreshing: true,
            loading: false,
            hasMore: true,
            page: 0,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        }
        
    }

    componentDidMount() {
        this.setState({refreshing: true})

        setTimeout(() => {
            this.setState({refreshing: false})
        }, 1000)
    }

    onLoadMore() {
        const {page, data} = this.state

        if(page >= 1) {return}

        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                page: 1,
                data: [...data, ...[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]]
            })
        }, 2000)
    }

    onRefresh() {

        this.setState({
            refreshing: true
        })
        setTimeout(() => {
            this.setState({
                refreshing: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            })

        }, 2000)
    }
    render() {
        const {
            refreshing,
            hasMore,
            loading,
            data
        } = this.state
        
        return <div>
            <PullToRefresh
                refresh={true}
                refreshing={refreshing}
                loading={loading}
                hasMore={hasMore}
                onLoadMore={this.onLoadMore.bind(this)}
                onRefresh={this.onRefresh.bind(this)}
            >
                <div>
                    {data.map(item => <p key={item} style={{ height: '50px', fontSize: 14, textAlign: 'center'}}>{item}</p>)}
                </div>
            </PullToRefresh>
        </div>
    }
}`
    }
}