import { combineReducers } from "redux"

import users from "./usersReducer"
import user from "./userReducer"

export default combineReducers({
  users: users,
  user: user
})
