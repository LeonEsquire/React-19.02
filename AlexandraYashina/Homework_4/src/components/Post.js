import React from 'react';

class Post extends React.Component {
    render() {
        return (<div className="postItem">
            <h2 classame="postTitle">{this.props.children.title}</h2><div className="postBody">{textToHtml(this.props.children.postBody)}</div>
            </div>
        );
    }
}

function textToHtml(html) {
    let arr = html.split(/<br\s*\/?>/i);
    return arr.reduce((el, a, index) => el.concat(<p key={index}>{a}</p>), []);
}

export default Post;