import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const JoinSpeaker = React.createClass ({

	start(e) {
		let speakerName = this.refs.name.value
		let title = this.refs.title.value
		this.props.emit('start', { 
			name: speakerName, 
			title: title 
		})
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={ this.start }>

				<label>Full Name</label>
				<input ref="name"
						className="form-control"
						placeholder="enter your full name..."
						required />

				<label>presentation Title</label>
				<input ref="title"
						className="form-control"
						placeholder="enter title for presentation..."
						required />

				<button className="btn btn-primary">Start</button>

			</form>
		)
	}
})

export default JoinSpeaker