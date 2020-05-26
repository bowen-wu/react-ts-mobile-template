import {FunctionComponent} from 'react';
import Hello from '../page/hello/hello';
import Welcome from '../page/welcome/welcome';
import NotFound from '../page/not_found/not_found';

export interface RouterConfigInterface {
    key: string;
    path: string;
    component: FunctionComponent;
}

const routerConfig: Array<RouterConfigInterface> = [
    {
        key: 'hello',
        path: '/hello',
        component: Hello,
    }, {
        key: 'welcome',
        path: '/welcome',
        component: Welcome,
    }, {
        key: 'not_found',
        path: '/not_found',
        component: NotFound
    }
];

export default routerConfig;
