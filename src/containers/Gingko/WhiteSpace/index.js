import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class WhiteSpaceComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'WhiteSpace 上下留白'
        this.describe = '布局控件'
        this.apiDataSource = [{
            property: 'size',
            describe: '上下留白的间距，可选xs,sm,md,lg,xl',
            type: 'string',
            default: 'lg'
        }, {
            property: 'style',
            describe: '样式',
            type: 'object',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <div>横向空白条，无demo</div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View } from 'react-native'
import { WhiteSpace } from 'gingko'

export default class extends Component {
    render() {
        return (
            <View>
                <WhiteSpace />
            </View>
        )
    }
}`
    }
}
