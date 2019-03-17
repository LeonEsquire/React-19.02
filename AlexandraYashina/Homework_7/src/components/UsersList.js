import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';
import {Link} from 'react-router';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const {users} = this.props;
    const mappedUsers = users.map(user =>
    <div key={user.id} className="card border-secondary mb-3">
    <div className="card-header">
      <Link to={`/users/${user.id}`}>{user.username}</Link>
    </div>
    <div className="card-body text-secondary">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  </div>);

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