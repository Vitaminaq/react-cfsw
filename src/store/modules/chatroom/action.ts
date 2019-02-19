import {
    PULLUPREQUESTSTATUS,
    PULLUP,
    ASSIGNPARAMS,
    PULLDOWNREQUESTSTATUS,
    PULLDOWN,
    SAVEVIEWSUCCESS,
    SAVEVIEWFAIl
} from './action-type';
import api from '../../../api/chatroom';

// 合并页面参数
export const assignParams = (params: API.ChatRoom.ArticList.RequestParams) => {
    return (dispatch: any) => {
        return dispatch({
            type: ASSIGNPARAMS,
            params
        })
    }
}
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

// 下拉加载
export const pullDown = () => {
    const params = {
        page: 0,
        limit: 9
    }
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNPARAMS,
            params
        })
        dispatch({
            type: PULLDOWNREQUESTSTATUS,
            pullDownStatus: 'requesting'
        })
        const res = await api.getArtic(params);
        if (!res || res.code !== 0 || !res.data || !Array.isArray(res.data.list))
			return dispatch({
                type: PULLUPREQUESTSTATUS,
                pullDownStatus: 'error'
            });
        return dispatch({
            type: PULLDOWN,
            list: res.data.list
        })
    }
}

// 浏览文章
export const saveView = (params: API.ChatRoom.View.RequestParams) => {
    return async (dispatch: any) => {
        const res = await api.saveView(params);
        if (res.code === 0 && res.data)
			return dispatch({
                type: SAVEVIEWSUCCESS,
                data: res.data
            })
		return dispatch({
            type: SAVEVIEWFAIl,
            data: res.data
        })
    }
}