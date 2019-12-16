import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Side, Header} from '../../components'
import gingkoRoute from '../../config/gingko.config'
import './index.less'

export default class Gingko extends Component {
    render() {
        return <div className="yh-fw-gingko">
            <Header value='gingko' />
            <div className="gingko-content">
                <Side routes={gingkoRoute}/>
                <div className="gingko-right-content">
                    <Switch>
                        {
                            gingkoRoute.map((item, index) => {
                                return <Route key={index} path={item.path} component={item.component} />
                            })
                        }
                    </Switch>
                </div>
            </div>
        </div>
    }
}
