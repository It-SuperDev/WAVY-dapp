import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SwapIcon } from 'assets/img/icon/swap-btn.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';

const Swap = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <Card title="Swap" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <ValueInput
                    title="From"
                    available={data.NETWORK.swap.from.available}
                    value={data.NETWORK.swap.from.value}
                    tokenList={[data.NETWORK.swap.from, data.NETWORK.swap.from]}
                />
                <div className="flex justify-center my-3">
                    <SwapIcon className="h-[28px] w-[28px]" />
                </div>
                <ValueInput
                    title="To"
                    available={data.NETWORK.swap.to.available}
                    value={data.NETWORK.swap.to.value}
                    tokenList={[data.NETWORK.swap.to, data.NETWORK.swap.from]}
                />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">{data.NETWORK.swap.equal}</p>

                <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('preview')}>
                    Preview Swap
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default Swap;
