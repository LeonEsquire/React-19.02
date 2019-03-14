import React from 'react';
import axios from 'axios';
import CommentText from './CommentText'; //


export default class UserComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const comments = response.data.filter(function(comment) {
                return comment.userId == window.location.pathname.substr(7);
                });
            this.setState({comments});
        })
    }

    render() {
        if (!this.state.comments.length) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return <CommentText key={index} {...comment} />
        })

        return (
        <>
        <br></br>
            {comments}
         </>
        );
    }
}