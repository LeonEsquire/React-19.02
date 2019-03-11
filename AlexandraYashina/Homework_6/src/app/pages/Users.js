import React from 'react';
import UsersList from '../components/UsersList';
import UserStore from '../stores/userStore';
import {getUsers} from '../actions/userActions';


export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        // this.newPost = this.newPost.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    // newPost() {
    //     const body = 'Текст добавленного поста';
    //     const userId = 1;
    //     const title = 'Мой пост';

    //     addPost(title, userId, body);
    // }

    onUserChange() {
        this.setState({users: UserStore.users});
    }

    componentDidMount() {
        getUsers();
        UserStore.on('change', this.onUserChange);
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <div>
            <UsersList users={this.state.users}/>
          </div>
        );
    }
}