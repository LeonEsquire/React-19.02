import axios from 'axios'

export function fetchUser(userId) {
    return function (dispatch) {
        dispatch({ type: "FETCH_USER" });

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                dispatch({ type: "FETCH_USER_FULFILED", payload: res.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: err })
            }
            )
    }
}