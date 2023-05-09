import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    <div
        className="max-w-modal mx-auto mt-16 mb-[86px]"
        style={{ minHeight: 'calc(100vh - 40px - 45px - 64px - 86px)' }}
    >
        <Outlet />
    </div>
);

export default Wrapper;
