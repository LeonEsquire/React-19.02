import React from 'react';

export default class Post extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>Посты</h1>
                <p>тут будут посты</p>
                <p>Номер поста: {this.props.params.number}</p>
            </div>
        );
    }
}