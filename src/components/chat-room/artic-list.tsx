import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../style/components/artic-list.scss';
import config from '../../config';
import { Time } from '../../common/comjs'
import { BaseArticListState } from "../../store/modules/chatroom/reducer";
import { saveView } from "../../store/modules/chatroom/action";

interface ArticListProps {
    saveView: any;
    articList: Array<API.ChatRoom.ArticList.ListItem>;
}

// activeClassName
class ArticList extends Component<ArticListProps, any> {
    constructor(props: ArticListProps) {
        super(props);
    }
    toDetail = (event: any) => {
        event.preventDefault();
        console.log(this);
        return;
    }
    render() {
        const { articList } = this.props;
        return (
            <ul className="component-artic-list">
            {
                articList.map((i: API.ChatRoom.ArticList.ListItem) => {
                    return <li key={i.articId}>
                        <Link onClick={this.toDetail} to='/artic/detail'>
                            <div className="artic-content">
                                <div className="userImg">
                                    <img src={`${config.BASE_URL}${i.headimg}`}/>
                                </div>
                                <div className="author">
                                    <div className="title">{i.title}</div>
                                    <span className="authormsg">作者：</span>
                                    <span className="authormsg authorname">{i.nickname}</span>
                                    <span className="publishtime publishtxt">发表于</span>
                                    <span className="publishtime">{Time(i.creatAt)}</span>
                                </div>
                            </div>
                            <div className="oparatenum">
                                <div className="hasborder">
                                    <img src={require('./images/view.svg')} alt="view"/>{i.viewnum}
                                </div>
                                <div className="hasborder">
                                    <img src={require('./images/comment.svg')} alt="comment"/> {i.commentnum}
                                </div>
                                <div>
                                    <img src={require('./images/click.svg')} alt="click"/>{i.clicknum}
                                </div>
                            </div>
                        </Link>
                    </li>
                })
            }
        </ul>)
    }
}

interface ArticListState {
    articListState: BaseArticListState
}
const mapStateToProps = (state: ArticListState) => {
    return {
        articList: state.articListState.list
    };
};
export default connect(
    mapStateToProps,
    { saveView }
)(ArticList);
