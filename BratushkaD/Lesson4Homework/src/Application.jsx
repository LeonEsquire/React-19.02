// package imports
import "core-js/es6/map";
import "core-js/es6/set";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
// User imports
import Unity from "./unifiedModules.jsx";
//
class App extends React.Component {
    render() {
        return (<Unity/>)
    }
}
const root = document.getElementById("react-container");
ReactDOM.render(<App/>, root)
