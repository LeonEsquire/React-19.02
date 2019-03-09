import React from 'react';
import CommentText from '../components/CommentText';
import axios from 'axios';


export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
        .then((response) => {
            this.setState({comment: response.data});
        });
    }
    render() {
        return (
            <>
                {this.state.comment && <CommentText {...this.state.comment} />}
            </>
        );
    }
}