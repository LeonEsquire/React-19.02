import React from "react";
import { Link } from "react-router";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "Blog written in React";
  }
  compareLoc(link) {
    return window.location.pathname === link;
  }
  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.compareLoc("/")}>Главная</MenuItem>
          <MenuItem href="/users" active={this.compareLoc("/users")}>Пользователи</MenuItem>
        </Menu>
        <div className="actionBody">
          {this.props.children}
        </div>
        <footer className="footer">
           &copy; 2019
        </footer>
      </div>
    );
  }
}
