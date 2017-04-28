import React, { Component } from 'react'
import { Link } from 'react-router'

class Whoops404 extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>404 - Whoops</h1>
				<p>Please press the 'back' button, 
					or click one of the following links:
				</p>

				<Link to='/'>Join as Audience</Link><br/>		
				<Link to='/speaker'>Start a Presentation</Link><br/>
				<Link to='/board'>View the Board</Link>
			</div>
		)
	}
}

export default Whoops404