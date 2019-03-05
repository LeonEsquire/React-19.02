import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu/index';
import Login from './Components/Login/Login';
//import './Style/style'
import StateNews from './Components/StateNews/StateNews';
import Blog from './Components/Blog/Blog';


class App extends React.Component {
    render() {
        const menuItems = [
            {href:"/", title: "Главная"},
            {href:"/about", title: "О нас"},
            {href:"/contacts", title: "Контакты"},
            {href:"/service", title: "Услуги"},

        ];

        const loginItems = [
            {type: "text", title: "Введите ваш логин"},
            {type: "password", title: "Введите ваш пароль"},
            {type: "button", title: "Войти"}
        ];

        const posts = [
            {
                title: "News 1",
                postBody: "News 1 News 1 News 1 News 1 News 1 News 1 News 1 News 1",
            },
            {
                title: "News 2",
                postBody: "News 2 News 2 News 2 News 2 News 2 News 2 News 2 News 2 News 2 ",
            },
            {
                title: "News 3",
                postBody: "News 3 News 3 News 3 News 3 News 3 News 3 News 3 News 3 News 3 ",
            },
        ];

        return <div>
            <h1>&#9883; First Site In React &#9883;</h1>
            <Menu titleMenu="Меню сайта" items={menuItems}/>
            <Login titleLogin="Авторизация" items={loginItems}/>
            <StateNews />
            <hr />
            <Blog posts={posts} />
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
