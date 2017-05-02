import React from 'react'
import { Router, RouteHandler } from 'react-router'
import io from 'socket.io-client'
import Header from './parts/Header'


const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: '',
			member: {},		// refers to current socket
			audience: [],
			speaker: '',
			questions: [],
			currentQuestion: false,
			results: {}
		}
	},

	// all incoming data FROM server added to listeners
	componentWillMount() {
		this.socket = io('http://localhost:3000')
		this.socket.on('connect', this.connect)
		this.socket.on('disconnect', this.disconnect)
		this.socket.on('welcome', this.updateState)
		this.socket.on('joined', this.joined)
		this.socket.on('audience', this.updateAudience)
		this.socket.on('start', this.startPresentation)
		this.socket.on('end', this.updateState)
		this.socket.on('ask', this.ask)
		this.socket.on('results', this.updateResults)
	},

	// all outgoing data TO server comes through emit()
	emit(eventName, payload) {
		this.socket.emit(eventName, payload)
		console.log("Emit event fired: '%s' with payload '%s'", eventName, payload.name)
	},

	connect() {
		// see if pre-existing person already exists in sessionStorage
		let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null
		
        if (member && member.type === 'audience') {
            this.emit('join', member);
        } else if (member && member.type === 'speaker') {
			// automatically rejoin speaker on socket refresh
			this.emit('start', { 
				name: member.name, 
				title: sessionStorage.title
			})
		}

		console.log("Connected: " + this.socket.id)
		this.setState({
			status: 'connected'
		})
	},

	disconnect() {
		console.log("Disconnected: " + this.socket.id)
		this.setState({
			status: 'disconnected',
			title: 'disconnected',
			speaker: ''
		}) 
	},

	updateState(serverState) {
		this.setState(serverState)
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

	startPresentation(presentation) {
		if (this.state.member.type === 'speaker') {
			sessionStorage.title = presentation.title
		}
		this.setState(presentation)
	},

    ask(question) {
   	 	// clear any saved answers
    	sessionStorage.answer = ''
        this.setState({ 
        	currentQuestion: question,
        	result: {a:0, b:0, c:0,d:0}
    	})
    },

    updateResults(results) {
    	this.setState({ results: results })
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
				<Header {...this.state} />
				{childrenWithProps}
			</div>
		)
	}
})

export default App
// module.exports = App