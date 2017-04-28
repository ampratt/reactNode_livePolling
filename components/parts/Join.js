import React, { Component } from 'react'

const Join = React.createClass ({

	join(e) {
		let member = {
			memberName: this.refs.name.value	//React.findDOMNode(this.refs.name).value
		}
		//prevent JS reload and sending info to server
		// e.preventDefault();
		// alert("TODO: Join member " + member.memberName)
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

			</form>
		)
	}
})

export default Join