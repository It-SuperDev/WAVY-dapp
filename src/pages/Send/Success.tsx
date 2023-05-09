import { useNavigate } from 'react-router-dom';

import { CardDiv, PrimaryButton, WhiteButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';

const Success = () => {
    const navigate = useNavigate();

    return (
        <CardDiv className="py-7 min-h-[500px] w-[550px] px-[24px]">
            <h2 className="text-4xl font-bold text-coinmedium text-center">
                Transaction <br />
                Successful!
            </h2>
            <div className="flex flex-col items-center justify-center px-[64px]">
                <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                <h4 className="text-lg font-medium text-center  mb-5">
                    The stables have been settled to both <br /> wallet addresses
                </h4>
                <div className="flex justify-between items-center my-5 w-full">
                    <WhiteButton className="text-center py-4 w-[150px]" onClick={() => navigate(-1)}>
                        View on Network Explorer
                    </WhiteButton>
                    <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/')}>
                        Done
                    </PrimaryButton>
                </div>
                <p className="text-center text-md">
                    Incase of any disputes, contact our support <br /> team at{' '}
                    <a href="mailto:support@usewavy.xyz" className="text-[#B8ACFF]">
                        support@usewavy.xyz
                    </a>
                </p>
            </div>
        </CardDiv>
    );
};

export default Success;
