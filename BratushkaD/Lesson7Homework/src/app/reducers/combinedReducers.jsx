import { combineReducers } from "redux";
// reducers imports
import getUserReducer from "./getUser";
import getUsersReducer from "./getUsers";
const reducers = combineReducers({
    getUserReducer,
    getUsersReducer
});
export default reducers;