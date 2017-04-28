import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class Board extends Component {
	render() {
		return (
			<h1>Board: {this.props.dance}</h1>
		)
	}
}

export default Board