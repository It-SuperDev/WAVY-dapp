import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Card from 'components/Card';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // navigate('/send/delete-success');
        }, 2000);
    }, [navigate]);

    return (
        <Card>
            <div className="flex flex-col items-center justify-center h-[500px] w-full">
                <div className="loader"></div>
                <h4 className="text-2xl font-medium font-Unbounded text-center mt-[55px] mb-5">
                    One moment, the refund is
                    <br /> being processed
                </h4>
                <p className="text-base text-center text-[#F9FAFA]">
                    Stables are being returned to your wallet,
                    <br /> should arrive any moment now
                </p>
            </div>
        </Card>
    );
};
export default Loading;
