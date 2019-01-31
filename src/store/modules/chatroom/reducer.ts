import { GETARTICDATA, ASSIGNPARAMS, ADDPAGE } from './action-type';

export interface ListParamsAction {
    type: string;
    params: API.ChatRoom.ArticList.RequestParams;
}
export interface ArticListAction {
    type: string;
    list: Array<API.ChatRoom.ArticList.ListItem>;
}

const ListParamsState: API.ChatRoom.ArticList.RequestParams = {
    limit: 9,
    page: 0
}

// 合并请求参数
export const listParams = (
    state: API.ChatRoom.ArticList.RequestParams = ListParamsState,
    action: ListParamsAction
): API.ChatRoom.ArticList.RequestParams =>
{
    switch(action.type) {
        case ADDPAGE:
            return {
                limit: action.params.limit,
                page: action.params.page++
            };
        case ASSIGNPARAMS:
            return action.params;
        default:
            return state;
    }
}

// 文章列表state
export const getArticList = (
    state: Array<API.ChatRoom.ArticList.ListItem> = [],
    action: ArticListAction
): Array<API.ChatRoom.ArticList.ListItem> => {
    console.log(state, action);
    switch(action.type) {
        case GETARTICDATA: 
            return [...action.list];
        default: 
            return state;
    }
}
