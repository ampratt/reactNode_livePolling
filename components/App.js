import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header'


const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected'
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000')
		// listener for connect event
		this.socket.on('connect', this.connect)
		this.socket.on('disconnect', this.disconnect)
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

	render(){
		return (
			<div>
				<Header 
					title="New Header" 
					status={this.state.status} 
				/>
			</div>
		)
	}
})

module.exports = App