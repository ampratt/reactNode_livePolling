import React, { Component } from 'react'
import Display from './parts/Display'
import Join from './parts/Join'

class Audience extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name}>
						<h2>Welcome {this.props.member.name}</h2>
						<p>Questions will appear below.</p>
					</Display>

					<Display if={!this.props.member.name}>
						<h1>Join the session</h1>
						<Join emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		)
	}
}

export default Audience
