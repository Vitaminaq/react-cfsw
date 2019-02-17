import { PULLUPREQUESTSTATUS, PULLUP } from './action-type';
import api from '../../../api/chatroom';

// 上拉加载
export const pullUp = (params: API.ChatRoom.ArticList.RequestParams) => {
    return async (dispatch: any) => {
        dispatch({
            type: PULLUPREQUESTSTATUS,
            pullUpStatus: 'requesting'
        })
        const res = await api.getArtic(params);
        if (!res || res.code !== 0 || !res.data || !Array.isArray(res.data.list))
			return dispatch({
                type: PULLUPREQUESTSTATUS,
                pullUpStatus: 'error'
            });
        return dispatch({
            type: PULLUP,
            list: res.data.list
        })
    }
}
