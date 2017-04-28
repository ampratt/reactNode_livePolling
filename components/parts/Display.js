import React, { Component } from 'react'

class Display extends Component {
	render() {
		return (this.props.if) ? 
			<div>{this.props.children}</div> : null;
	}
}

export default Display;

		// return (this.props.if) ? 
		// 	<div>{this.props.children}</div> : 
		// 	<div><h2>Waiting for connection</h2></div>;