import React from "react";
import CompComment from "../components/Comment";
import axios from "axios";
export default class Comment extends React.Component {
    state = {
        comment: null
    };
    componentDidMount() {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/users/${this.props.params.comId}`
            )
            .then(response => {
                this.setState({ comment: response.data });
            });
    }
    render() {
        return (
            <>{this.state.comment ? <CompComment {...this.state.comment} /> : null}</>
        );
    }
}