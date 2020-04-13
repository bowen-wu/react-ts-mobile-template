import {Toast, Modal} from 'antd-mobile';

const alert = Modal.alert;

export enum Method {
    POST = 'post',
    GET = 'get',
}

export interface FetchConfigHeaders {
    'content-type'?: string;
}

export interface FetchConfigData {
    data?: string;
}

export interface FetchConfigInit {
    url: string;
    method: Method;
    headers?: FetchConfigHeaders;
}

export interface FetchConfig extends FetchConfigData, FetchConfigInit {}

const fetchConfigHeaders: FetchConfigHeaders = {
    'content-type': 'application/x-www-form-urlencoded'
};

const initFetchConfig = {
    mode: 'cors',  // 请求模式 'cors' 'no-cors' 'same-origin'
    credentials: 'same-origin',  // 请求的凭证
    cache: 'no-cache',
    redirect: 'follow',  // 可用的 redirect (重定向) 模式: 'follow'(自动重定向)
    referrer: 'no-referrer',
};

const FetchData = async (fetchDataParams: FetchConfig) => {
    const {url, method, data: body, headers} = fetchDataParams;
    try {
        let fetchConfig = JSON.parse(JSON.stringify(initFetchConfig));
        fetchConfig.method = method;
        fetchConfig.headers = headers || fetchConfigHeaders;
        if (method === Method.POST) {
            fetchConfig.body = body
        }

        const res = await fetch(url, fetchConfig);
        if (res.status === 200) {
            const result = await res.json();
            if (result.code !== 0) {
                Toast.info(result.error, 1);
                throw new Error(result.error);
            }
            return result;
        }
        if (res.status === 401) {
            alert('请登录！', '', [
                {
                    text: '确定', onPress: () => {
                        // TODO: 方案1 -> 清除 localStorage + window 刷新
                        window.localStorage.removeItem('userInfo');
                        window.location.reload(true);
                        // TODO: 方案2 -> 组件内部暴露 this，这里使用 this.props.history.push()
                        // window.$this.props.history.push('/login')

                        // TODO: 方案3 -> 写一个中间组件，将这种异常情况放在中间组件中
                        // setLoginStatus(false);  // 并不能触发 render

                        // TODO: 方案4 -> 通过 localStorage + window 刷新
                        // localStorage.setItem('loginExpire', true);
                        // window.location.reload(true);

                    }
                },
            ]);
            throw new Error('请登录！');
        }

        // TODO: 404 处理 + 错误处理
        throw new Error('error');
    } catch (error) {
        console.error(error);
    }
};

export default FetchData;
