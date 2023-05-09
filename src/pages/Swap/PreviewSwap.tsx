import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SwapIcon } from 'assets/img/icon/swap-btn.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton, OutlineButton } from 'components/Styled';

// Constatn
import { TOKEN_LIST } from 'config/constants/demo';

const PreviewSwap = () => {
    const navigate = useNavigate();

    return (
        <Card title="Confirm Conversion" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <ValueInput title="From" available="Available: 20000.54 ARS" value={0.0} tokenList={TOKEN_LIST} />
                <div className="flex justify-center my-3">
                    <SwapIcon className="h-[28px] w-[28px]" />
                </div>
                <ValueInput title="To" available="Available: 3000 EURC" value={0.0} tokenList={TOKEN_LIST} />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">1 EURC = 486.04 ARS</p>
                <div className="flex justify-between items-center mt-10">
                    <OutlineButton className="text-center py-4 w-[150px]" onClick={() => navigate(-1)}>
                        Back
                    </OutlineButton>
                    <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/swap/process')}>
                        Continue
                    </PrimaryButton>
                </div>
            </div>
        </Card>
    );
};

export default PreviewSwap;
