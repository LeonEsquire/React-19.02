import React from 'react';
import axios from 'axios';
import Comments from './Comments';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => {
      this.setState({comments: response.data})
    })
  }

  render() {
    if(!this.state.comments.length) {
      return null; //можно поставить анимацию часы ожидания например
    }

    const comments = this.state.comments.map((comment, index) => {
      return <Comments key={index} {...comment} />
    })

    return (
      <div>
        <h1>Комментарии</h1>
        {comments}
      </div>
    );
  }
}





