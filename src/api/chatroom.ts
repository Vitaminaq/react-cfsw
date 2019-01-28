import { BaseAxios } from './index';

class Chatroom extends BaseAxios {
    // 获取文章列表
    getArtic(params: API.ChatRoom.ArticList.RequestParams): Promise<API.ChatRoom.ArticList.Response> {
        return this.axios.get(`/api/user/chatroom`, params);
    }
}

export default new Chatroom();
