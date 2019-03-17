import React from "react";
import {Link} from "react-router";
export default class CompComment extends React.Component {
    render() {
        const loremipsum = this.props.address.street;
        return  (
            <div className="usercomment">
                <Link to={`/comments/${this.props.id}`} className="commentAuthor">{this.props.name}</Link>
                <div className="commentBody">{loremipsum.repeat(8)}</div>
            </div>)
    }
}