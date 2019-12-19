import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import imgUrl from '../../../assets/gingko/tabs.gif'
export default class TabsComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Tabs 标签页'
        this.describe = '用于让用户在不同的视图中进行切换。'
        this.apiDataSource = [{
            property: 'tabBarPosition',
            describe: 'tabs的默认位置',
            type: 'string',
            default: 'left'
        }, {
            property: 'initialPage',
            describe: '默认显示第几个tab',
            type: 'number',
            default: '0'
        }, {
            property: 'tabs',
            describe: '渲染tabs的数据',
            type: 'array',
            default: '[]'
        }, {
            property: 'style',
            describe: '样式',
            type: 'object',
            default: '{}'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='标签页' src={imgUrl} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { WhiteSpace, Tabs } from 'gingko'

const DefaultTabBar = Tabs.DefaultTabBar;

export default class TabsDemo extends Component {
    render() {
        const tabs = [
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
        ]
        return (
            <View>
                <WhiteSpace/>
                <Tabs
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                    tabs={tabs}
                >
                    {
                        tabs.map((tab, index)=>{
                            return (
                                <View key={index} style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#999',
                                    flex: 1,
                                }}>
                                    <Text>The content is {tab.title}</Text>
                                </View>
                            )
                        })
                    }
                </Tabs>
                <WhiteSpace/>
                <Tabs
                    style={{
                        height: 250,
                    }}
                    tabBarFillColor="#ddd"
                    tabs={[{ title: '全部分类' },{ title: '食品部' },{ title: '加工部' }]}
                    renderTabBar={(props) =>
                        <DefaultTabBar
                            {...props}
                            renderTab={(tab, isTabActive) => {
                                const sty = isTabActive ? {
                                    color: '#24A8E8',
                                    fontWeight: 'bold',
                                } : {
                                    color: '#666',
                                    fontWeight: 'normal'
                                };
                                return (
                                    <View style={{height: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        {
                                            isTabActive &&
                                            <View style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: 4,
                                                height: '100%',
                                                backgroundColor: '#24A8E8'
                                            }}/>
                                        }
                                        <Text style={sty}>
                                            { tab.title }
                                        </Text>
                                    </View>
                                )
                            }}
                        >
                        </DefaultTabBar>
                    }
                >
                    <View style={{
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                    }}>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                    </View>
                    <ScrollView style={{
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                    }}>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                        <Text>222222</Text>
                    </ScrollView>
                    <View style={{
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                    }}>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                        <Text>111111</Text>
                    </View>
                </Tabs>
            </View>
        )
    }
}`
    }
}
