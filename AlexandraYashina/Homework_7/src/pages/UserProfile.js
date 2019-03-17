import React from 'react';
import User from '../components/User';

export default class UserProfile extends React.Component {
  render() {
    return (
      <>
        <User userId={this.props.params.userId}/>
      </>
    );
  }
}