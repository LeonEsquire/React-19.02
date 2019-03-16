import React from "react";
import axios from "axios";
import CompUserpost from "./Userpost";
export default class CompUserposts extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users/").then(result => {
            this.setState({posts: result.data});
        })
    }
    loadUsers() {
        const load = this.state.posts.map((data, id) => {
            return <CompUserpost key={id} {...data}/>
        })
        return this.state.posts.length ? load : null;
    }
    render() {
        return (<>{this.loadUsers()}</>)
    }
}