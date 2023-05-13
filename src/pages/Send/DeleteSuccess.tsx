import { useNavigate } from 'react-router-dom';

import MobileCard from 'components/MobileCard';
import { CardDiv, PrimaryButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';

import useConfig from 'hooks/useConfig';

const Success = () => {
    const navigate = useNavigate();
    const { isMobile } = useConfig();

    if (isMobile) {
        return (
            <MobileCard>
                <div
                    className="bg-[#242429] rounded-t-3xl py-[30px] px-5 flex flex-col items-center justify-center w-full absolute bottom-0"
                    style={{ height: 'calc(100vh - 72px - 28px)' }}
                >
                    <h2 className="text-4xl font-bold font-Unbounded text-center">Offer deleted</h2>
                    <div className="flex flex-col items-center justify-center w-full">
                        <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                        <h4 className="text-base font-medium font-Unbounded text-center  mb-5">
                            The stables have been settled to both <br /> wallet addresses
                        </h4>
                        <div className="flex flex-col my-8 w-full">
                            <PrimaryButton
                                className="text-center py-4 w-full text-sm font-medium"
                                onClick={() => navigate('/send/offers')}
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
                </div>
            </MobileCard>
        );
    } else {
        return (
            <CardDiv className="card py-7 min-h-[500px] w-[550px] px-[24px]">
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
    }
};

export default Success;
