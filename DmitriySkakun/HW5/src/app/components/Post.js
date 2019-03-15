import React from 'react';
import {Link} from 'react-router'


class PostCard extends React.Component{
    render(){
        return(
           <div className="card border-secondary mb-3">
            <div className="card-header">
                 <Link to={`/posts/${this.props.id}`}>{this.props.userId}</Link>
            </div>
            <div className="card-body text-secondary">
                <p><b>Заголовок:</b> {this.props.title}</p>
                <p><b>Сообщение:</b> {this.props.body}</p>
            </div>
           </div>
        )
    }
}

export default PostCard;