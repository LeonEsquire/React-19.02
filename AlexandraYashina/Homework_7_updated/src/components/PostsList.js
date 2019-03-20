import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsActions';
import PostText from './PostText';

class PostsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        const {posts} = this.props;
        if (!posts.length) {
            return null;
        }
    
        const mappedPosts = posts.map((post, index) => {
          return <PostText key={index} {...post} />
        })
    
        return (
        <>
            <h1>Посты</h1>
            {mappedPosts}
         </>
        );
      }
    }

function mapStateToProps2(state) {
        return {
          posts: state.posts.posts,
          postsFetched: state.posts.fetched
        };
      }
    
export default connect(mapStateToProps2)(PostsList);