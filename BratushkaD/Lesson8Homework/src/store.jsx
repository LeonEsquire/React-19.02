import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
// import promise from "redux-promise-middleware"; -- я попробовал, но мне не очень понравилось изменение type, мне показалось менее муторным обрабатывать в action, как это указано в документации redux.js.org .
import reducers from "./app/reducers/combinedReducers";

const middleware = applyMiddleware(ReduxThunk, /*createLogger()*/);
const store = createStore(reducers, middleware);
export default store;
