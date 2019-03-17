import React from "react";
import {Link} from "react-router";
export default class UserProfile extends React.Component {
    render() {
        return (
            <div className={"users"}>
                <Link className="to-user" to={`/users/${this.props.id}`}>{this.props.username}</Link>
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.website}</p>
            </div>
            </div>)
    }
}