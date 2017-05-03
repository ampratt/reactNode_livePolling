import React, { Component } from 'react'
import Display from './Display'

class Answer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			choices: [],
			answer: undefined
		}
		this.setUpChoices = this.setUpChoices.bind(this)
		// this.selectAnswer = this.selectAnswer.bind(this)
	}

	componentWillMount() {
		// fires on initial mount
		this.setUpChoices()
	}

	componentWillReceiveProps() {
		// fires whenever any props of component change
		this.setUpChoices()
	}

	setUpChoices() {
		// creates array of question object {q,a,b,c,d}
		let choices = Object.keys(this.props.question)
		choices.shift()
		// on reload, show stored answer and not allow reanswering
		this.setState({
			choices: choices,
			answer: sessionStorage.answer
		})
	}

	selectAnswer = (choice, i) => {
		this.setState({ answer: choice })
		// save for case of refresh, don't reshow buttons
		sessionStorage.answer = choice
		this.props.emit('answer', {
			question: this.props.question,
			choice: choice
		})
	}

	addChoiceButton = (choice, i) => {
		// choice = a, b, c, d
		let buttonTypes = ['primary', 'success', 'warning', 'danger']
		return (
			<button key={i} 
					className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]} 
					onClick={this.selectAnswer.bind(null, choice)}
			>
				{choice}: {this.props.question[choice]}
			</button>
		)
	}

	styleAnswerPanel = (answer) => {
		// let panelTypes = { a: 'primary', b: 'success', c:'warning', d: 'danger' }
		switch (answer) {
			case 'a':
				return "info"
				break
			case 'b':
				return "success"
				break
			case 'c':
				return "warning"
				break
			case 'd':
				return "danger"
				break
			default:
				return "info"
		}
	}

	render() {
		return (
			<div id="currentQuestion">
				<Display if={this.state.answer}>
					<h3>You answered:</h3>

					<div className={"col-xs-12 col-sm-6 alert alert-" + this.styleAnswerPanel(this.state.answer)} role="alert">
						<b>{this.state.answer}:</b> {this.props.question[this.state.answer]}
					</div>
				</Display>

				<Display if={!this.state.answer}>
					<div className="row">
						{this.state.choices.map(this.addChoiceButton)}
					</div>			
				</Display>

			</div>
		)
	}
}

export default Answer

					// <h2>{this.props.question.q}</h2>
