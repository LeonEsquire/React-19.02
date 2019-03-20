import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';
import UserUnique from '../components/UserUnique';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const {users} = this.props;
    if (!users.length) {
        return null;
    }

    const mappedUsers = users.map((user, index) => {
      return <UserUnique key={index} {...user} />
    })

    return (
    <>
        <h1>Пользователи</h1>
        {mappedUsers}
     </>
    );
  }
}

function mapStateToProps(state) {
    return {
      users: state.users.users,
      usersFetched: state.users.fetched
    };
  }

export default connect(mapStateToProps)(UsersList);