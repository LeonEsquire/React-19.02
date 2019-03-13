import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from './Menu';
// import EnterLogin from './Login';
// import './app/styles/style.css';
// import DisplayElement from './app/components/DisplayElement'
// import Blog from './app/components/Blog';
// import WelcomeModal from './app/components/WelcomeModal';
import {Router, Route, browserHistory, IndexRoute, hashHistory} from 'react-router';

import Layout from './app/layouts/Layout';

import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import Comments from './app/pages/Comments';
import Post from './app/pages/Post';
import Comment from './app/pages/Comment';




class App extends React.Component {
    

    render(){
       

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={MainPage}/>
                    <Route path='users' component={Users}>
                        <Route path=':userId' component={User}/>
                    </Route>
                    <Route path='posts' component={Posts}>
                        <Route path=':userId' component={Post}/>
                    </Route>
                    <Route path='comments' component={Comments}>
                        <Route path=':postId' component={Comment}/>    
                    </Route>
                    <Route path="*" component={PageNotFound}/>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));