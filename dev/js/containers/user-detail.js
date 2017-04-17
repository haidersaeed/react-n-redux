import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {

	render() {
		if(! this.props.user) {
			return(
				<div>
					Select a user.
				</div>
			);
		}
		return(
			<div>
				<p>
					<strong>{this.props.user.first} {this.props.user.last}</strong>
					<br />
					{this.props.user.description}
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail);