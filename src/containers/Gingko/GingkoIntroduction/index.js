import React from 'react'
import ContentPage from '../../Common/ContentPage/'
import './index.less'
export class GingkoIntroduction extends ContentPage {
    render() {
        return (
            <div className='container'>
                <section>
                    <article>
                        <h1>Gingko of react native</h1>
                        <section>
                            <p><strong>Gingko</strong> 是基于react native设计体系的移动端UI库，主要用于研发企业级移动端app</p>
                            {/* <div>
                                <img width='160' height='160' alt='react' src={require('../../../assets/gingko/react.png')} />
                                <span className='add'>+</span>
                                <img alt='react' src={require('../../../assets/gingko/logo.png')} />
                            </div> */}
                        </section>
                        <section>
                            <h2>特性</h2>
                            <ul className='list'>
                                <li>提炼自企业级移动端app产品的交互语言和视觉风格</li>
                                <li>开箱即用的高质量 React native组件</li>
                                <li>使用 TypeScript 构建，提供完整的类型定义文件</li>
                                <li>全链路开发和设计工具体系</li>
                            </ul>
                            <h2>版本</h2>
                            <ul className='list'>
                                <li>稳定版本：npm分支</li>
                                <p>你可以订阅：<a target='_blank' rel="noopener noreferrer" href='https://github.com/yh-yunchuang-fe/gingko'>https://github.com/yh-yunchuang-fe/gingko</a> 来获得稳定版发布的通知。</p>
                            </ul>
                            <h2>安装</h2>
                            <h3>使用npm安装或yarn安装</h3>
                            <pre>
                                <code>
                                    $ npm install git+https://github.com/yh-yunchuang-fe/gingko.git#npm --save
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    $ yarn add git+https://github.com/yh-yunchuang-fe/gingko.git#npm
                                </code>
                            </pre>
                            <h2>换肤功能</h2>
                            <p>在根目录下.babelrc文件里引入</p>
                            <pre>
                                <code>
                                    plugins: [
                                        [
                                        babel-plugin-gingko-config
                                        ] ]
                                </code>
                            </pre>
                            <p>在根目录新建配置文件gingkoconfig.json</p>
                            <pre>
                                <code>
                                    {`{
    brandPrimary: #FE8F1D,
    btn_primary_fill_tap: #F17A00,
    color_link_tap: #FE8F1D,
    border_width: 1
}`}

                                </code>
                            </pre>
                        </section>
                    </article>
                </section>
            </div>
        )
    }
}

export default GingkoIntroduction
