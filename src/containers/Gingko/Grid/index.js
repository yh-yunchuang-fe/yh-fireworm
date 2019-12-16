import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class GridComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Grid 宫格'
        this.describe = '一般用于首页展示模块'
        this.apiDataSource = [{
            property: 'hasLine',
            describe: '是否显示表格边框',
            type: 'boolean',
            default: 'true'
        },{
            property: 'columnNum',
            describe: '列的数量',
            type: 'number',
            default: '3'
        },{
            property: 'data',
            describe: '宫格数据数组',
            type: 'array',
            default: '[]'
        },{
            property: 'itemStyle',
            describe: '每个宫格的样式',
            type: 'object',
            default: '{}'
        },{
            property: 'onClick',
            describe: '宫格的点击事件',
            type: 'funtion',
            default: '() => {}'
        },{
            property: 'renderItem',
            describe: '每个宫格的自定义编写',
            type: 'reactNode',
            default: '内部样式'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='宫格' src={require('../../../assets/gingko/grid.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from 'react'
import { View, ScrollView} from 'react-native'
import { Grid, WhiteSpace, Badge } from 'gingko'

export default class GridDemo extends Component{
    render() {
        const iconData = [];
        for(let i = 0; i < 6; i++) {
            iconData.push({
                icon: (
                    <Badge text={i}>
                        <View style={{width: 50, height: 50, backgroundColor: '#888'}}/>
                    </Badge>
                ),
                text: '入口\${i}',
                key: i
            })
        }

        return (
            <ScrollView style={{flex: 1}}>
                <Grid
                    data={iconData}
                />
                <WhiteSpace/>
                <Grid
                    data={iconData}
                    columnNum={4}
                    hasLine={false}
                />
            </ScrollView>
        )
    }
}`
    }
}