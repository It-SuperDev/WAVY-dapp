import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 72px - 62px - 136px)',
                padding: (theme) => theme.spacing(10, 0, 4, 0)
            }}
        >
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
}
export default Wrapper;
