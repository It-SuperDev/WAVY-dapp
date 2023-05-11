import { useNavigate } from 'react-router-dom';

import { CardDiv, PrimaryButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';

const Success = () => {
    const navigate = useNavigate();

    return (
        <CardDiv className="py-7 min-h-[500px] w-[550px] px-[24px]">
            <h2 className="text-4xl font-bold font-Unbounded text-center">Offer deleted</h2>
            <div className="flex flex-col items-center justify-center px-[64px]">
                <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                <h4 className="text-sm font-medium font-Unbounded text-center  mb-5">
                    Your stablecoin has been returned to <br /> your wallet address
                </h4>
                <PrimaryButton className="text-center py-4 w-full my-5" onClick={() => navigate('/send/offers')}>
                    Done
                </PrimaryButton>
            </div>
        </CardDiv>
    );
};

export default Success;
