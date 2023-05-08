import { lazy } from 'react';

// project imports
import Layout from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Withdraw = Loadable(lazy(() => import('../pages/Withdraw')));
const Swap = Loadable(lazy(() => import('../pages/Swap')));
const SwapLoading = Loadable(lazy(() => import('../pages/SwapLoading')));
const Send = Loadable(lazy(() => import('../pages/Send')));
const Error = Loadable(lazy(() => import('../pages/Error')));
const Success = Loadable(lazy(() => import('../pages/Success')));
const TopUp = Loadable(lazy(() => import('../pages/TopUp')));
const SelectStable = Loadable(lazy(() => import('../pages/SelectStable')));
const Methods = Loadable(lazy(() => import('../pages/Methods')));
const SwapPreview = Loadable(lazy(() => import('../pages/SwapPreview')));

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
            path: 'swap-loading',
            element: <SwapLoading />
        },
        {
            path: 'success',
            element: <Success />
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
    ]
};

export default MainRoutes;
