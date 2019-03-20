import React from 'react';
import UserUnique from '../components/UserUnique';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import UserPosts from '../components/UserPosts';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      btnText: 'Show posts'
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.params.userId));
  }

  render() {
    const {user} = this.props;
    let postsText;
    if(this.state.display) {
      postsText = <div>
          <UserPosts/>
      </div>;
    }
    return (
      <>
      <UserUnique {...user} />
      <a href="#" className="btn btn-primary" onClick={() => {
        this.setState({display: !this.state.display,
          btnText: this.state.btnText === 'Show posts' ? 'Hide posts' : 'Show posts'})
      }}>{this.state.btnText}</a>
      {postsText}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched
  };
}

export default connect(mapStateToProps)(UserProfile);