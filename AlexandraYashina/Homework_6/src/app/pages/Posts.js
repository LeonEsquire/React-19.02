import React from 'react';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
    render() {
        return (
            <>
                {
                    (!this.props.children) ?
                    (<PostsList/>)
                    :
                    (this.props.children)
                }
            </>
        );
    }
}