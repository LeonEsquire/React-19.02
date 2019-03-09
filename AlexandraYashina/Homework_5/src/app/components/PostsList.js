import React from 'react';
import axios from 'axios';
import PostText from './PostText';

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            this.setState({posts: response.data})
        })
    }
    render() {
        if (!this.state.posts.length) {
            return null;
        }
        const posts = this.state.posts.map((post, index) => {
            return <PostText key={index} {...post} />
        });
        return (
            <>
            <h1>Посты</h1>
            {posts}
            </>
        );
    }
}