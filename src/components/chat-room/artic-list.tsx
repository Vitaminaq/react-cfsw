import React, { Component } from "react";
import { connect } from "react-redux";
import { BaseArticListState } from "../../store/modules/chatroom/reducer";
import ArticListItem from "../../components/chat-room/artic-list-item";

interface ArticListProps {
  articList: API.ChatRoom.ArticList.ListItem[];
  history: History;
}

// activeClassName
class ArticList extends Component<ArticListProps, any> {
  public constructor(props: ArticListProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const { articList, history } = this.props;
    return (
      <ul className="component-artic-list">
        {articList.map((i: API.ChatRoom.ArticList.ListItem) => {
          return <ArticListItem key={i.articId} history={history} item={i} />;
        })}
        <style jsx>{`
          .component-artic-list {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            margin-top: 36px;
            overflow-x: hidden;
          }
        `}</style>
      </ul>
    );
  }
}

interface ArticListState {
  articListState: BaseArticListState;
}
const mapStateToProps = (state: ArticListState) => {
  return {
    articList: state.articListState.list
  };
};
export default connect(
  mapStateToProps,
  {}
)(ArticList);
