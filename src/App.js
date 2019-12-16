import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './routes'
import {hot} from 'react-hot-loader'
import {HistoryContext} from './HistoryContext'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: {history: this.props.history}
        }
    }

    render() {

        return (
            <HistoryContext.Provider value={this.state.history}>
                <section className="app-container">
                    <Routes/>
                </section>
            </HistoryContext.Provider>

        )
    }
}

export default hot(module)(withRouter(App))
