import React from 'react';
import CommentsList from '../components/CommentsList';


export default class Comments extends React.Component {
    render() {
        return (
            <>
                {
                    (!this.props.children) ?
                    (<CommentsList/>)
                    :
                    (this.props.children)
                }
            </>
        );
    }
}