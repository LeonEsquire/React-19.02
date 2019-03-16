import getUser from "../actions/getUser";
const getUserReducer = (state = {}, action) => {
  if (action.type === "GET_USER") {
    return { ...state, user: action}
  }
  if (action.type === "GET_USER_CAUGHT") {
    return { ...state, error: action.error}
  }
  if (action.type === "DO_ACTION") {
    return { ...state, text: action.parameter}
  }
  return state;
};
export default getUserReducer;
