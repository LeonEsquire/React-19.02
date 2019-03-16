import React from "react";
import { Link } from "react-router";
export default class Menu extends React.Component {
    render() {
        return (
            <nav>
                <div><Link to="/">{this.props.brand}</Link></div>
                <div>
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
        </nav>)
    }
}