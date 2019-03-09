import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${this.props.id}`}>{this.props.title}</Link>
                </div>
                <div className="card-body text-secondary">
                    <b>Номер статьи: {this.props.id}</b><br/>
                    <br />
                    <b>Название статьи:</b>
                    <p>{this.props.title}</p>
                    <b>Статья:</b>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}