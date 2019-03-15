import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainPage from '../pages/Main';
import PageNotFound from '../pages/PageNotFound';
import Users from '../pages/Users';
import User from '../pages/UserProfile';
import Base from '../pages/Base';


export default class Layout extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
       	<Route path="/" component={Base}>
			      <IndexRoute component={MainPage}/>
         <Route path="users" component={Users}>
            <Route path=":userId" component={User}/>
        </Route>
 			  <Route path="*" component={PageNotFound}/>
		  </Route>
    </Router>
    )
  }
}