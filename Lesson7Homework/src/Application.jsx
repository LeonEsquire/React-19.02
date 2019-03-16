import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./app/layouts/Layout";
const app = document.querySelector("#root");
ReactDOM.render(
  <BrowserRouter>
    {/* внутри компонента Layout через Switch прописаны остальные пути.*/}
      {/* указал <Provider></Provider> внутри render'a компонента Layout ввиду невозможности всучить его здесь*/}
    <Route path="/" component={Layout} />
  </BrowserRouter>,
  app
);
