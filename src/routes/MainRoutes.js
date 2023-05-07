import { lazy } from 'react';

// project imports
import Layout from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Withdraw = Loadable(lazy(() => import('../pages/Withdraw')));
const Swap = Loadable(lazy(() => import('../pages/Swap')));

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
            path: 'swap',
            element: <Swap />
        },
    ]
};

export default MainRoutes;
