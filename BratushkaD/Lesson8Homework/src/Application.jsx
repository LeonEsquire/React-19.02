import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./app/layouts/Layout";

const app = document.querySelector("#root");
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Layout} />
  </BrowserRouter>,
  app
);
