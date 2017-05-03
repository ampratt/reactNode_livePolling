import React, { Component } from 'react'
import Display from './parts/Display'
import Join from './parts/Join'
import Answer from './parts/Answer'
import Results from './parts/Results'

// class Audience extends Component {
class Audience extends Component {
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

						<div className="row">
						  <div className="col-xs-12">
								<h2>Q. {this.props.currentQuestion.q}</h2>
						  </div>
					    </div>

						<div className="row">
						  <div className="col-xs-12">
								<Answer question={this.props.currentQuestion}
										emit={this.props.emit} />
						  </div>
						</div>

						<div className="row">
						  <div className="col-xs-12">
								<Results results={this.props.results} 
											title={"Audience reponses:"}
											height={window.innerHeight * 0.4}
											width={window.innerWidth * 0.5}
								/>
						  </div>
						</div>
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
}

export default Audience
