import React from 'react';
import UsersList from '../components/UsersList';

const Users = (props) => {
  return (
    <>
    {
      (!props.children) ?
      (<UsersList/>)
      :
      (props.children)
    }
  </>
  );
}

export default Users;