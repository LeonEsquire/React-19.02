import { combineReducers } from "redux";
// reducers imports
import getUserReducer from "./getUser";

const reducers = combineReducers({
    getUserReducer: getUserReducer
});
export default reducers;