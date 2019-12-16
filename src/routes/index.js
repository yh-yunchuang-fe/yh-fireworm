import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../containers/Home/'
import Cedar from '../containers/Cedar'
import Gingko from '../containers/Gingko'
import KnowledgeBase from '../containers/KnowledgeBase'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cedar/:view' component={Cedar} />
            <Route exact path='/gingko/:view' component={Gingko} />
            <Route exact path='/knowledgebase' component={KnowledgeBase} />
        </Switch>
    )
}
