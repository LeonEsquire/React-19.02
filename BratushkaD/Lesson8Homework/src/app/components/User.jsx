import React from 'react';
import {Link} from 'react-router-dom';

const User = (props) => {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${props.id}`}>{props.username}</Link>
        </div>
        <div className="card-body text-secondary">
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.website}</p>
        </div>
      </div>
    )
};
export default User;