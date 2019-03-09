import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }

    render() {
        const posts = this.props.posts.map((post, index) => {
            
            return (
                <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.postBody}</p>
                </div>
            );
        });

        return (
            <div>
                <Post posts={posts} />
            </div>
        );
    }
}
