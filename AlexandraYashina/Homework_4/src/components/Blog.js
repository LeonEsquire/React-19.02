import React from 'react';
import Post from './Post';

class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <Post key={index}>{item}</Post>
        });
        return (<div className="blog">
            <h1>{this.props.blogTitle}</h1>
            {items}
        </div>
        )
    }
}

export default Blog;