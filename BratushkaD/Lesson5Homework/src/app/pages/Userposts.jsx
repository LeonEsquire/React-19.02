import React from "react";
import CompUserposts from "./../components/Userposts";
export default class Userposts extends React.Component {
    render() {
        return (<>{!this.props.children ? (<div className="userpostscontainer"><CompUserposts /></div>) : this.props.children }</>)
    }
}