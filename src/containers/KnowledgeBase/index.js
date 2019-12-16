import React, {Component} from 'react'
import {Header} from '../../components/'
import shareJson from '../../file/share.json'
import knowledgeBaseJson from './knowledgeBase.json'
import { Icon, Toast } from 'yh-cedar-ui'
import './index.less'

export default class KnowledgeBase extends Component {

    componentDidMount(){
        document.addEventListener('keydown', this.onKeyDown)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.onKeyDown)
    }

    //  处理数据按字母排序分类。
    sortData(data, field){//data原数据，field数据的拼音键名。
        const letterReg = /^[A-Z]$/
        let list = []
        let letter = ''
        data.map((item) => {
            list['#'] = []  // 添加#分组，用来存放首字母不能转为大写英文的数据
            letter = (item[field]).slice(0, 1).toUpperCase() // 首字母转大写英文
            // 是否大写英文字母
            if (!letterReg.test(letter)) {
                letter = '#'
            }
            // 创建字母分组
            if (!(letter in list)) {
                list[letter] = []
            }
            // 字母分组添加数据
            list[letter].push(item)
        })
        // 转换 格式 进行 排序
        let resault = []
        for (let key in list) {
            resault.push({
                letter: key,
                list: list[key]
            })
        }
        resault.sort((a,b) => {
            return a.letter.charCodeAt(0) - b.letter.charCodeAt(0)
        })
        // # 号分组 放最后
        const lastArr = resault[0]
        resault.splice(0, 1)
        resault.push(lastArr)

        // 转换 数据 格式
        let jsonSort = {}
        resault.map((item) => {
            jsonSort[item.letter] = item.list
        })

        return resault
    }

    // 键盘事件
    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.onClickSearch()
        }

        knowledgeBaseJson.map((item) => {
            const keydown = `Key${item.name}`
            if (keydown === e.code) {
                this.onMouseOver(item.voice)
            }
        })

    }

    // 鼠标事件
    onMouseOver = (voice) => {
        let audio = new Audio(voice)
        audio.play()
    }

    // 点击事件
    onClick = (name) => {
        document.getElementById(name).scrollIntoView()
    }

    // 鼠标事件
    onMouseOver = (voice) => {
        let audio = new Audio(voice)
        audio.play()
    }

    // 输入
    onChangeInput = (e) => {
        console.log('onChangeInput-e', e.target.value)
        this.input.value = e.target.value
    }

    // 搜索
    onClickSearch = () => {
        const title = shareJson.filter((item) => {
            if (item.title.indexOf(this.input.value) >= 0) {
                // if (item.title === this.input.value) {
                return item.title
            }
        })
        if (title.length && title[0].title) {
            this.onClick(title[0].title)
        } else {
            Toast.warn('暂无数据', {
                style: {
                    backgroundColor: '#333',
                }
            })
            this.input.value = ''
        }
    }

    render() {
        const sortData = this.sortData(shareJson, 'title')
        console.log('sortData', sortData)

        return <div className='knowledgeBase'>
            <div className="knowledgeBase-banner">
                <Header style={{backgroundColor: 'transparent'}} value='knowledge' />
                <div className="knowledgeBase-banner-content">
                    <div className="banner-text">每天进步一点</div>
                    <div className="banner-input-wrapper">
                        <input
                            className="banner-input"
                            ref={ref => (this.input = ref)}
                            placeholder={'标签功能开发中～'}
                            onChange={this.onChangeInput}
                        />
                        <div onClick={this.onClickSearch}>
                            <Icon size={20}
                                name={'search'}
                                color={'#bfbfbf'}
                                className='banner-search-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="knowledgeBase-content">
                <ul className="knowledgeBase-content-ul">
                    {
                        knowledgeBaseJson.map((item, index) => {
                            return <li key={index}
                                className="knowledgeBase-content-li"
                                onClick={() => {this.onClick(item.name)}}
                                onFocus={() => {}}
                                onMouseOver={() => {this.onMouseOver(item.voice)}}>
                                <i className="li-black"></i>
                                <div className="li-text">{item.name}</div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <ul className="knowledgeBase-list">
                { sortData.map((list) => {
                    return <li key={list.letter} className="knowledgeBase-list-list">
                        <div id={list.letter} className="knowledgeBase-list-letter">
                            <div className="letter-text">{list.letter}</div>
                        </div>
                        <ul className="knowledgeBase-list-content">
                            { list.list.map((item) => {
                                return <li id={item.title} className="item-card" key={item.title}>
                                    <h3>{item.title}</h3>
                                    <p className="item-desc">{item.description}</p>
                                    <p className="item-author">{item.author}</p>
                                    <p className="item-date">{item.date}</p>
                                </li>
                            })}
                        </ul>
                    </li>
                })}
            </ul>
            <div className="knowledgeBase-footer">
                <div className="knowledgeBase-footer-exploit">
                    <p className="footer-text">平台贡献者:&nbsp;&nbsp;</p>
                    <p className="footer-text">孙海燕 | 吴迪 | 林喆 | 田梓轩</p>
                </div>
                <div></div>
                <div className="footer-text knowledgeBase-footer-jurisdiction">Copyright © 2015-2019 上海永辉云创科技有限公司</div>
            </div>
        </div>
    }
}
