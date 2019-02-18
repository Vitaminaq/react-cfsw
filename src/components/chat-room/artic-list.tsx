import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/artic-list.scss';
import config from '../../config';
import { Time } from '../../common/comjs'

interface ArticListProps {
    list: Array<API.ChatRoom.ArticList.ListItem>
}

class ArticList extends Component<ArticListProps, any> {
    constructor(props: ArticListProps) {
        super(props);
    }
    render() {
        const { list } = this.props;
        return (
            <ul className="component-artic-list">
            {
                list.map((i: API.ChatRoom.ArticList.ListItem) => {
                    return <li key={i.articId}>
                        <Link to='/artic/detail'>
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

export default ArticList;
