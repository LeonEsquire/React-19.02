import React from "react";
import axios from "axios";
import CompComment from "./Comment";
export default class CompComments extends React.Component {
    state = {
        comments: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users/").then(result => {
            this.setState({comments: result.data});
        })
    }
    loadUsers() {
        const load = this.state.comments.map((data, id) => {
            return <CompComment key={id} {...data}/>
        })
        return this.state.comments.length ? load : null;
    }
    render() {
        return (<>{this.loadUsers()}</>)
    }
}