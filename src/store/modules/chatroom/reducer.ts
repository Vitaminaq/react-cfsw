import { GETARTICDATA } from './action-type';

export interface ArticListAction {
    type: string;
    list: Array<API.ChatRoom.ArticList.ListItem>;
}
// class ChatRoomReducer {
export const getArticList = (state: Array<API.ChatRoom.ArticList.ListItem> = [], action: ArticListAction) => {
    switch(action.type) {
        case GETARTICDATA: 
            return [...action.list];
        default: 
            return state;
    }
}
// }
