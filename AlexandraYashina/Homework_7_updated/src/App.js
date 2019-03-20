import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainPage from './pages/Main';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import UserProfile from './pages/UserProfile';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Comments from './pages/Comments';
import Comment from './pages/Comment';

class App extends React.Component {
    render() {
        return <>
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={MainPage}/>
                        <Route path="users" component={Users}/>
                        <Route path="/users/:userId" component={UserProfile}/>
                        <Route path="posts" component={Posts}>
                            <Route path=":postId" component={Post}/>
                        </Route>
                        <Route path="comments" component={Comments}>
                            <Route path=":commentId" component={Comment}/>
                        </Route>
                        <Route path="*" component={PageNotFound}/>
                    </Route>
                </Router>
            </Provider>
        </>;
    }
}

export default App;