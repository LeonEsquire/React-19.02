// package imports
import React from "react";
import ReactDOM from "react-dom";
import "react-bootstrap";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "core-js/es6/map";
import "core-js/es6/set";
import "./styles/styles.scss";
import Layout from "./app/layouts/Layout";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import Main from "./app/pages/Main";
//
const root = document.getElementById("react-container");
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users}>
        <Route path=":id" component={User}/>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  root
);
