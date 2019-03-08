import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './app/pages/Main';
import About from './app/pages/About';
import Contacts from './app/pages/Contacts';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: window.location.hash.substr(1)
		}
	}

	componentDidMount()
	{
		window.addEventListener('hashchange', () => {
			this.setState({route: window.location.hash.substr(1)});
		})
	}

	render() {
		let Child;
		switch(this.state.route) {
			case '/about': 
				Child = About;
				break;
			case '/contacts':
				Child = Contacts;
				break;
			default:
				Child = MainPage;
		} 

		return <div>
			<header>Приложение v1</header>
			<ul>
				<li><a href="#/home">Главная</a></li>
				<li><a href="#/about">О нас</a></li>
				<li><a href="#/contacts">Контакты</a></li>
			</ul>

			<div>
				<Child/>
			</div>
		</div>
	}
}

const app = document.getElementById('app');


ReactDOM.render(
	<App/>,
app);