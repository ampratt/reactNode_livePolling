import React, { Component } from 'react'
import Display from './parts/Display'
import { BarChart } from 'react-d3'

class Board extends Component {
	
	barGraphData(results) {
		return Object.keys(results)
				.map((choice) => {
					return {
						label: choice,
						value: results[choice]
					}
				})
	}

	render() {
		return (
			<div id="scoreboard" className="">
				
				<Display if={this.props.status === 'connected' &&
							this.props.currentQuestion}>
					<BarChart data={this.barGraphData(this.props.results)} 
								title={this.props.currentQuestion.q}
								height={window.innerHeight * 0.6}
								width={window.innerWidth * 0.9}
					/>
				</Display>

				<Display if={this.props.status === 'connected' &&
							!this.props.currentQuestion}>
					<h3>Awaiting a Question...</h3>
				</Display>

			</div>
		)
	}
}

export default Board

// <h3>{this.props.currentQuestion.q}</h3>
// <p>{JSON.stringify(this.props.results)}</p>