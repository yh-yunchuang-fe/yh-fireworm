import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class RadioGroupComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'RadioGroup 单选'
        this.describe = '单选按钮组'
        this.apiDataSource = [{
            property: 'mode',
            describe: '模式',
            type: 'string',
            default: 'button'
        }, {
            property: 'defaultIndex',
            describe: '默认显示',
            type: 'number',
            default: '0'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='单选' src={require('../../../assets/gingko/radioGroup.gif')} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { WingBlank, WhiteSpace, RadioGroup } from 'gingko'

export default class RadioGroupDemo extends Component {
    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <RadioGroup
                    mode="button"
                    radios={['飞行中', '已落地', '已落地', '已落地']}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <RadioGroup
                    mode="button"
                    radios={['飞行中(12)', '已落地(0)']}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <RadioGroup
                    mode="button"
                    radios={['飞行中(12)', '已落地']}
                />
            </WingBlank>
        )
    }
}`
    }
}
