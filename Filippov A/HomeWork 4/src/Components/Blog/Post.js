import React from 'react';

export default class Post extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            posts: this.props.items
        };
        
        this.myPost = React.createRef();
        this.myPostText = React.createRef();
        this.addPosts = this.addPosts.bind(this);
    }
    
    addPosts() {
        console.log('Добавление новости');
        const newPost = this.myPost.current.value;
        const newPostText = this.myPostText.current.value;
        this.myPost.current.value = '';
        this.myPostText.current.value = '';
        const newPostNews = <div>
            <h1>{newPost}</h1>
            <p>{newPostText}</p>
            <br />
            <hr />
        </div>;
        const posts = [...this.state.posts, newPostNews];
        this.setState({posts});
        
    }

    render()
    {
        
        return (
            <div>
                <div>{this.state.posts}</div>
                <h3>Добавить новость:</h3>
                <br />
                <p>
                    <b>Тема новости</b>
                    <br />
                    <input ref={this.myPost} type="text" />
                </p>

                <p>Содержимое новости:</p>
                <textarea ref={this.myPostText} name="text" rows="5" cols="50"/>
                <br />
                <br />
                <button onClick={this.addPosts}>Добавить новость</button>

            </div>
        );
    }
}