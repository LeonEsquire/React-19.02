import axios from 'axios';

export function fetchComments() {
  return {
    type: "FETCH_COMMENTS",
    payload: axios.get("https://jsonplaceholder.typicode.com/comments/").then(response => response.data).catch(err => err)
  }
}