declare namespace Detail {
    namespace ArticDetail {
        export interface RequestParams {
            id: string
        }
        export interface Click {
            name: Array<string>,
            num: number
        }
        export interface Commentxt {
            msg?: string,
            name?: Array<string>
        }
        export interface Data {
            articId: number,
            clicknum: number,
            commentnum: number
            creatAt: string,
            msg: string,
            nickname: string,
            title: string,
            updateAt: string | undefined,
            viewnum: number,
            isClick: boolean
        }
        export interface Response {
            code: number,
            data: Data
        }
        export interface State {
            params: RequestParams,
            // requestStatus: Loader.RequestStatus,
            dataStore: object,
            data?: any
        }
    }
    namespace UserComment {
        export interface RequestParams {
            articId: string,
            msg: string
        }
        export interface Response {
            code: number,
            data: string
        }
        export interface State {
            params: RequestParams,
            res: Response
        }
    }
    namespace AgreeAuthor {
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
    namespace AgreeComment {
        export interface RequestParams {
            id: number,
            commentId: number
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
