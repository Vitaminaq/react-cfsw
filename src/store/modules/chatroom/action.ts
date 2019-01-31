import { GETARTICDATA, ASSIGNPARAMS, ADDPAGE } from './action-type';
import api from '../../../api/chatroom';

// 合并参数
export const assignParams = (
    params: API.ChatRoom.ArticList.RequestParams
) => {
    return (dispatch: any) => {
        return dispatch({
            type: ADDPAGE,
            params
        });
    }
}

// 获取文章列表
export const getArtic = (params: API.ChatRoom.ArticList.RequestParams) => {
    return async (dispatch: any) => {
        const res = await api.getArtic(params);
        return dispatch({
            type: GETARTICDATA,
            list: res.data.list || []
        });
    }
}
