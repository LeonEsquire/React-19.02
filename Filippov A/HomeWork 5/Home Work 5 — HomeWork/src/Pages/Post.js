import React from 'react';
import PostsProfile from '../Components/Post';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.title}`)
        .then((response) => {
            this.setState({post: response.data});
        });
    }


    render() {
        
        return (
            <div>
                {this.state.post && <PostsProfile {...this.state.post} />}
            </div>
        );
    }
}