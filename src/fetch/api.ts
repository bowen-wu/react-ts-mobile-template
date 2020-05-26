import FetchData, {FetchConfigInit, Method} from './fetch';
import queryString from 'query-string';

export interface ObjectInterface {
    [propsName: string]: any;
}

export interface InstanceParamsInterface extends FetchConfigInit {
    params?: ObjectInterface;
    data?: ObjectInterface;
}

const instance = async (fetchDataParams: InstanceParamsInterface) => {
    const {url, method, data = {}, headers = undefined, params} = fetchDataParams;
    try {
        const fetchUrl = method === Method.GET && params ? `${url}?${queryString.stringify(params)}` : url;
        // data 有可能是 JSON.stringify(data)
        return await FetchData({url: fetchUrl, method, data: queryString.stringify(data), headers});
    } catch (error) {
        console.error('api error', error);
    }
};

const baseUrl = 'http://www.baidu.com';

const getIdInfo = (id: number) => {
    return instance({url: `${baseUrl}/api/${id}`, method: Method.GET});
};

export default {
    getIdInfo
}
