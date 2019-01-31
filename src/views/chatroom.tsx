import React, { Component, Props } from 'react';
import { connect } from "react-redux";
import { assignParams, getArtic } from "../store/modules/chatroom/action";
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';
import ArticList from '../components/chat-room/artic-list'

interface ChatRoomProps extends Props<any> {
    getArtic: any;
    params: API.ChatRoom.ArticList.RequestParams;
    list: Array<API.ChatRoom.ArticList.ListItem>;
    location: any;
}

class ChatRoom extends Component<ChatRoomProps> {
    constructor(props: ChatRoomProps) {
        super(props);
    }
  componentDidMount() {
      const { getArtic, params } = this.props;
      getArtic(params);
  }
  render() {
      return (
          <div>
              <LogoHeader />
              <ArticList list={[...this.props.list] || []}/>
              <Footer pathName={this.props.location.pathname || ''} />
          </div>
      );
  }
}

interface ChatRoomState {
    listParams: API.ChatRoom.ArticList.RequestParams;
    getArticList: Array<API.ChatRoom.ArticList.ListItem>;
}

const mapStateToProps = (state: ChatRoomState) => {
    console.log(state, '>>>>>>>>>>>');
    return {
        params: state.listParams,
        list: state.getArticList
    };
};
export default connect(
    mapStateToProps,
    { assignParams, getArtic }
)(ChatRoom);