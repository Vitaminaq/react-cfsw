import LocalAxios from "../common/axios";

class Axios extends LocalAxios {
	post(url: string, params: any) {
		return this.axios.post(url, params);
	}
	get(url: string, params: any) {
		return this.axios.get(url, { params });
	}
}

class BaseAxios {
	axios: Axios;
	constructor() {
		this.axios = new Axios();
	}
}
export { BaseAxios, Axios };
