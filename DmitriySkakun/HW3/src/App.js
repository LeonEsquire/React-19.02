import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import EnterLogin from './Login';

class App extends React.Component {
    render(){
        const menuItem = [
            {href:"/", title:"Главная"},
            {href:"/about", title:"О нас"},
            {href:"/service", title:"Услуги"},
            {href:"/contacts", title:"Контакты"},
        ];

        return (
        <>
            <h1>React</h1>
            {/* <div>Functional component</div>
            <Menu titleMenu="Основное меню сайта" items = {menuItem}/> */}
            <EnterLogin/>
            <Menu titleMenu = 'Основное меню сайта' items = {menuItem}/>
        </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));