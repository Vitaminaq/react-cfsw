declare namespace API.Loader {
	export interface RequestParams {
		limit: number;
		page: number;
	}
	export interface Response {
		code: number;
		data: Data;
	}
	export interface ListItem {
		articId: number;
		clicknum: number;
		commentnum: number;
		creatAt: string;
		msg: string;
		nickname: string;
		title: string;
		viewnum: number;
	}
	export interface Data {
		list: ListItem[];
	}
	export interface LoaderState {
		params: RequestParams;
		list: ListItem[];
		pullDownStatus: RequestStatus;
		pullUpStatus: RequestStatus;
	}
	export type RequestStatus =
		| 'unrequest'
		| 'requesting'
		| 'success'
		| 'error'
		| 'done';
}
