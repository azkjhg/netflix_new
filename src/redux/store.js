import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers"

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store; // 이 스토어를 index.js가 쓴다.