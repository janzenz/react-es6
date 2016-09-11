import React from 'react';
import { Link } from 'react-router';

export default class UserList extends React.Component {
	render() {
		return (
				<ul className="user-list">
					{this.props.users.map(this.creatListItem)}
				</ul>
			);
	}

	creatListItem(user) {
		return (
				<li key={user.id}>
					<Link to={`/users/${user.id}`}>
						{user.name}
					</Link>
				</li>
			);
	}
}
