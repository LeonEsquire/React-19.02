import { combineReducers } from "redux"

import users from "./usersReducer"
import user from "./userReducer"
import posts from "./postsReducer"
import post from "./postReducer"
import comments from "./commentsReducer"
import comment from "./commentReducer"


export default combineReducers({
  users: users,
  user: user,
  posts: posts,
  post: post,
  comments: comments,
  comment: comment
})
