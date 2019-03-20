import axios from 'axios';

export function fetchPosts() {
  return {
    type: "FETCH_POSTS",
    payload: axios.get("https://jsonplaceholder.typicode.com/posts/").then(response => response.data).catch(err => err)
  }
}