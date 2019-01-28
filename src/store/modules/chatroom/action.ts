import { GETARTICDATA } from './action-type';
// import BaseLoadData from '../../../common/base-load-data';
import api from '../../../api/chatroom';

// class ChatRoomAction extends BaseLoadData {
//     constructor() {
//         super(new Api);
//     }
//     async getArtic(params: any) {
//         return async (dispatch: any) => {
//            const res = await new Api().getArtic(params);
//             dispatch({
//                 type: GETARTICDATA,
//                 list: res.data.list
//             })
//         }
        
//     }
// }

// export default new ChatRoomAction();

// 获取文章列表
export const getArtic = (params: API.ChatRoom.ArticList.RequestParams) => {
    return async (dispatch: any) => {
        const res = await api.getArtic(params);
        return dispatch({
            type: GETARTICDATA,
            list: res.data.list || []
        })
    }
}
