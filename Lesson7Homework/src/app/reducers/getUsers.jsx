import { GET_USERS, GET_USERS_CAUGHT } from "../actions/actionTypes";
const getUsersReducer = (state = {}, action) => {
  if (action.type === GET_USERS) {
    return { ...state, users: action}
  }
  if (action.type === GET_USERS_CAUGHT) {
    return { ...state, error: action.error}
  }
  return state;
};
export default getUsersReducer;
