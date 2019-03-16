import React, { Component } from "react";
import User from "./User";
import getUsers from "../actions/getUsers";
import { connect } from "react-redux";
class UsersList extends Component {
  render() {
    // я вот тут что-то запутался. подскажите пожалуйста, норм сделал?
    const { users } = this.props;
    let processedUsers;
    if (users) {
      users.data
        ? (processedUsers = users.data.map((user, index) => {
            return <User key={index} {...user} />;
          }))
        : null;
    }
    //
    /* По какой-то причине вылетает ошибка: "react-dom.development.js:506 Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state." — исправить не смог*/
    return (
      <div>
        <h1>Пользователи</h1>
        {processedUsers}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.getUsersReducer.users,
    error: state.getUsersReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: dispatch(getUsers())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
