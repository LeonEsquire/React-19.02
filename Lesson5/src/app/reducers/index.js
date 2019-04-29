import { combineReducers } from "redux"

import usersList from "./usersListReducer"
import user from "./userReducer"

export default combineReducers({
  usersList: usersList,
  user: user,
})