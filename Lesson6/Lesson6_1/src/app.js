import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import App from './app/components/App';

const app = document.getElementById('app');


ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	,
app);