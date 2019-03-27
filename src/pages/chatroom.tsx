import React, { PureComponent, Props } from "react";
import { connect } from "react-redux";
import { pullUp } from "../store/modules/chatroom/action";
import { BaseArticListState } from "../store/modules/chatroom/reducer";
interface ChatRoomProps extends Props<any> {
  pullUp: any;
  articListState: BaseArticListState;
  location: any;
  history: History;
}

// PureComponent做了层浅比较，不用手动触发更新
class ChatRoom extends PureComponent<ChatRoomProps> {
  public constructor(props: ChatRoomProps) {
    super(props);
  }
  public pullUp() {
    this.props.pullUp();
  }
  public render() {
    return <div>......fdsfdsfds</div>;
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
