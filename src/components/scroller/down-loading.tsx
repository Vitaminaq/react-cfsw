import React, { Component } from "react";
import { BaseRequestStatus } from "../../store/modules/chatroom/reducer";

/**
 * 加载的几种状态
 * 未加载   unrequest
 * 正在加载 requesting
 * 加载成功 success
 * 请求失败 failure
 * 加载失败 error
 * 全部加载 done
 */
interface ScrollerProps {
	pullDownStatus: BaseRequestStatus;
	pullUpStatus: BaseRequestStatus;
}

class DownLoading extends Component<any, any> {
	constructor(props: ScrollerProps) {
		super(props);
	}
	render() {
		return <div>123</div>;
	}
}

export default DownLoading;
