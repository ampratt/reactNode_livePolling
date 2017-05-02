import React from 'react'
import Display from './Display'

var Ask = React.createClass({

	getInitialState() {
		return {
			choices: [],
			answer: undefined
		}
	},

	componentWillMount() {
		// fires on initial mount
		this.setUpChoices()
	},

	componentWillReceiveProps() {
		// fires whenever any props of component change
		this.setUpChoices()
	},

	setUpChoices() {
		// creates array of question object {q,a,b,c,d}
		let choices = Object.keys(this.props.question)
		choices.shift()
		// on reload, show stored answer and not allow reanswering
		this.setState({
			choices: choices,
			answer: sessionStorage.answer
		})
	},

	selectAnswer(choice, i) {
		this.setState({ answer: choice })
		// save for case of refresh, don't reshow buttons
		sessionStorage.answer = choice
		this.props.emit('answer', {
			question: this.props.question,
			choice: choice
		})
	},

	addChoiceButton(choice, i) {
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
	},

	render() {
		return (
			<div id="currentQuestion">
				<Display if={this.state.answer}>
					<h3>You answered: {this.state.answer}</h3>
					<p>{this.props.question[this.state.answer]}</p>
				</Display>

				<Display if={!this.state.answer}>
					<h2>{this.props.question.q}</h2>
					<div className="row">
						{this.state.choices.map(this.addChoiceButton)}
					</div>			
				</Display>

			</div>
		)
	}
})

export default Ask