import React from 'react';
import WidgetList from '../views/WidgetList.jsx';

export default class WidgetContainerList extends React.Component {
	constructor() {
		super();
		this.state = {
			widgets: [
				{id: 1, name: 'Sidebar'},
				{id: 2, name: 'Maps'},
				{id: 3, name: 'Compass'},
			]
		}
	}

	render() {
		return <WidgetList {...this.state} />;
	}
}
