import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SwapIcon } from 'assets/img/icon/swap-btn.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import { TOKEN_LIST } from 'config/constants/demo';

const Swap = () => {
    const navigate = useNavigate();

    return (
        <Card title="Swap" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <ValueInput title="From" available="Available: 20000.54 ARS" value={0.0} tokenList={TOKEN_LIST} />
                <div className="flex justify-center my-3">
                    <SwapIcon className="h-[28px] w-[28px]" />
                </div>
                <ValueInput title="To" available="Available: 3000 EURC" value={0.0} tokenList={TOKEN_LIST} />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">1 EURC = 486.04 ARS</p>

                <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('preview')}>
                    Preview Swap
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default Swap;
