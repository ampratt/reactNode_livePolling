import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import createRoutes from './components/routes'
import App from './components/App'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
// first JS file to run in browser

const routes = createRoutes();

render(
    routes,
    document.getElementById('react-container')
)

    // <Router history={hashHistory}>
    //     <Route path="/" component={App}>
    //         <IndexRoute component={Audience}/>
    //         <Route path="speaker" component={Speaker}/>
    //         <Route path="board" component={Board} />
    //     </Route>
    // </Router>

// let routes = (
// 	<Route handler={App} >
// 		<DefaultRoute handler={Audience} />
// 		<Route name="speaker" path='speaker' handler={Speaker}></Route>
// 		<Route name="board" path='board' handler={Board}></Route>
// 	</Route>
// )
	


