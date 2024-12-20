import { store } from "../store";
const baseUrl = process.env.REACT_APP_API;

class Fetch{
    static async get(url, mapQueryParams){
        const fullUrl = baseUrl + url + '?' + this.queryParamsToUrlParams(mapQueryParams);

        const headers = new Headers();
        headers.append("Authorization", "MjZjZTQwYTk3OWY1ZDE3NjQwMTgyMzA4M2RiZDlkYmU=");
    
        const requestOptions = {
            method: "GET",
            headers: headers,
            redirect: "follow"       
        };
    
        const responce = await fetch(fullUrl, requestOptions);
        const responceData = await responce.json();
    
        return responceData;
    }

    static async post(url, customHeaders){
        let headers;
        const fullUrl = baseUrl + url;

        if(!customHeaders)
        {
            headers = new Headers();
            headers.append("Authorization", "MjZjZTQwYTk3OWY1ZDE3NjQwMTgyMzA4M2RiZDlkYmU=");
        }else{
            headers = customHeaders;
        }

        const requestOptions = {
            method: "POST",
            headers: headers,
            redirect: "follow"       
        };

        const responce = await fetch(fullUrl, requestOptions);
        const responceData = await responce.json();
    
        return responceData;
    }

    static queryParamsToUrlParams(mapQueryParams){
        let urlParams = ''
        for (let paramKey in mapQueryParams){       
            urlParams = urlParams + `${paramKey}=${mapQueryParams[paramKey]}&`;        
        }
    
        return urlParams;
    }

    static async handleFetchError(responce, url){
        const dispatch = store.dispatch();
        if(!responce.ok){
            const error = `Fetch error: url: ${url}, status: ${responce.status}, status text: ${responce.statusText}`
    
            if(process.env.NODE_ENV === 'development'){
                console.log(error);
            }
    
            const resp = await responce.json();
    
            throw error;
        }
    }
}

export default Fetch;



