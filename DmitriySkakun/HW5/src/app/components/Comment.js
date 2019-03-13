import React from 'react';
import {Link} from 'react-router'


class CommentCard extends React.Component{
    render(){
        return(
           <div className="card border-secondary mb-3">
            <div className="card-header">
                <Link to={`/comments/${this.props.id}`}>{this.props.postId}</Link>
            </div>
            <div className="card-body text-secondary">
                <p><b>Имя:</b> {this.props.name}</p>
                <p><b>Почта:</b> {this.props.email}</p>
                <p><b>Сообщение:</b> {this.props.body}</p>
            </div>
           </div>
        )
    }
}

export default CommentCard;