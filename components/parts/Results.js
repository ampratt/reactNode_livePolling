import React, { Component } from 'react'
import { BarChart } from 'react-d3'

class Results extends Component {
	
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
					<BarChart data={this.barGraphData(this.props.results)} 
								title={this.props.title}
								height={this.props.height}
								width={this.props.width}
					/>
			</div>
		)
	}
}

export default Results
