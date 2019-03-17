import axios from 'axios';

export function fetchUsers() {
  return function(dispatch) {
    dispatch({type: "FETCH_USERS"});
    
    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data
        })
      })
      .catch((err) => {
        dispatch({type: "FETCH_USERS_REJECTED", payload: err})
      })
  }
}
