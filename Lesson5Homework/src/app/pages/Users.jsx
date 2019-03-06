import React from "react";
import UsersList from "./../components/Users";
export default class Users extends React.Component {
  render() {
    return (<div>
          { !this.props.children ? <UsersList/> : this.props.children}
        </div>);
  }
}