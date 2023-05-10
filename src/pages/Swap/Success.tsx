import { useNavigate } from 'react-router-dom';

import { CardDiv, PrimaryButton } from 'components/Styled';

// Icons
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';
import useConfig from 'hooks/useConfig';

const Success = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <CardDiv className="py-7 min-h-[500px] w-[550px] px-[10px]">
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
};

export default Success;
