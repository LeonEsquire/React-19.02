import React from 'react';
import UsersList from '../components/UsersList';

export default class Users extends React.Component {
  render() {
    return (
      <>
        {
          (!this.props.children) ?
          (<UsersList/>)
          :
          (this.props.children)
        }
      </>
    );
  }
}