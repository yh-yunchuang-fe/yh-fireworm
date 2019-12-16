import React from 'react'
import './index.less'

const ContentBlock = ({title, children}) => {
    return <section className="yhf-block">
        <h3 className="yhf-block-title">{title}</h3>
        <section className="yh-block-content">
            {children}
        </section>
    </section>
}

export default ContentBlock