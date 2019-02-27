// package imports
import "core-js/es6/map";
import "core-js/es6/set";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
// User imports
import Unity from "./unifiedModules.jsx";
//
class App extends React.Component {
    render() {
        return (<><Unity/></>)
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))
