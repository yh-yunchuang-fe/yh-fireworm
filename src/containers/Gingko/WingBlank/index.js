import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class WingBlankComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'WingBlank 两翼留白'
        this.describe = '布局控件'
        this.apiDataSource = [{
            property: 'size',
            describe: '两翼留白的间距，可选sm,md,lg',
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
        return <div>竖向空白条，无demo</div>
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View } from 'react-native'
import { WingBlank } from 'gingko'

export default class extends Component {
    render() {
        return (
            <View>w
                <WingBlank />
            </View>
        )
    }
}`
    }
}
