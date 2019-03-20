import React from 'react';
import {connect} from 'react-redux';
import PostText from './PostText';
import {fetchPosts} from '../actions/postsActions';


class UserPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        if (!this.props.posts.length) {
            return null;
        }

        const postsByUser = this.props.posts.filter(function(post, index) {
            if (post.userId == window.location.pathname.substr(7)) {
                return post;
            }
        });
        const posts = postsByUser.map(function(post, index) {
            return <PostText key={index} {...post} />
        });

        return (
        <>
        <br></br>
            {posts}
         </>
        );
    }
}

function mapStateToProps(state) {
        return {
          posts: state.posts.posts,
          postsFetched: state.posts.fetched
        };
}

export default connect(mapStateToProps)(UserPosts);

    
// export default connect(mapStateToProps)(CommentsList);
//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => {
//             const comments = response.data.filter(function(comment) {
//                 return comment.userId == window.location.pathname.substr(7);
//                 });
//             this.setState({comments});
//         })
//     }

//     render() {
//         if (!this.state.comments.length) {
//             return null;
//         }

//         const comments = this.state.comments.map((comment, index) => {
//             return <CommentText key={index} {...comment} />
//         })

//         return (
//         <>
//         <br></br>
//             {comments}
//          </>
//         );
//     }
// }