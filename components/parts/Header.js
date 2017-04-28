import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Header = React.createClass({

	getDefaultProps() {
		return {
			status: 'disconnected'
		}
	},

	render() {
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>					
					<h3>Speaker name: {this.props.speaker}</h3>
				</div>
				<div className="col-xs-2">
					<span id="connection-status" className={this.props.status}></span>
				</div>
			</header>
		)	
	}
})

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header