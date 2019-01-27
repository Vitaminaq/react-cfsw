import { GETARTICDATA } from './action-type';
import BaseLoadData from '../../../common/base-load-data';
import Api from '../../../api/chatroom';

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
export const getArtic = (params: any) => {
    return async (dispatch: any) => {
            const res = await new Api().getArtic(params);
            dispatch({
                type: GETARTICDATA,
                list: res.data.list
            })
    }
}
