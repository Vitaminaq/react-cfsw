import { GETARTICDATA } from './action-type';

// class ChatRoomReducer {
export const getArticList = (state: any = [], action: any) => {
        switch(action.type) {
            case GETARTICDATA: 
                return [...state, ...action.list];
            default: 
                return state;
        }
    }
// }
