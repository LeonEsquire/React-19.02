import React from 'react';
import PostText from '../components/PostText';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/postActions';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.params.postId));
  }

  render() {
    const {post} = this.props;
    return <PostText {...post} />
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.post,
    postFetched: state.post.fetched
  };
}

export default connect(mapStateToProps)(Post);