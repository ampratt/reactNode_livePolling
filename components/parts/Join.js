import React, { Component } from 'react'
import { Link } from 'react-router'

const Join = React.createClass ({

	join(e) {
		let member = {
			memberName: this.refs.name.value	//React.findDOMNode(this.refs.name).value
		}
		this.props.emit('join', { name: member.memberName })
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={ this.join }>

				<label>Full Name</label>
				<input ref="name"
						className="form-control"
						placeholder="enter your full name..."
						required />
				<button className="btn btn-primary">Join</button>
				<Link to="/speaker">Start a Presentation</Link>
			</form>
		)
	}
})

export default Join