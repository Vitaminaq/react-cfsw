import { Reducer, AnyAction } from "redux";
import {
  ASSIGNPARAMS,
  PULLUP,
  PULLDOWN,
  PULLUPREQUESTSTATUS,
  SAVEVIEWSUCCESS,
  SAVEVIEWFAIl
} from "./action-type";

export interface BaseListParams {
  limit: number;
  page: number;
}
export type BaseRequestStatus =
  | "unrequest"
  | "requesting"
  | "success"
  | "error"
  | "done";
export interface BaseArticListState {
  params: BaseListParams;
  list: API.ChatRoom.ArticList.ListItem[];
  pullDownStatus: BaseRequestStatus;
  pullUpStatus: BaseRequestStatus;
}
export interface ListParamsAction {
  type: string;
  params: API.ChatRoom.ArticList.RequestParams;
}
export interface BaseListAction extends BaseArticListState {
  type: string;
}

const baseState: BaseArticListState = {
  params: {
    limit: 9,
    page: 0
  },
  list: [],
  pullDownStatus: "unrequest",
  pullUpStatus: "unrequest"
};

/**
 * 文章列表state
 */
export const articListState: Reducer = (
  state: BaseArticListState = baseState,
  action: AnyAction
): BaseArticListState => {
  switch (action.type) {
    // 合并页面参数
    case ASSIGNPARAMS:
      Object.assign(state.params, action.params);
      return { ...state };
    // 更新上拉请求状态
    case PULLUPREQUESTSTATUS:
      state.pullUpStatus = action.pullUpStatus;
      return { ...state };
    // 上拉加载
    case PULLUP:
      if (action.list.length < state.params.limit) {
        state.pullUpStatus = "done";
      } else {
        state.pullUpStatus = "success";
      }
      state.list.push(...action.list);
      state.params.page++;
      // 解构触发视图更新
      return {
        params: state.params,
        list: [...state.list],
        pullDownStatus: state.pullDownStatus,
        pullUpStatus: state.pullUpStatus
      };
    // 下拉刷新
    case PULLDOWN:
      if (action.list.length < state.params.limit) {
        state.pullUpStatus = "done";
        state.pullDownStatus = "done";
      } else {
        state.pullDownStatus = "success";
      }
      state.list = [...action.list];
      state.params.page++;
      return {
        params: state.params,
        list: [...state.list],
        pullDownStatus: state.pullDownStatus,
        pullUpStatus: state.pullUpStatus
      };
    default:
      return state;
  }
};

export interface ViewState {
  data: string;
  status: string;
}
export interface ViewAction extends ViewState {
  type: string;
}
const initViewState: ViewState = {
  data: "",
  status: ""
};
/**
 * 浏览文章state
 */
export const view: Reducer = (
  state: ViewState = initViewState,
  action: AnyAction
): ViewState => {
  switch (action.type) {
    case SAVEVIEWSUCCESS:
      return {
        data: action.data,
        status: "success"
      };
    case SAVEVIEWFAIl:
      return {
        data: action.data,
        status: "error"
      };
    default:
      return state;
  }
};
