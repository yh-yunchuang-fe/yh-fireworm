import 'core-js/es/map'
import 'core-js/es/set'
import 'core-js/es/promise'
import React from 'react'
import {render} from 'react-dom'
import App from './App.js'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import './index.less'

render(
    <HashRouter>
        <App/>
    </HashRouter>
    ,document.getElementById('root')
)
