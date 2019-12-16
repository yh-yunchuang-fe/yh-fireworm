import React from 'react'
import {Link} from 'react-router-dom'
import {headerNav} from '../../config/header.config'
import classnames from 'classnames'
import './index.less'

const Header = ({value, className, style}) => {
    return (
        <div className={classnames('yh-fw-header', className)} style={style}>
            <Link className="yh-fw-title" to={{pathname: '/'}}><img className="yh-fw-logo" src={'../../assets/imgs/logo.png'} alt="logo"/></Link>
            <ul className="yh-fw-navigation">
                {headerNav.map(item => {
                    return <li key={item.name} className="yh-fw-nav-item">
                        <Link 
                            className={item.value == value ? 'yh-fw-nav-item-active' : '' }
                            to={{
                                pathname: item.pathname
                            }}
                        >
                            {item.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Header
