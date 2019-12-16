import React from 'react'
import ContentPage from '../../Common/ContentPage/'

export default class ResultComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Badge 角标'
        this.describe = '一般用于标注任务数量'
        this.apiDataSource = [{
            property: 'text',
            describe: '角标的内容',
            type: 'number|string',
            default: ''
        }, {
            property: 'style',
            describe: '容器的行内样式',
            type: 'Obejct',
            default: '{}'
        }, {
            property: 'dot',
            describe: '是否把角标设置为圆点',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'image',
            describe: '角标额外的图片',
            type: 'boolean',
            default: 'false'
        }, {
            property: 'source',
            describe: '角标额外图片的地址',
            type: 'string',
            default: ''
        }, {
            property: 'overflowCount',
            describe: '溢出值，比如100，会显示99+',
            type: 'number',
            default: 99
        }, {
            property: 'bgColor',
            describe: '容器的背景颜色',
            type: 'Color',
            default: '#ff0000'
        }, {
            property: 'color',
            describe: '角标文字颜色',
            type: 'Color',
            default: '#fff'
        }, {
            property: 'cornerContent',
            describe: '自定义角标元素',
            type: 'ReactElement',
            default: 'null'
        }, {
            property: 'badgeStyle',
            describe: '角标包裹样式',
            type: 'StyleObjet',
            default: '{}'
        }, {
            property: 'badgeTextStyle',
            describe: '角标内部文字样式',
            type: 'StyleObjet',
            default: '{}'
        }, {
            property: 'imageBadgeStyle',
            describe: '角标内部图片样式',
            type: 'StyleObjet',
            default: '{}'
        }, {
            property: 'top',
            describe: '角标垂直方向偏移',
            type: 'number',
            default: '-10'
        }, {
            property: 'right',
            describe: '角标水平方向偏移',
            type: 'number',
            default: '-10'
        }]
    }

    renderCodeReviewContent() {
        return <img className='yh-mobile-container' alt='角标' src={require('../../../assets/gingko/badge.png')} />
    }

    renderCodeContent() {
        return `import React, { Component } from "react";
import { Text, View} from "react-native";
import { Badge, WhiteSpace } from "gingko";
        
export default class extends Component {
    render() {
        return (
            <View style={{padding: 20}}>
                <Badge dot>
                    <Text>有图片</Text>
                </Badge>
                <WhiteSpace />
                <Badge text={3}>
                    <View style={{width: 50, height: 50, backgroundColor: "#666"}}/>
                </Badge>
                <WhiteSpace />
                <Badge text={30} overflowCount={10} style={{marginTop: 20}}>
                    <View style={{width: 50, height: 50, backgroundColor: "#666"}}/>
                </Badge>
                <WhiteSpace />
                <Badge
                    style={{marginTop: 20}}
                    cornerContent={
                        <View style={{
                            width: 15,
                            height: 15,
                            backgroundColor: "red",
                            borderTopLeftRadius: 2,
                            borderBottomRightRadius: 5,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{color: "#fff", fontSize: 10}}>促</Text>
                        </View>
                    }
                >
                    <View style={{width: 50, height: 50, backgroundColor: "#666", borderRadius: 2}}/>
                </Badge>
                <WhiteSpace />
                <Badge text={3} badgeStyle={{width: 30, height: 30, backgroundColor: "green"}}>
                    <View style={{width: 50, height: 50, backgroundColor: "#666"}}/>
                </Badge>
                <WhiteSpace />
                <Badge text={3000} top={10} badgeStyle={{height: 30, backgroundColor: "green"}}>
                    <View style={{width: 50, height: 50, backgroundColor: "#666"}}/>
                </Badge>
                <WhiteSpace />
                <Badge 
                    text={3} 
                    image={true}
                    source={require("../../../src/assets/imgs/loading-blue.png")}
                    imageBadgeStyle={{width: 30, height: 30}}
                >
                    <View style={{width: 50, height: 50, backgroundColor: "#666"}}/>
                </Badge>
            </View>
        );
    }
}`
    }
}
