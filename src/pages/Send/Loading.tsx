import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Card from 'components/Card';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/send/success');
        }, 2000);
    }, [navigate]);

    return (
        <Card>
            <div className="flex flex-col items-center justify-center h-[500px] w-full">
                <div className="loader"></div>
                <h4 className="text-2xl font-medium text-center mt-[55px] mb-5">
                    One moment, the transaction i<br />s being processed
                </h4>
                <p className="text-sm text-center text-[#F9FAFA]">
                    Stables are being released to your wallet <br /> address as well as that of the counterparty
                </p>
            </div>
        </Card>
    );
};
export default Loading;
