import React, { Component, Props } from 'react';
import { connect } from "react-redux";
import { pullUp } from "../store/modules/chatroom/action";
import { BaseArticListState } from "../store/modules/chatroom/reducer";
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';
import ArticList from '../components/chat-room/artic-list';
import Scroller from '../components/scroller/scroller';

interface ChatRoomProps extends Props<any> {
    pullUp: any;
    articListState: BaseArticListState;
    location: any;
}

class ChatRoom extends Component<ChatRoomProps> {
    constructor(props: ChatRoomProps) {
        super(props);
    }
    componentDidMount() {
        const { articListState, pullUp } = this.props;
        pullUp(articListState.params);
    }
    render() {
        const { articListState, location, pullUp } = this.props;
        const { list, pullDownStatus, pullUpStatus } = articListState;
        return (
            <div>
                <LogoHeader />
                <Scroller
                    pullDownStatus={pullDownStatus}
                    pullUpStatus={pullUpStatus}
                    listDom={<ArticList list={[...list]}/>}
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