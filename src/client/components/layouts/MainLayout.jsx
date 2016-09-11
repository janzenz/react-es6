import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
	render() {
		return (
				<div className="app center-block">
				  <header className="primary-header col-sm-12">
				  </header>
				  <aside className="primary-aside" className="col-sm-2">
				  	<ul className="nav nav-pills nav-stacked">
				  	  <li>
				  	  	<Link to="/" activeClassName="active">
				  	  		Home
				  	  	</Link>
			  	  	</li>
				  	  <li>
				  	  	<Link to="/users" activeClassName="active">
				  	  		Users
				  	  	</Link>
			  	  	</li>
				  	  <li>
				  	  	<Link to="/widgets" activeClassName="active">
				  	  		Widgets
				  	  	</Link>
			  	  	</li>
				  	</ul>
				  </aside>

				  <main className="col-sm-10">
				    {this.props.children}
				  </main>
				</div>
			);
	}
}
