import React from 'react';
import UsersList from '../components/UsersList';

const Users = props => {
    return (
      <div>
        {
          (!props.children) ?
          (<UsersList/>)
          :
          (props.children)
        }
      </div>
    )
};
export default Users;