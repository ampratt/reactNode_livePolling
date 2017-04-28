import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App'
import Audience from './Audience'
import Speaker from './Speaker'
import Board from './Board'
import Whoops404 from './Whoops404'

const createRoutes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Audience} />
            <Route path="speaker" component={Speaker} />
            <Route path="board" component={Board} />
            <Route path="*" component={Whoops404} />
        </Route>
    </Router>
)

export default createRoutes