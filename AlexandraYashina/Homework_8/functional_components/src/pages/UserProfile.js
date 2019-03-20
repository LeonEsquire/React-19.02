import React, { useState, useEffect } from 'react';
import User from '../components/User';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';

const UserProfile = props => {
  const [userInfo, setUserInfo] = useState(['']);

  useEffect(() => {
    setUserInfo(props.dispatch(fetchUser(props.params.userId)));
  }, []);

  return (
    <>
      <User {...props.user} />
    </>
    );
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched
  };
}

export default connect(mapStateToProps)(UserProfile);