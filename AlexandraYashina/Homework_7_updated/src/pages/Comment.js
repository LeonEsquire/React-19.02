import React from 'react';
import CommentText from '../components/CommentText';
import {connect} from 'react-redux';
import {fetchComment} from '../actions/commentActions';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchComment(this.props.params.commentId));
  }

  render() {
    const {comment} = this.props;
    return <CommentText {...comment} />
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment.comment,
    commentFetched: state.comment.fetched
  };
}

export default connect(mapStateToProps)(Comment);