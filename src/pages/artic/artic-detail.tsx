import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/components/artic-list.scss';
import { BaseArticListState } from '../../store/modules/chatroom/reducer';
import ArticListItem from '../../components/chat-room/artic-list-item';

interface ArticListProps {
	articList: API.ChatRoom.ArticList.ListItem[];
	history: History;
}

// activeClassName
class ArticList extends Component<ArticListProps, any> {
	public constructor(props: ArticListProps) {
		super(props);
	}
	public render() {
		const { articList, history } = this.props;
		return (
			<ul className="component-artic-list">
				{articList.map((i: API.ChatRoom.ArticList.ListItem) => {
					return (
						<ArticListItem
							key={i.articId}
							history={history}
							item={i}
						/>
					);
				})}
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
