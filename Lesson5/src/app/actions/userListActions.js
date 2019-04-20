import axios from 'axios'

export function fetchUserList(userId) {
    return function (dispatch) {
        dispatch({ type: "FETCH_USERS_LIST" });

        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => {
                dispatch({ type: "FETCH_USERS_LIST_FULFILED", payload: res.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_USERS_LIST_REJECTED", payload: err })
            }
            )
    }
}