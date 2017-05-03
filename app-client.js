import React from 'react'
import ReactDOM, { render } from 'react-dom'
import createRoutes from './components/routes'
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
	


