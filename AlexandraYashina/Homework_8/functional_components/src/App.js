import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainPage from './pages/Main';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import UserProfile from './pages/UserProfile';

const App = () => {
return <>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={MainPage}/>
                <Route path="users" component={Users}>
                    <Route path=":userId" component={UserProfile}/>
                </Route>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>
    </>;
};
  
export default App;

