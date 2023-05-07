import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const FullLayout = () => (
    <Box sx={{ width: '100vw', minHeight: '100vh' }}>
        <Outlet />
    </Box>
);

export default FullLayout;
