import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './Layouts/Layout';
import MainPage from './Components/Main';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Post from './Components/Post';
import Comments from './Components/Comments';
import PageNotFound from './Components/ PageNotFound';
//последнюю проверку Route ставим  * тогда все верхние сработают

const app = document.querySelector('#root');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="about" component={About} />
            <Route path="post" component={Post} />
            <Route path="contacts" component={Contacts} />
            <Route path="comments" component={Comments} />
            <Route path="post/:number" component={Post} />
            <Route path='*' component={PageNotFound} /> 
        </Route>

    </Router>
    ,
app);

