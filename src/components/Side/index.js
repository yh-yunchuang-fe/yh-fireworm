import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import './index.less'

export default class Side extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount() {
        const hash = window.location.hash
        const url = hash.substr(1, hash.length-1)
        const { routes } = this.props
        let idx = 0
        routes.map((item, index) => {
            if (item.path === url) {
                idx = index
            }
        })
        this.setState({
            activeIndex: idx
        })
    }

    onChangeTab = (item, index) => {
        this.setState({
            activeIndex: index
        })
    }

    render() {
        const { routes } = this.props
        const { activeIndex } = this.state

        return <div className="yh-fw-side">
            <ul className="side-Wrapper">
                {
                    routes.map((item, index) => {
                        const textClass = classnames({
                            'side-item': true,
                            'activeClass': activeIndex === index})
                        return <li key={index} onClick={() => {this.onChangeTab(item, index)}}>
                            <Link className={textClass} to={{ pathname: item.path }}>
                                {item.name}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
