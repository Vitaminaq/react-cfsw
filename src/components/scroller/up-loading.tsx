import React, { Component } from 'react';
import { BaseRequestStatus } from "../../store/modules/chatroom/reducer";
import inview from './inview';

/**
 * 加载的几种状态
 * 未加载   unrequest
 * 正在加载 requesting
 * 加载成功 success
 * 请求失败 failure
 * 加载失败 error
 * 全部加载 done
 */
interface UpLoadingProps {
    pullDownStatus: BaseRequestStatus;
    pullUpStatus: BaseRequestStatus;
    pullUp: any;
    params: any;
}

class UpLoading extends Component<UpLoadingProps, any> {
    timer: any;
    el: any;
    constructor(props: UpLoadingProps) {
        super(props);
        this.timer = null;
        this.el = React.createRef();
    }
    async componentDidMount() {
        await this.onSee();
		this.timer = setInterval(this.onSee.bind(this), 500);
	}
	async reload() {
        const { pullUp, params } = this.props;
		await pullUp(params);
		this.timer = setInterval(this.onSee, 500);
	}
	async onSee() {
        const { pullUpStatus, pullUp, params } = this.props;
		let isSee = inview(this.el.current, {});
		if (
			isSee &&
			pullUpStatus !== 'requesting' &&
			pullUpStatus !== 'done' &&
			pullUpStatus !== 'error'
		) {
            await pullUp(params);
		}
		if (pullUpStatus === 'error') {
			clearInterval(this.timer);
		}
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
    render() {
        const { pullUpStatus } = this.props;
        let dom = null;
        if (pullUpStatus === 'done') {
            dom = <span>无更多数据</span>
        } else if (pullUpStatus === 'error') {
            dom = <span onClick={this.reload.bind(this)}>加载失败，请点击重新加载</span>
        } else {
            dom = <img src={require("./loading.gif")} alt="加载中..." />
        }
        return (
            <div id="seeLoading" className="see-loading" ref={this.el}>
                {dom}
	        </div>
        )
    }
}

export default UpLoading;
