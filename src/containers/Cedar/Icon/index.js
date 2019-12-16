/*
 * @Date: 2019-12-10 16:07:29
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-12-11 16:54:25
 */
import React from 'react'
import ContentPage from '../../Common/ContentPage'
import {Icon} from 'yh-cedar-ui'
import './index.less'

const iconMap = [
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'back-home',
    'back',
    'camera',
    'close-circle',
    'eye-off',
    'more',
    'unchecked',
    'scan',
    'search',
    'checked',
    'radio-on',
    'radio-off',
    'eye',
    'alert',
    'flash-circle',
    'checkmark',
    'chevron-left-circle',
    'chevron-right-circle',
    'trashcan',
    'close',
    'chevron-down-circle',
    'edit',
    'arrow-down',
    'light-off',
    'light-on',
    'arrow-up',
    'minus',
    'order',
    'plus',
    'remark-active',
    'remark',
    'triangle-down',
    'triangle-up',
    'chevron-up-circle',
    'close-circle-o',
    'user-check',
    'edit-plus',
    'bell',
    'clock-circle-o'
]

export default class IconComponent extends ContentPage {
    constructor(props) {
        super(props)

        this.title = 'Icon 图标'
        this.describe = ''
        this.apiDataSource = [{
            property: 'name',
            describe: '图标名称',
            type: 'string',
            require: ''
        }, {
            property: 'size',
            describe: '图标的大小( xxs | xs | sm | md | lg )',
            type: 'string',
            default: 'sm'
        }, {
            property: 'color',
            describe: '图标的颜色',
            type: 'string',
            default: '#333'
        }, {
            property: 'style',
            describe: '图标的样式',
            type: 'object',
            default: null
        }, {
            property: 'className',
            describe: '图标的类名',
            type: 'string',
            default: ''
        }]
    }

    handleClick = (idx) => {
        const name = iconMap[idx]
        if (name) {
            const el = document.querySelectorAll('.copy')[idx]
            el.focus()
            el.setSelectionRange(0, el.value.length)
            document.execCommand('copy', true)
            window.alert('复制成功')
        }
    }

    renderIcons = () => {
        return iconMap.map((name, idx) => {
            return (
                <div className="item" key={idx} onClick={this.handleClick.bind(this, idx)}>
                    <Icon name={name} />
                    <span className="name">{name}</span>
                    <input defaultValue={name} className="copy" />
                </div>
            )
        })
    }

    renderCodeReviewContent() {
        return (
            <div className="icon-container">
                {this.renderIcons()}
            </div>
        )
    }

    renderCodeContent() {
        return `import React, { Component } from 'react';
import { Icon } from 'yh-cedar-ui';
import './index.less';

const iconMap = [
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'back-home',
    'back',
    'camera',
    'close-circle',
    'eye-off',
    'more',
    'unchecked',
    'scan',
    'search',
    'checked',
    'radio-on',
    'radio-off',
    'eye',
    'alert',
    'flash-circle',
    'checkmark',
    'chevron-left-circle',
    'chevron-right-circle',
    'trashcan',
    'close',
    'chevron-down-circle',
    'edit',
    'arrow-down',
    'light-off',
    'light-on',
    'arrow-up',
    'minus',
    'order',
    'plus',
    'remark-active',
    'remark',
    'triangle-down',
    'triangle-up',
    'chevron-up-circle',
    'close-circle-o',
    'user-check',
    'edit-plus',
    'bell',
    'clock-circle-o'
];

export default class IconDemo extends Component {
    handleClick = (idx) => {
        const name = iconMap[idx];
        if (name) {
            const el = document.querySelectorAll('.copy')[idx];
            el.focus();
            el.setSelectionRange(0, el.value.length);
            document.execCommand('copy', true);
            window.alert('复制成功');
        }
    };

    renderIcons = () => {
        return iconMap.map((name, idx) => {
            return (
                <div className="item" key={idx} onClick={this.handleClick.bind(this, idx)}>
                    <Icon name={name} />
                    <span className="name">{name}</span>
                    <input defaultValue={name} className="copy" />
                </div>
            );
        });
    };

    render() {
        return (
            <div className="icon-container">
                {this.renderIcons()}
            </div>
        );
    }
}`
    }
}
