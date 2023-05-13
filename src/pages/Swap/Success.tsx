import { useNavigate } from 'react-router-dom';

import { CardDiv, PrimaryButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';

const Success = () => {
    const navigate = useNavigate();
    const data = useConfig();

    if (data.isMobile) {
        return (
            <MobileCard>
                <div
                    className="bg-[#242429] rounded-t-3xl py-[30px] px-5 flex flex-col items-center justify-center w-full absolute bottom-0"
                    style={{ height: 'calc(100vh - 72px - 28px)' }}
                >
                    <h2 className="text-2xl font-bold font-Unbounded text-center">
                        Conversion <br />
                        Successful!
                    </h2>
                    <div className="flex flex-col items-center justify-center w-full">
                        <SuccessIcon className="my-[33px] h-[100px] w-[100px]" />
                        <h4 className="text-sm font-medium font-Unbounded text-center  mb-5">
                            0.00 NGNC has been converted <br /> to USDC
                        </h4>
                        <div className="flex flex-col my-8 w-full">
                            <PrimaryButton
                                className="text-center py-4 w-full text-sm font-medium"
                                onClick={() => navigate('/swap')}
                            >
                                Done
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </MobileCard>
        );
    } else {
        return (
            <CardDiv className="card py-7 min-h-[500px] w-[550px] px-[10px]">
                <h2 className="text-4xl font-bold font-Unbounded text-center">
                    Conversion <br />
                    Successful!
                </h2>
                <div className="flex flex-col items-center justify-center px-[64px]">
                    <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                    <h4 className="text-sm font-medium font-Unbounded text-center  mb-[60px]">
                        {`${data.NETWORK.swap.from.value} ${data.NETWORK.swap.from.name} has been converted to ${data.NETWORK.swap.to.name}`}
                    </h4>

                    <PrimaryButton
                        className="text-center py-4 w-full text-base font-medium"
                        onClick={() => navigate('/swap')}
                    >
                        Done
                    </PrimaryButton>
                </div>
            </CardDiv>
        );
    }
};

export default Success;
