import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <Layout />
</Provider>
, app);
