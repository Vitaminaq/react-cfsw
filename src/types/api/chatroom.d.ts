declare namespace API.ChatRoom {
    namespace ArticList {
        export interface RequestParams {
            limit: number,
            page: number
        }
        export interface Response {
            code: number;
            data: Data;
        }
        export interface Data {
            list: Array<ListItem>;
            pageIndex: number;
            pageSize: number;
            total: number;
        }
        export interface ListItem {
            articId: number,
            clicknum: number,
            commentnum: number
            creatAt: string,
            msg: string,
            nickname: string,
            title: string,
            viewnum: number,
            headimg: string;
        }
    }
    namespace View {
        export interface RequestParams {
            id: string
        }
        export interface Response {
            code: number,
            data: string
        }
        export interface State {
            params: RequestParams,
            res: Response,
            // requestStatus: Loader.RequestStatus
        }
    }
}
