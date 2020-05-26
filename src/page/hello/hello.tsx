import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import useGoToPage from "../../component/useHooks/useGoToPage";
import {MethodEnum} from "../../component/useHooks/useGoToPage";
import './hello.scss';

const sc = scopedClasses('hello');

const Hello = () => {
    const goToPage = useGoToPage();
    return (
        <div className={sc()}>
            This is Hello Page
            <div onClick={() => goToPage({method: MethodEnum.push, params: {route: '/welcome'}})}>go to Welcome Page</div>
        </div>
    )
};

export default Hello;
