import React from 'react';
import { Button } from 'antd-mobile';
import scopedClasses from '../../utils/scopedClasses';
import './welcome.scss';
import {MethodEnum} from "../../component/useHooks/useGoToPage";
import useGoToPage from "../../component/useHooks/useGoToPage";

const sc = scopedClasses('welcome');

const Welcome = () => {
    const goToPage = useGoToPage();

    return (
        <div className={sc()}>
            <h1>This is Welcome Page</h1>
            <Button type="primary" onClick={() => goToPage({method: MethodEnum.back})}>go to Hello Page</Button>
        </div>
    )
};

export default Welcome;
