import React from 'react'
import io from 'socket.io-client'


const App = React.createClass({

	componentWillMount() {
		this.socket = io('http://localhost:3000')
		// listener for connect event
		this.socket.on('connect', this.connect)
	},

	connect() {
		alert("Connected: " + this.socket.id)
	},

	render(){
		return (
			<h1>Hello from React!</h1>	
		)
	}
})

module.exports = App