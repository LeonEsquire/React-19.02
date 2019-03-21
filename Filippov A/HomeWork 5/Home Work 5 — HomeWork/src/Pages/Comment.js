import React from 'react';
import CommentProfile from '../Components/Comments';
import axios from 'axios';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
        .then((response) => {
            this.setState({comment: response.data});
        });
    }


    render() {
        
        return (
            <div>
                {this.state.comment && <CommentProfile {...this.state.comment} />}
            </div>
        );
    }
}