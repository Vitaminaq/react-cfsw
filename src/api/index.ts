import LocalAxios from '../common/axios';

class Axios extends LocalAxios {
	public post(url: string, params: any): any {
		return this.axios.post(url, params);
	}
	public get(url: string, params: any): any {
		return this.axios.get(url, { params });
	}
}

class BaseAxios {
	public axios: Axios;
	public constructor() {
		this.axios = new Axios();
	}
}
export { BaseAxios, Axios };
