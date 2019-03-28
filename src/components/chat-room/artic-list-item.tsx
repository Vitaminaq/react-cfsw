import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "@src/router/routes";
import config from "../../config";
import { Time } from "@src/common/comjs";
import { saveView } from "@src/store/modules/chatroom/action";

interface ArticListItemProps {
  saveView: any;
  history: any;
  item: API.ChatRoom.ArticList.ListItem;
}

// activeClassName
class ArticListItem extends Component<ArticListItemProps, any> {
  public constructor(props: ArticListItemProps) {
    super(props);
  }
  public toDetail = async (): Promise<any> => {
    if (!event) return this;
    event.preventDefault();
    const res: API.ChatRoom.View.Response = await this.props.saveView({
      id: this.props.item.articId
    });
    if (res.data === "ok") {
      this.props.history.push("artic/detail");
    } else {
      console.log("请求失败");
    }
    return this;
  };
  public render() {
    const { item } = this.props;
    return (
      <li>
        {/* <Link> */}
        <a className="list-dom" onClick={this.toDetail}>
          <div className="artic-content">
            <div className="userImg">
              <img src={`${config.BASE_URL}${item.headimg}`} />
            </div>
            <div className="author">
              <div className="title">{item.title}</div>
              <span className="authormsg">作者：</span>
              <span className="authormsg authorname">{item.nickname}</span>
              <span className="publishtime publishtxt">发表于</span>
              <span className="publishtime">{Time(item.creatAt)}</span>
            </div>
          </div>
          <div className="oparatenum">
            <div className="hasborder">
              <img src={require("./images/view.svg")} alt="view" />
              {item.viewnum}
            </div>
            <div className="hasborder">
              <img src={require("./images/comment.svg")} alt="comment" />{" "}
              {item.commentnum}
            </div>
            <div>
              <img src={require("./images/click.svg")} alt="click" />
              {item.clicknum}
            </div>
          </div>
        </a>
        <style jsx>{`
          li {
            border-bottom: solid #adadad 0.013333rem;
            list-style: none;
          }

          .list-dom {
            height: 100%;
            width: 100%;
            text-decoration: none;
            color: #333;
          }

          .artic-content {
            width: 98%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            padding-left: 6%;
          }
          .userImg {
            padding-top: 0.3rem;
            font-size: 0.533333rem;
            font-weight: bold;
          }
          img {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
          }
          .author {
            width: 100%;
            font-size: 0.38rem;
            padding-top: 0.133333rem;
            margin-left: 0.5rem;
          }
          .title {
            width: 90%;
            font-size: 0.4rem;
            font-weight: bold;
          }
          .authorname {
            width: 15%;
          }
          .publishtime {
            font-size: 0.213333rem;
            color: #adadad;
          }
          .publishtxt {
            margin-left: 4%;
          }
          .oparatenum {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: 0.32rem;
            color: #adadad;
            text-align: center;
          }
          img {
            height: 0.4rem;
            width: 0.4rem;
            margin-right: 0.3rem;
          }
          div {
            width: 33%;
            padding-bottom: 0.1rem;
          }
          .hasborder {
            border-right: #adadad 1px solid;
          }
        `}</style>
        {/* </Link> */}
      </li>
    );
  }
}

export default connect(
  null,
  { saveView }
)(ArticListItem);
