import axios from 'axios';

export function fetchComment(commentId) {
  return function(dispatch) {
    dispatch({type: "FETCH_COMMENT"});
    
    axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((response) => {
        dispatch({type: "FETCH_COMMENT_FULFILLED", payload: response.data
        })
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMMENT_REJECTED", payload: err})
      })
  }
}
