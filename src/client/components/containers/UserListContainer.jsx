import React from 'react';
import UserList from '../views/UserList.jsx';

export default class UserListContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{id: 1, name: 'Janzen'},
				{id: 2, name: 'Dan'},
				{id: 3, name: 'Michael'},
			]
		}
	}

	render() {
		return (<UserList users={this.state.users} />);
	}
}
