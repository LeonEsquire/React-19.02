import React from 'react';
import CommentList from '../components/CommentList';


class Comments extends React.Component{
    render(){
        return(
            <div>{
                     (!this.props.children) ?
                    (<CommentList/>)
                    :
                    (this.props.children)
            }
            </div>
        )
    }
}

export default Comments;