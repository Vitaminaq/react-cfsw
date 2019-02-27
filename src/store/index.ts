import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as ChatRoom from './modules/chatroom/reducer';
import thunk from 'redux-thunk';

export default createStore(
	combineReducers({ ...ChatRoom }),
	applyMiddleware(thunk)
);
