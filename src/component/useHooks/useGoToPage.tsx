import { useHistory } from "react-router-dom";

export enum MethodEnum {
    'push' = 'push',
    'back' = 'back'
}

export interface ParamsConfigInterface {
    route?: string;
}

export interface PageInfoInterface {
    method: MethodEnum;
    params?: ParamsConfigInterface;
}


const useGoToPage = () => {
    const history = useHistory();

    return (pageInfo: PageInfoInterface) => {
        const { method, params } = pageInfo;
        if(method === MethodEnum.back) {
            history.goBack();
        } else {
            params && params.route && history.push(params.route);
        }
    }

};

export default useGoToPage;
