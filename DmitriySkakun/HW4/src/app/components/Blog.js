import React from 'react';
import Post from './Post';

class Blog extends React.Component{
    render(){
        const items = this.props.items.map((item, index) => {
            return <Post key = {index}>{item.title}{item.postBody}{item.author}</Post>
        });
        return(
            <div>
            {items}
            </div>
        );
    }
}

export default Blog;