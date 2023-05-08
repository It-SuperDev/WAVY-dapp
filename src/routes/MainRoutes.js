import { lazy } from 'react';

// project imports
import Layout from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Withdraw = Loadable(lazy(() => import('../pages/Withdraw')));
const Swap = Loadable(lazy(() => import('../pages/Swap')));
const Loading = Loadable(lazy(() => import('../pages/Loading')));
const Send = Loadable(lazy(() => import('../pages/Send')));
const Error = Loadable(lazy(() => import('../pages/Error')));
const SwapSuccess = Loadable(lazy(() => import('../pages/SwapSuccess')));
const SendSuccess = Loadable(lazy(() => import('../pages/SendSuccess')));
const TopUp = Loadable(lazy(() => import('../pages/TopUp')));
const SelectStable = Loadable(lazy(() => import('../pages/SelectStable')));
const Methods = Loadable(lazy(() => import('../pages/Methods')));
const SwapPreview = Loadable(lazy(() => import('../pages/SwapPreview')));
const Offers = Loadable(lazy(() => import('../pages/Offers')));
const CreateOffer = Loadable(lazy(() => import('../pages/CreateOffer')));

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
        {
            path: 'loading/:nextRouer',
            element: <Loading />
        },
        {
            path: 'swap-success',
            element: <SwapSuccess />
        },
        {
            path: 'send-success',
            element: <SendSuccess />
        },
        {
            path: 'top-method',
            element: <Methods title='Top Up Method' description='Select how you want to Top Up' />
        },
        {
            path: 'withdraw-method',
            element: <Methods title='Withdrawal Method' description='Select the destination to withdraw your stablecoin' isWithdraw />
        },
        {
            path: 'select-stable',
            element: <SelectStable />
        },
        {
            path: 'preview-swap',
            element: <SwapPreview />
        },
        {
            path: 'create-offer',
            element: <CreateOffer />
        },
        {
            path: 'offers',
            element: <Offers />
        },
    ]
};

export default MainRoutes;
