import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';

class App extends React.Component {
    render() {
        const loginItems = [
            { type: "text", placeholder: "Введите логин" },
            { type: "text", placeholder: "Введите пароль" },
        ];
        const menuItems = [
            { href: "#", text: "Главная" },
            { href: "#", text: "О нас" },
            { href: "#", text: "Контакты" }
        ];
        return <>
            <Login loginTitle="Авторизация" items={loginItems}/>
            <Menu menuTitle="Меню" items={menuItems}/>
        </>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));