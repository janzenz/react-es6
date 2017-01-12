import React from 'react';
import WidgetList from '../views/WidgetList.jsx';

export default class WidgetContainerList extends React.Component {
	render() {
		return <WidgetList {...this.props} />;
	}
}
