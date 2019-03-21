import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './Layouts/Layout';
import MainPage from './Pages/Main';
import User from './Pages/User';
import Users from './Pages/Users';
import PageNotFound from './Pages/PageNotFound';
import Post from './Pages/Post';
import Posts from './Pages/Posts';
import Comment from './Pages/Comment';
import Comments from './Pages/Comments';
//последнюю проверку Route ставим  * тогда все верхние сработают

const app = document.querySelector('#root');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="users" component={Users}>
                <Route path=":userId" component={User} />
            </Route>
            <Route path="posts" component={Posts}>
                <Route path=":title" component={Post} />
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":id" component={Comment} />
            </Route>
            <Route path='*' component={PageNotFound} /> 
        </Route>
    </Router>
    ,
app);

