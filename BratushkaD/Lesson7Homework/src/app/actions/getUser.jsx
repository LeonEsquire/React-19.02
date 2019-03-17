import { GET_USER, GET_USER_CAUGHT } from "./actionTypes";
import axios from "axios";
function processUser(id, data) {
  return { type: GET_USER, id, data };
}
function processUserCaught(id, error) {
  return { type: GET_USER_CAUGHT, id, error };
}
export default function getUser(id) {
  return dispatch => {
    dispatch(processUser(id));
    return axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => {
          dispatch(processUser(id, resp.data));
        })
        .catch(error=> {
          dispatch(processUserCaught(id, error))
        })
  };
}

