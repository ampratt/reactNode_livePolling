import React, { Component } from 'react'
import Display from './parts/Display'
import Join from './parts/Join'
import Ask from './parts/Ask'

// class Audience extends Component {
var Audience = React.createClass({
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name}>

						<Display if={!this.props.currentQuestion}>
							<h2>Welcome {this.props.member.name}</h2>
							<p className="info-update">{this.props.audience.length} audience members connected</p>
							<p>Questions will appear below.</p>
						</Display>

						<Display if={this.props.currentQuestion}>
						<Ask question={this.props.currentQuestion}
								emit={this.props.emit} />
							{/*<h2>{this.props.currentQuestion.q}</h2>*/}
						</Display>

					</Display>

					<Display if={!this.props.member.name}>
						<h1>Join the session</h1>
						<Join emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		)
	}
})

export default Audience
