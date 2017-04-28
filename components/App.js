import React from 'react'
import { Router, RouteHandler } from 'react-router'
import io from 'socket.io-client'
import Header from './parts/Header'


const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: '',
			member: {},
			audience: []
		}
	},

	// all incoming data FROM server added to listeners
	componentWillMount() {
		this.socket = io('http://localhost:3000')
		// listener for connect event
		this.socket.on('connect', this.connect)
		this.socket.on('disconnect', this.disconnect)
		this.socket.on('welcome', this.welcome)
		this.socket.on('joined', this.joined)
		this.socket.on('audience', this.updateAudience)
	},

	// all outgoing data TO server comes through emit()
	emit(eventName, payload) {
		this.socket.emit(eventName, payload)
		console.log("Person joined ", payload.name)
	},

	connect() {
		// see if pre-existing person already exists in sessionStorage
		let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null
		if (member) {
			this.emit('join', member)
		}

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

	joined(member) {
		// save in local session to allow auto rejoin same member on browser refresh
		sessionStorage.member = JSON.stringify(member)
		this.setState({
			member: member
		})
	},

	updateAudience(newAudience) {
		this.setState({ audience: newAudience })
	},

	render(){
		// var children = React.Children.map(this.props.children, function (child) {
	  //   return React.cloneElement(child, {
	  //     foo: this.state.foo
	  //   })
	  // })
  	    let childrenWithProps = React.cloneElement(
  	    	this.props.children, 
  	    	{...this.state,
  	    	emit: this.emit
  	    	}
    	)

		return (
			<div>
				<Header 
					title={this.state.title}
					status={this.state.status} 
				/>
			{childrenWithProps}
			</div>
		)
	}
})

export default App
// module.exports = App