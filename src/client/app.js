// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/base.css';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/layouts/MainLayout.jsx';
import SearchLayout from './components/layouts/SearchLayout.jsx';

// Pages
import Home from './components/views/Home.jsx';
import UserListContainer from './components/containers/UserListContainer.jsx';
import WidgetList from './components/containers/WidgetListContainer.jsx';

// Store
import { Provider } from 'react-redux';
import store from './stores/default.store.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
      	<IndexRoute component={Home} />
  		<Route component={SearchLayout}>
  			<Route path="users" component={UserListContainer} />
  			<Route path="widgets" component={WidgetList} />
  		</Route> 
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept(); // <-- For react-hot-reload
