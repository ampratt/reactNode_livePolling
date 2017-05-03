import React, { Component } from 'react'
import Display from './parts/Display'
import JoinSpeaker from './parts/JoinSpeaker'
import Attendance from './parts/Attendance'
import Questions from './parts/Questions'
import Results from "./parts/Results"

class Speaker extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
						<Questions questions={this.props.questions} 
									emit={this.props.emit} />
						{(this.props.currentQuestion) ? 
							<Results results={this.props.results} 
										title={"Audience reponses:"}
										height={window.innerHeight * 0.4}
										width={window.innerWidth * 0.7}
							/>
							: null}
						<Attendance audience={this.props.audience} />
					</Display>

					<Display if={!this.props.member.name}>
						<h2>Start the presentation</h2>
						<JoinSpeaker emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		)
	}
}

export default Speaker