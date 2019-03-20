export default function reducer(state={
    comment: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_COMMENT": {
        return {...state, fetching: true}
      }
      case "FETCH_COMMENT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_COMMENT_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          comment: action.payload,
        }
      }
    }

    return state
}