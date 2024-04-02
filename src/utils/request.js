import axios from "axios";

class MyRequest {

    constructor({ baseUrl }){
        this.baseUrl = baseUrl ? baseUrl : null;
        this.requestApi = this.initRequestApi();
    }

    initRequestApi(){
        return axios.create({ baseURL: this.baseUrl });
    }

    async getRequest(url, query = {}){
        return this.requestApi.get(url, {...query}).then(res => res.data)
    }

    async postRequest(url, data, query={}){
        return this.requestApi.post(url, {...data}, {...query}).then(res => res.data)
    }

    async putRequest(url, data, query){
        return this.requestApi.put(url, {...data}, {...query } ).then(res => res.data)
    }

    async deleteRequest(url, data, query){
        return this.requestApi.delete(url, {...query}).then(res=> res.data)
    }
    
}

export default MyRequest;