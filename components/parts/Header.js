import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>					
					<h3>Presenter: {this.props.speaker}</h3>
				</div>
				<div className="col-xs-2">
					<span id="connection-status" className={this.props.status}></span>
				</div>
			</header>
		)	
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

Header.defaultProps = {
	status: 'disconnected'
}

export default Header

// non ES6 function
	// getDefaultProps() {
	// 	return {
	// 		status: 'disconnected'
	// 	}
	// },