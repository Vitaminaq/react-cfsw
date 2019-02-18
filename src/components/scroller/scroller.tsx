import React, { Component } from 'react';
import { BaseRequestStatus } from "../../store/modules/chatroom/reducer";
import UpLoading from './up-loading';

/**
 * 加载的几种状态
 * 未加载   unrequest
 * 正在加载 requesting
 * 加载成功 success
 * 请求失败 failure
 * 加载失败 error
 * 全部加载 done
 */
interface ScrollerProps {
    pullDownStatus: BaseRequestStatus;
    pullUpStatus: BaseRequestStatus;
    listDom: any;
    pullUp: any;
    params: any;
}

class Scroller extends Component<ScrollerProps, any> {
    constructor(props: ScrollerProps) {
        super(props);
    }
    render() {
        const { pullUpStatus, pullDownStatus, listDom, pullUp, params } = this.props;
        return (
            <div>
                { listDom }
                <UpLoading
                    pullDownStatus={pullDownStatus}
                    pullUpStatus={pullUpStatus}
                    pullUp={pullUp}
                    params={params}
                />
            </div>
        )
    }
}

export default Scroller;
