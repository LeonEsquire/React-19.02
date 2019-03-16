import { GET_USER, GET_USER_CAUGHT } from "../actions/actionTypes";
const getUserReducer = (state = {}, action) => {
  if (action.type === GET_USER) {
    return { ...state, user: action}
  }
  if (action.type === GET_USER_CAUGHT) {
    return { ...state, error: action.error}
  }
  return state;
};
export default getUserReducer;
