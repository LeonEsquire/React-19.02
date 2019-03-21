import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu/index';
import Login from './Components/Login/Login';
//import './Style/style'
import StateNews from './Components/StateNews/StateNews';
import Blog from './Components/Blog/Blog';

import menu from './menu';
import posts from './posts';

const App = function() {
    return (
        <div>
            <h1>&#9883; First Site In React &#9883;</h1>
            <Menu titleMenu="Меню сайта" items={menu}/>
            <Login titleLogin="Авторизация" />
            <StateNews />
            <hr />
            <Blog posts={posts} />
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
