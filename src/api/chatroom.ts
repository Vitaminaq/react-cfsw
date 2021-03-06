import { BaseAxios } from './index';

class Chatroom extends BaseAxios {
	// 获取文章列表
	public getArtic(
		params: API.ChatRoom.ArticList.RequestParams
	): Promise<API.ChatRoom.ArticList.Response> {
		return this.axios.get(`/api/user/chatroom`, params);
	}
	// 保存浏览数
	public saveView(
		params: API.ChatRoom.View.RequestParams
	): Promise<API.ChatRoom.View.Response> {
		return this.axios.post(`/api/user/view`, params);
	}
}

export default new Chatroom();
