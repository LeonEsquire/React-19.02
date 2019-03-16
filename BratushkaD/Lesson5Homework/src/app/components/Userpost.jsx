import React from "react";
import {Link} from "react-router";
export default class CompUserpost extends React.Component {
    render() {
        const loremipsum = this.props.address.city;
        return  (
                <div className="userpost">
                    <Link to={`/posts/${this.props.id}`} className="postAuthor">{this.props.name}</Link>
                    <div className="postBody">{loremipsum.repeat(8)}</div>
                    <div className="postcontact">{this.props.email}</div>
                </div>)
    }
}