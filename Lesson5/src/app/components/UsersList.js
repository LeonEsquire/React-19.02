import React from 'react';
import { connect } from 'react-redux';

import User from './User';
import { fetchUserList } from '../actions/userListActions';

class UsersList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserList())
  }

  render() {
    

    const users = this.props.usersList.map((user, index) => {
      return <User key={user.id} {...user} />
    })
    console.log("this.props.usersList", this.props.usersList);
    return (
      !this.props.usersList.length ?
      <h1>Идет загрузка данных ... </h1>
      :
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    usersList: state.usersList.list,
    usersListFetched: state.usersList.fetched
  }
}
export default connect(mapStateToProps)(UsersList) 