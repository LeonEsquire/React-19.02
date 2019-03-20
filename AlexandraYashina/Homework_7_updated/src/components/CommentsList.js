import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/commentsActions';
import CommentText from './CommentText';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        this.props.dispatch(fetchComments())
      }

    render() {
        const {comments} = this.props;
        if (!comments.length) {
            return null;
        }
    
        const mappedComments = comments.map((comment, index) => {
          return <CommentText key={index} {...comment} />
        })
    
        return (
        <>
            <h1>Комментарии</h1>
            {mappedComments}
         </>
        );
      }
    }

function mapStateToProps(state) {
        return {
          comments: state.comments.comments,
          commentsFetched: state.comments.fetched
        };
      }
    
export default connect(mapStateToProps)(CommentsList);