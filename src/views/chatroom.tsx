import React, { Component, Props } from 'react';
import { connect } from "react-redux";
import { getArtic } from "../store/modules/chatroom/action";
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';
import ArticList from '../components/chat-room/artic-list'

interface ChatRoomProps extends Props<any> {
  getArtic: any;
  list: Array<API.ChatRoom.ArticList.ListItem>
  location: any;
}

class ChatRoom extends Component<ChatRoomProps> {
  constructor(props: ChatRoomProps) {
    super(props);
  }
  componentDidMount() {
    const params:API.ChatRoom.ArticList.RequestParams = {
      limit: 9,
			page: 0
    };
    this.props.getArtic(params);
  }
  render() {
    const { location, list } = this.props;
    return (
      <div>
        <LogoHeader />
        <ArticList list={[...list] || []}/>
        <Footer pathName={location.pathname || ''} />
      </div>
    );
  }
}

interface ChatRoomState {
  getArticList: Array<API.ChatRoom.ArticList.ListItem>;
}

const mapStateToProps = (state: ChatRoomState) => {
  return { list: state.getArticList };
};
export default connect(
  mapStateToProps,
  { getArtic }
)(ChatRoom);