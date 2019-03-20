export default function reducer(state={
    comments: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_COMMENTS_PENDING": {
        return {...state, fetching: true}
      }
      case "FETCH_COMMENTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_COMMENTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          comments: action.payload,
        }
      }
    }

    return state
}
