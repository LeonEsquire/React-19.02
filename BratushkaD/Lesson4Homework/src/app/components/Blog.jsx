import React from "react";
import Post from "./Post.jsx";
import PropTypes from "prop-types";
class Blog extends React.Component {
    render() {
        return (
            <div className="Blog">
                <Post posts={this.props.posts}/>
            </div>)
    }
}
Blog.propTypes = {
    posts: PropTypes.array.isRequired
}
export default Blog;
