import React from 'react';
import CommentList from '../Components/CommentsList';

export default class Comments extends React.Component {
    render() {
        
        return (
            <div>
                {
                    (!this.props.children) ?
                    (<CommentList />)
                    :
                    (this.props.children)
                }
            </div>
        );
    }
}