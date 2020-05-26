import React, {useState} from 'react';
import scopedClasses from '../../utils/scopedClasses';
import useGoToPage from "../../component/useHooks/useGoToPage";
import { Button } from 'antd-mobile';
import {MethodEnum} from "../../component/useHooks/useGoToPage";
import './hello.scss';
import useInterval from '../../component/useHooks/useInterval';

const sc = scopedClasses('hello');

const Hello = () => {
    const [secondNum, setSecondNum] = useState<number>(6);
    const [delay, setDelay] = useState<null | number>(null);

    const goToPage = useGoToPage();

    useInterval(() => {
        if (secondNum <= 0) {
            return () => {
                setDelay(null);
                setSecondNum(6);
            }
        }
        setSecondNum(secondNum - 1);
    }, delay);

    return (
        <div className={sc()}>
            This is Hello Page
            <Button type="primary" onClick={() => goToPage({method: MethodEnum.push, params: {route: '/welcome'}})}>go to Welcome Page</Button>

            <Button onClick={() => setDelay(1000)}>开启倒计时</Button>
            <div>倒计时：{secondNum}</div>
            <Button onClick={() => setDelay(null)}>停止倒计时</Button>
        </div>
    )
};

export default Hello;
