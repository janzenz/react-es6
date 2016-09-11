import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/UserList.jsx';
import store from '../../stores/default.store.js';

class UserListContainer extends React.Component {
	fillUsers() {
		store.dispatch({
			type: 'FILL_USERS',
			users: [
				{id: 1, name: 'Janzen'},
				{id: 2, name: 'Dan'},
				{id: 3, name: 'Michael'},
			]
		});
	}

	render() {
		return (
				<div>
					<UserList users={this.props.users} />
					<button onClick={this.fillUsers}
						className="btn btn-primary">
						Fill Users
					</button>
				</div>
			);
	}
}

/**
 * The main idea of mapStateToProps() is to isolate 
 * which parts of the overall state this component 
 * needs as its props.
 * @params store Redux encapsulates all the reducers we created.
 */
const mapStateToProps = (store) => {
	return {
		users: store.userState.users
	}
}

export default connect(mapStateToProps)(UserListContainer);
