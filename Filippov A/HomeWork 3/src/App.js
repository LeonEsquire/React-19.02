import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu/index';
import Login from './Components/Login/Login';


class App extends React.Component {
    render() {
        const menuItems = [
            {href:"/", title: "Главная"},
            {href:"/about", title: "О нас"},
            {href:"/contacts", title: "Контакты"},
            {href:"/service", title: "Услуги"},

        ]

        const loginItems = [
            {type: "text", title: "Введите ваш логин"},
            {type: "password", title: "Введите ваш пароль"},
            {type: "button", title: "Войти"}
        ]

        return <div>
            <h1>First Site In React</h1>
            <Menu titleMenu="Меню сайта" items={menuItems}/>
            <Login titleLogin="Авторизация" items={loginItems}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
