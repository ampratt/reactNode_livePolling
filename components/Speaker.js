import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class Speaker extends Component {
	render() {
		return (
			<h1>Speaker : {this.props.status}</h1>
		)
	}
}

export default Speaker