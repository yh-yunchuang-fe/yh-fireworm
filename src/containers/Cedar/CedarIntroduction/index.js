import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import './index.less'

export class CedarIntroduction extends ContentPage {
    render() {
        return (
            <div className='container'>
                <section>
                    <article>
                        <h1>Cedar of react </h1>
                        <section>
                            <p><strong>Cedar</strong> 是基于react 的移动端UI库，主要用于研发企业级移动端H5页面</p>
                        </section>
                        <section>
                            <h2>版本</h2>
                            <ul className='list'>
                                <li>稳定版本：master分支</li>
                                <p>你可以订阅：<a target='_blank' rel="noopener noreferrer" href='https://github.com/yh-yunchuang-fe/yh-cedar-ui'>https://github.com/yh-yunchuang-fe/yh-cedar-ui</a> 来获得稳定版发布的通知。</p>
                            </ul>
                            <h2>安装</h2>
                            <h3>使用npm安装或yarn安装</h3>
                            <pre>
                                <code>
                                    $ npm install git+https://github.com/yh-yunchuang-fe/yh-cedar-ui --save
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    $ yarn add git+https://github.com/yh-yunchuang-fe/yh-cedar-ui
                                </code>
                            </pre>
                        </section>
                    </article>
                </section>
            </div>
        )
    }
}

export default CedarIntroduction
