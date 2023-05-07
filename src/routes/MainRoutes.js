import { lazy } from 'react';

// project imports
import Layout from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Withdraw = Loadable(lazy(() => import('../pages/Withdraw')));
const Swap = Loadable(lazy(() => import('../pages/Swap')));
const Send = Loadable(lazy(() => import('../pages/Send')));
const Error = Loadable(lazy(() => import('../pages/Error')));
const TopUp = Loadable(lazy(() => import('../pages/TopUp')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'withdraw',
            element: <Withdraw />
        },
        {
            path: 'top-up',
            element: <TopUp />
        },
        {
            path: 'swap',
            element: <Swap />
        },
        {
            path: 'send',
            element: <Send />
        },
        {
            path: 'send-error',
            element: <Error isSend />
        },
        {
            path: 'swap-error',
            element: <Error />
        },
    ]
};

export default MainRoutes;
