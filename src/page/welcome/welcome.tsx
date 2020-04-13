import React from 'react';
import { Button } from 'antd-mobile';
import scopedClasses from '../../utils/scopedClasses';
import './welcome.scss';

const sc = scopedClasses('welcome');

const Welcome = () => {
    return (
        <div className={sc()}>
            <h1>This is Welcome Page</h1>
            <Button type="primary">primary</Button>
        </div>
    )
};

export default Welcome;
