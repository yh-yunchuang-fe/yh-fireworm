import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class BodyComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Body 容器'
        this.describe = '具有默认样式的容器'
        this.apiDataSource = [ {
            property: 'style',
            describe: '容器的行内样式',
            type: 'Obejct',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='容器' src={require('../../../assets/gingko/body.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import { Text } from "react-native"
import { Body } from "gingko"

export default class BodyDemo extends Component {
    state = { }

    render() {
        return (
            <Body>
                <Text>Body</Text>

                <Body style={{paddingHorizontal: 20, paddingVertical: 10}}>
                    <Body style={{backgroundColor:"skyblue"}}>
                            <Text>Body</Text>
                    </Body>
                    <Body style={{backgroundColor:"yellow"}}>
                            <Text>Body</Text>
                    </Body>
                </Body>

                <Body style={{backgroundColor:"#24a8e8"}}>
                    <Text>Body</Text>
                    <Body style={{margin: 20}}>
                        <Text>Body</Text>
                    </Body>
                </Body>
            </Body>
        )
    }
}`
    }
}
