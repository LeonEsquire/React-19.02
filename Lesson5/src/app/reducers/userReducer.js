const InitState = {
  userData: {
    id: null,
    username: "",
    name: "",
    email: "",
    phone: "",
    website: ""
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state = InitState, action) {

  switch (action.type) {
    case "FETCH_USER": {
      return { ...state, fetching: true }
    }
    case "FETCH_USER_REJECTED": {
      return { ...state, fetching: false, error: action.payload }
    }
    case "FETCH_USER_FULFILED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        userData: action.payload,
      }
    }
    case "SET_USER_NAME": {
      return {
        ...state,
        userData: { ...state.user, name: action.payload },
      }
    }
    case "SET_USER_AGE": {
      return {
        ...state,
        userData: { ...state.user, age: action.payload },
      }
    }
  }

  return state
}