import { lazy } from 'react';

// Bounding Import
import Layout from 'layouts';
import CompactLayout from 'layouts/Compact';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('pages/Home')));
const Login = Loadable(lazy(() => import('pages/Login')));
const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Stables = Loadable(lazy(() => import('pages/Stables')));
const Page404 = Loadable(lazy(() => import('pages/Page404')));
const Method = Loadable(lazy(() => import('pages/Method')));
const SelectToken = Loadable(lazy(() => import('pages/SelectToken')));
const SelectNet = Loadable(lazy(() => import('pages/SelectNet')));
const Loading = Loadable(lazy(() => import('pages/Loading')));

const Send = Loadable(lazy(() => import('pages/Send')));
const SendCheck = Loadable(lazy(() => import('pages/Send/Send')));

const NewOffer = Loadable(lazy(() => import('pages/Send/NewOffer')));
const EditOffer = Loadable(lazy(() => import('pages/Send/EditOffer')));
const DeleteOffer = Loadable(lazy(() => import('pages/Send/DeleteOffer')));
const DeleteSuccess = Loadable(lazy(() => import('pages/Send/DeleteSuccess')));
const SendLoading = Loadable(lazy(() => import('pages/Send/Loading')));
const SendSuccess = Loadable(lazy(() => import('pages/Send/Success')));
const ConfirmOffer = Loadable(lazy(() => import('pages/Send/ConfirmOffer')));
const DeleteLoading = Loadable(lazy(() => import('pages/Send/DeleteLoading')));
const Offers = Loadable(lazy(() => import('pages/Send/Offers')));

const Swap = Loadable(lazy(() => import('pages/Swap')));
const PreviewSwap = Loadable(lazy(() => import('pages/Swap/PreviewSwap')));
const Success = Loadable(lazy(() => import('pages/Swap/Success')));

const TopUp = Loadable(lazy(() => import('pages/TopUp')));
const Withdraw = Loadable(lazy(() => import('pages/Withdraw')));

const Bridge = Loadable(lazy(() => import('pages/Bridge')));

export const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/stables',
            element: <Stables />
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
            path: 'select-net',
            element: <SelectNet />
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
        },
        {
            path: 'send',
            element: <Send />
        },
        {
            path: 'send/check',
            element: <SendCheck />
        },
        {
            path: 'send/process',
            element: <SendLoading />
        },
        {
            path: 'send/success',
            element: <SendSuccess />
        },
        {
            path: 'send/create-offer',
            element: <NewOffer />
        },
        {
            path: 'send/edit-offer',
            element: <EditOffer />
        },
        {
            path: 'send/delete-offer',
            element: <DeleteOffer />
        },
        {
            path: 'send/delete-process',
            element: <DeleteLoading />
        },
        {
            path: 'send/delete-success',
            element: <DeleteSuccess />
        },
        {
            path: 'send/create-offer/confirm',
            element: <ConfirmOffer />
        },
        {
            path: 'send/offers',
            element: <Offers />
        },
        {
            path: 'bridge',
            element: <Bridge />
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
