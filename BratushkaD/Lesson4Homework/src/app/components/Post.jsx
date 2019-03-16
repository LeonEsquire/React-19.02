import React from "react";

class Post extends React.Component {
    processPosts() {
        return this.props.posts.map((item, i) => {
            return(
                <div className="post" key={i}>
                    <p className="title">{item.title}</p>
                    <br/>
                    <p className="post-text">{item.main}</p>
                </div>)
        })
    }
    render() {
        return (<>{this.processPosts()}</>)
    }
}
export default Post;
