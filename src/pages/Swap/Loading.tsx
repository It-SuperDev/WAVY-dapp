import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import { CardDiv } from 'components/Styled';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/swap/success');
        }, 2000);
    }, [navigate]);

    return (
        <CardDiv className="card py-7 min-h-[500px] w-[550px]">
            <div className="flex flex-col items-center justify-center h-[500px] w-full">
                <div className="loader"></div>
                <h4 className="text-xl font-medium text-center font-Unbounded mt-[55px] mb-6">
                    One moment, the transaction <br /> is being processed
                </h4>
                <p className="text-base text-center text-[#F9FAFA]">
                    Stables are being swapped and should be <br /> deposited in your wallet any moment now
                </p>
            </div>
        </CardDiv>
    );
};
export default Loading;
