import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    <div
        className="flex items-start justify-center pt-20"
        // className="max-w-modal mx-auto mt-16 mb-[86px]"
        style={{ minHeight: 'calc(100vh - 40px - 44px)' }}
    >
        <Outlet />
    </div>
);

export default Wrapper;
