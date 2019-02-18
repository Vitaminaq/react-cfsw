import { 
    ASSIGNPARAMS,
    PULLUP,
    PULLDOWN,
    PULLUPREQUESTSTATUS
} from './action-type';

export interface BaseParams {
	limit: number;
	page: number;
}
export type BaseRequestStatus =
	| 'unrequest'
	| 'requesting'
	| 'success'
	| 'error'
	| 'done';
export interface BaseArticListState {
	params: BaseParams;
	list: Array<API.ChatRoom.ArticList.ListItem>;
	pullDownStatus: BaseRequestStatus;
	pullUpStatus: BaseRequestStatus;
}
export interface ListParamsAction {
    type: string;
    params: API.ChatRoom.ArticList.RequestParams;
}
export interface BaseListAction extends BaseArticListState {
    type: string;
}

const baseState: BaseArticListState = {
    params: {
        limit: 9,
        page: 0
    },
    list: [],
    pullDownStatus: 'unrequest',
    pullUpStatus: 'unrequest'
}

// 文章列表state
export const articListState = (
    state: BaseArticListState = baseState,
    action: BaseListAction
): BaseArticListState => {
    switch(action.type) {
        // 合并页面参数
        case ASSIGNPARAMS:
            Object.assign(state.params, action.params);
            return {...state};
        // 更新上拉请求状态
        case PULLUPREQUESTSTATUS:
            state.pullUpStatus = action.pullUpStatus;
            return {...state};
        // 上拉加载
        case PULLUP:
            if (action.list.length < state.params.limit) {
                state.pullUpStatus = 'done';
            } else {
                state.pullUpStatus = 'success';
            }
            state.list.push(...action.list);
            state.params.page++
            // 解构触发视图更新
            return {
                params: state.params,
                list: [...state.list],
                pullDownStatus: state.pullDownStatus,
                pullUpStatus: state.pullUpStatus
            };
        // 下拉刷新
        case PULLDOWN:
            state.list = [...action.list];
            state.params.page = 0;
            return {
                params: state.params,
                list: [...state.list],
                pullDownStatus: state.pullDownStatus,
                pullUpStatus: state.pullUpStatus
            };
        default: 
            return state;
    }
}
