import React from 'react';
import { Link } from 'react-router';

export default class WidgetList extends React.Component {
	render() {
		return (
				<ul className="widgets-list">
					{this.props.widgets.map(this.creatListItem)}
				</ul>
			);
	}

	creatListItem(widget) {
		return (
				<li key={widget.id}>
					<Link to={`/widgets/${widget.id}`}>
						{widget.name}
					</Link>
				</li>
			);
	}
}
