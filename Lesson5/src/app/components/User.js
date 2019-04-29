import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions'

class User extends React.Component {

  componentDidMount() {
    if (this.props.id) {
      this.props.dispatch(
        fetchUser(this.props.id)
      );
    }
  }
  render() {

    const userOne = this.props;
    return (
      <div key={userOne.id} className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${userOne.id}`}>{userOne.username}</Link>
        </div>
        <div className="card-body text-secondary">
          <p>{userOne.name}</p>
          <p>{userOne.email}</p>
          <p>{userOne.phone}</p>
          <p>{userOne.website}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userData,
    userFetched: state.user.fetched
  }
}
export default connect(mapStateToProps)(User) 