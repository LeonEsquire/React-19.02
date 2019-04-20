const InitState = {
    list:[ {
        id: null,
        username:"",
        name: "",
        email: "",
        phone: "",
        website: ""
      }],
      fetching: false,
      fetched: false,
      error: null
}
        
export default function reducer(state=InitState, action) {

    switch (action.type) {
      case "FETCH_USERS_LIST": {
        return {...state, fetching: true}
      }
      case "FETCH_USERS_LIST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USERS_LIST_FULFILED": {
        console.log("###FETCH_USERS_LIST_FULFILED", action.payload);
        return {
          ...state,
          fetching: false,
          fetched: true,
          list: action.payload,
        }
      }   
    }

    return state
}