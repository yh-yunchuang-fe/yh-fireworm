import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Side, Header} from '../../components'
import cedarRoute from '../../config/cedar.config'
import './index.less'

export default class Cedar extends Component {
    render() {
        return  <div className="yh-fw-cedar">
            <Header value='cedar'/>
            <div className="cedar-content">
                <Side routes={cedarRoute}/>
                <div className="cedar-right-content">
                    <Switch>
                        {
                            cedarRoute.map((item, index) => {
                                return <Route key={index} path={item.path} component={item.component} />
                            })
                        }
                    </Switch>
                </div>
            </div>
        </div>
    }
}
