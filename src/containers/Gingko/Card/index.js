import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class CardComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Card 卡片'
        this.describe = '通用卡片容器'
        this.apiDataSource = [{
            property: 'full',
            describe: '是否需要圆角',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'style',
            describe: '容器样式',
            type: 'Obejct',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='卡片' src={require('../../../assets/gingko/card.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {Icon, Card, WingBlank, WhiteSpace} from "gingko"

export default class ButtonDemo extends Component {
    render() {
        return (
            <View>
                <WingBlank>
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Header>
                            这是title
                        </Card.Header>
                        <Card.Body>
                            <Text>content content</Text>
                        </Card.Body>
                        <Card.Footer>
                            footer
                        </Card.Footer>
                    </Card>
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Body>
                            <View>
                                <Icon name="camera" size="30"/>
                                <Icon name="scan" size="30"/>
                                <Text>This is content</Text>
                            </View>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg"/>
                </WingBlank>

                <Card full>
                    <Card.Header>
                        通栏卡片
                    </Card.Header>
                    <Card.Body>
                        <Text>content content</Text>
                        <WhiteSpace/>
                        <Text>content content</Text>
                        <WhiteSpace/>
                        <Text>content content</Text>
                    </Card.Body>
                    <Card.Footer style={{
                        paddingHorizontal: 0,
                        paddingVertical: 0
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#fafafa",
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row"
                        }}>
                            <Text style={{
                                color: "#24A8E8",
                                fontSize: 15,
                                marginRight: 5
                            }}>
                                展开明细
                            </Text>
                            <Icon name="chevron-down" color="#666" size="xs"/>
                        </TouchableOpacity>
                    </Card.Footer>
                </Card>
            </View>
        )
    }
}`
    }
}
