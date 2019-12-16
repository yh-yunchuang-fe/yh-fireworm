import React, {Component} from 'react'
import {isType} from '../../utils/'
import './index.less'

export default class Content extends Component{
    render() {
        const {title, renderTitle, describe, children} = this.props
        return <section className="yh-fireworm-module-block">
            {isType(renderTitle, 'Function') ? renderTitle() : <h2>{title}</h2>} 
            <p className="yh-fireworm-module-header">
                {describe}
            </p>
            <section className="yh-fireworm-module-body">
                {children}
            </section>
        </section>
    }
}