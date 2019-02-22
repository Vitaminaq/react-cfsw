import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style/components/artic-list.scss";
import config from "../../config";
import { Time } from "../../common/comjs";
import { saveView } from "../../store/modules/chatroom/action";

interface ArticListItemProps {
	saveView: any;
	history: any;
	item: API.ChatRoom.ArticList.ListItem;
}

// activeClassName
class ArticListItem extends Component<ArticListItemProps, any> {
	constructor(props: ArticListItemProps) {
		super(props);
	}
	toDetail = async (): Promise<any> => {
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
	render() {
		const { item } = this.props;
		return (
			<li>
				<Link className="list-dom" onClick={this.toDetail} to="#">
					<div className="artic-content">
						<div className="userImg">
							<img src={`${config.BASE_URL}${item.headimg}`} />
						</div>
						<div className="author">
							<div className="title">{item.title}</div>
							<span className="authormsg">作者：</span>
							<span className="authormsg authorname">
								{item.nickname}
							</span>
							<span className="publishtime publishtxt">
								发表于
							</span>
							<span className="publishtime">
								{Time(item.creatAt)}
							</span>
						</div>
					</div>
					<div className="oparatenum">
						<div className="hasborder">
							<img
								src={require("./images/view.svg")}
								alt="view"
							/>
							{item.viewnum}
						</div>
						<div className="hasborder">
							<img
								src={require("./images/comment.svg")}
								alt="comment"
							/>{" "}
							{item.commentnum}
						</div>
						<div>
							<img
								src={require("./images/click.svg")}
								alt="click"
							/>
							{item.clicknum}
						</div>
					</div>
				</Link>
			</li>
		);
	}
}

export default connect(
	null,
	{ saveView }
)(ArticListItem);
