import React, { Component } from 'react';
import { BaseRequestStatus } from '../../store/modules/chatroom/reducer';
import inview from './inview';
import '../../style/components/scroller.scss';

React.PureComponent;
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
	private timer: any;
	private el: any;
	public constructor(props: UpLoadingProps) {
		super(props);
		this.timer = null;
		this.el = React.createRef();
	}
	public async componentDidMount() {
		await this.onSee();
		this.timer = setInterval(this.onSee.bind(this), 500);
	}
	public async reload() {
		const { pullUp, params } = this.props;
		await pullUp(params);
		this.timer = setInterval(this.onSee, 500);
	}
	public async onSee() {
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
	public componentWillUnmount() {
		clearInterval(this.timer);
	}
	public render() {
		const { pullUpStatus } = this.props;
		let dom = null;
		if (pullUpStatus === 'done') {
			dom = <span>无更多数据</span>;
		} else if (pullUpStatus === 'error') {
			dom = (
				<span onClick={this.reload.bind(this)}>
					加载失败，请点击重新加载
				</span>
			);
		} else {
			dom = <img src={require('./loading.gif')} alt="加载中..." />;
		}
		return (
			<div id="seeLoading" className="see-loading" ref={this.el}>
				{dom}
			</div>
		);
	}
}

export default UpLoading;
