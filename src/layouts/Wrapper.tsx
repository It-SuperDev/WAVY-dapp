import useConfig from 'hooks/useConfig';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
    const { isMobile } = useConfig();
    return (
        <div
            className="flex items-start justify-center md:pt-20 pt-10"
            style={{ minHeight: isMobile ? 'calc(100vh - 52px)' : 'calc(100vh - 40px - 44px)' }}
        >
            <Outlet />
        </div>
    );
};

export default Wrapper;
