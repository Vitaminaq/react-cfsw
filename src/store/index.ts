import * as ChatRoom from "./modules/chatroom/reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ ...ChatRoom }),
  composeWithDevTools(applyMiddleware(thunk))
);
