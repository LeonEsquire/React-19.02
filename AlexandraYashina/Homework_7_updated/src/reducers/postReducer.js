export default function reducer(state={
    post: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_POST": {
        return {...state, fetching: true}
      }
      case "FETCH_POST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_POST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          post: action.payload,
        }
      }
    }

    return state
}