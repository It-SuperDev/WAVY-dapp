import { lazy } from 'react';

// Bounding Import
import Layout from 'layouts';
import CompactLayout from 'layouts/Compact';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('pages/Home')));
const Swap = Loadable(lazy(() => import('pages/Swap')));
const PreviewSwap = Loadable(lazy(() => import('pages/Swap/PreviewSwap')));
const Success = Loadable(lazy(() => import('pages/Swap/Success')));
const TopUp = Loadable(lazy(() => import('pages/TopUp')));
const Withdraw = Loadable(lazy(() => import('pages/Withdraw')));
const Method = Loadable(lazy(() => import('pages/Method')));
const Page404 = Loadable(lazy(() => import('pages/Page404')));
const SelectToken = Loadable(lazy(() => import('pages/SelectToken')));
const Loading = Loadable(lazy(() => import('pages/Loading')));

export const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'top-up',
            element: <TopUp />
        },
        {
            path: 'top-up/method',
            element: <Method />
        },
        {
            path: 'withdraw',
            element: <Withdraw />
        },
        {
            path: 'withdraw/method',
            element: <Method />
        },
        {
            path: 'select',
            element: <SelectToken />
        },
        {
            path: 'swap',
            element: <Swap />
        },
        {
            path: 'swap/preview',
            element: <PreviewSwap />
        },
        {
            path: 'swap/process',
            element: <Loading />
        },
        {
            path: 'swap/success',
            element: <Success />
        }
    ]
};

export const CompactRoutes = {
    path: '/404',
    element: <CompactLayout />,
    children: [
        {
            path: '',
            element: <Page404 />
        }
    ]
};
