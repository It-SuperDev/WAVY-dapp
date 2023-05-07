import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import Loadable from '../components/Loadable';
import MainRoutes from './MainRoutes';
import CompactLayout from '../layouts/Full';

const Page404 = Loadable(lazy(() => import('../pages/Page404')));
// routes

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        {
            path: '*', element: <Navigate to="/404" />,
        },
        {
            element: <CompactLayout />,
            children: [{ path: '404', element: <Page404 /> }]
        },
        MainRoutes,
    ]);
}
