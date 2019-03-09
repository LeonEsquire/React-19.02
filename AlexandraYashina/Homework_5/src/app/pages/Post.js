import React from 'react';
import PostText from '../components/PostText';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
        .then((response) => {
            this.setState({post: response.data});
        });
    }
    render() {
        return (
            <>
                {this.state.post && <PostText {...this.state.post} />}
            </>
        );
    }
}