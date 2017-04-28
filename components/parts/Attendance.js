import React, { Component } from 'react'

class Attendance extends Component {

	addMemberRow(member, i) {
		return (
			<tr key={i}>
				<td>{member.name}</td>
				<td>{member.id}</td>
			</tr>
		)
	}

	render() {
		return (
			<div className="">
				<h2>Attendance - {this.props.audience.length} members</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Audience Member</th>
							<th>Socket Id</th>
						</tr>					
					</thead>
					<tbody>
						{this.props.audience.map(this.addMemberRow)}
					</tbody>
					
				</table>
			</div>
		)
	}
}

export default Attendance