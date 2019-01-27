import { BaseAxios } from './index';

export default class Chatroom extends BaseAxios {
    getArtic(params: any) {
        return this.axios.get(`/api/user/chatroom`, params);
    }
}
