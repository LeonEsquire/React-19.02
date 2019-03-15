import React from 'react';
import CommentCard from '../components/Comment';
import axios from 'axios';


class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: null
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.postId}`)
        .then((response) => {
            this.setState({comment: response.data});
        });
    }

    render(){
        return(
            <div>
                {this.state.comment && <CommentCard {...this.state.comment}/>}
            </div>
        );
    }
}

export default Comment;