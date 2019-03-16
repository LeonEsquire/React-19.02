import { GET_USERS, GET_USERS_CAUGHT } from "./actionTypes";
import axios from "axios";
function processUsers(data) {
    return { type: GET_USERS, data };
}
function processUsersCaught(error) {
    return { type: GET_USERS_CAUGHT, error };
}
export default function getUsers() {
    return dispatch => {
        dispatch(processUsers());
        return axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(resp => {
                dispatch(processUsers(resp.data));
            })
            .catch(error=> {
                dispatch(processUsersCaught(error))
            })
    };
}

