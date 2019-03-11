import React from 'react';
import UsersList from '../Components/UserList';
import PostStore from '../stores/postStore';
import {getPosts, addPost} from '../actions/postAction';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

newPost() {
    const body = 'Текст добавленного поста';
    const userId = 1;
    const title = 'Мой пост';

    addPost(title, userId, body); 
}
    

onPostChange() {
    this.setState({posts: PostStore.posts});
}

componentDidMount() {
    getPosts();
    PostStore.on('change', this.onPostChange)
}

    render() {
        
        return (
            <div>
                <button className="btn btn-primary"  onClick={this.newPost}>Добавить пост</button>
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}