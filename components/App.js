import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header'


const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: ''
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000')
		// listener for connect event
		this.socket.on('connect', this.connect)
		this.socket.on('disconnect', this.disconnect)
		this.socket.on('welcome', this.welcome)
	},

	connect() {
		// alert("Connected: " + this.socket.id)
		console.log("Connected: " + this.socket.id)
		this.setState({
			status: 'connected'
		})
	},

	disconnect() {
		console.log("Disconnected: " + this.socket.id)
		this.setState({
			status: 'disconnected'
		}) 
	},

	welcome(serverState) {
		this.setState({
			title: serverState.title
		})
	},

	render(){
		return (
			<div>
				<Header 
					title={this.state.title}
					status={this.state.status} 
				/>
			</div>
		)
	}
})

module.exports = App