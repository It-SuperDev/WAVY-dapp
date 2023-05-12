import { useNavigate } from 'react-router-dom';

import { CardDiv, PrimaryButton, WhiteButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';

const Success = () => {
    const navigate = useNavigate();

    return (
        <CardDiv className="card py-7 min-h-[500px] w-[550px] px-[10px]">
            <h2 className="text-4xl font-bold font-Unbounded text-center">
                Transaction <br />
                Successful!
            </h2>
            <div className="flex flex-col items-center justify-center px-[64px]">
                <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                <h4 className="text-sm font-medium font-Unbounded text-center  mb-5">
                    The stables have been settled to both <br /> wallet addresses
                </h4>
                <div className="flex justify-between items-center my-8 w-full">
                    <WhiteButton
                        className="text-center py-4 px-2 min-w-[150px] text-xs font-medium"
                        onClick={() => navigate('/send/offers')}
                    >
                        View on Network Explorer
                    </WhiteButton>
                    <PrimaryButton
                        className="text-center py-4 min-w-[170px] text-xs font-medium"
                        onClick={() => navigate('/send')}
                    >
                        Done
                    </PrimaryButton>
                </div>
                <p className="text-center text-md mb-5">
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
