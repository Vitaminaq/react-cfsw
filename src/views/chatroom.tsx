import React, { PureComponent, Props } from 'react';
import { connect } from 'react-redux';
import { pullUp } from '../store/modules/chatroom/action';
import { BaseArticListState } from '../store/modules/chatroom/reducer';
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';
import ArticList from '../components/chat-room/artic-list';
import Scroller from '../components/scroller/scroller';

interface ChatRoomProps extends Props<any> {
	pullUp: any;
	articListState: BaseArticListState;
	location: any;
	history: History;
}

// PureComponent做了层浅比较，不用手动触发更新
class ChatRoom extends PureComponent<ChatRoomProps> {
	constructor(props: ChatRoomProps) {
		super(props);
		console.log(this);
	}
	pullUp() {
		this.props.pullUp();
	}
	render() {
		const { articListState, location, pullUp, history } = this.props;
		const { pullDownStatus, pullUpStatus } = articListState;
		return (
			<div>
				<LogoHeader />
				<Scroller
					pullDownStatus={pullDownStatus}
					pullUpStatus={pullUpStatus}
					listDom={<ArticList history={history} />}
					pullUp={pullUp}
					params={articListState.params}
				/>
				<Footer pathName={location.pathname || ''} />
			</div>
		);
	}
}

interface ChatRoomState {
	articListState: BaseArticListState;
}

const mapStateToProps = (state: ChatRoomState) => {
	return {
		articListState: state.articListState
	};
};
export default connect(
	mapStateToProps,
	{ pullUp }
)(ChatRoom);
