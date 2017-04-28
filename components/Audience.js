import React, { Component } from 'react'
import Display from './parts/Display'
import Join from './parts/Join'
// import PropTypes from 'prop-types';

class Audience extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<h1>Join the session</h1>
					<Join emit={this.props.emit} />
				</Display>
			</div>
		)
	}
}

export default Audience
