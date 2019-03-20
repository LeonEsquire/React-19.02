import axios from 'axios';

export function fetchPost(postId) {
  return function(dispatch) {
    dispatch({type: "FETCH_POST"});
    
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        dispatch({type: "FETCH_POST_FULFILLED", payload: response.data
        })
      })
      .catch((err) => {
        dispatch({type: "FETCH_POST_REJECTED", payload: err})
      })
  }
}
