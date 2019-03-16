import React from "react";
import {Link} from "react-router";

export default class MenuItem extends React.Component {
    render() {
        return (
            <li>
                <Link to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}