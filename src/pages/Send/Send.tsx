import { useNavigate } from 'react-router-dom';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton, OutlineButton } from 'components/Styled';

// Constatn
import { TOKEN_LIST } from 'config/constants/demo';

const TopUp = () => {
    const navigate = useNavigate();

    return (
        <Card title="Send" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <ValueInput title="Amount" available="Available: 2500.33 KES" value={0.0} tokenList={[TOKEN_LIST[7]]} />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">1 AUDD = 90.67 KES</p>
                <ValueInput title="Receive" value={0.0} tokenList={[TOKEN_LIST[0]]} />
                <div className="bg-[#090912] rounded-lg py-3 px-6 mt-4 mb-10 flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-light-dark">Available</span>
                        <span className="text-xs">3000 AUDD</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-light-dark">Limit</span>
                        <span className="text-xs">1 - 500 AUDD</span>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={() => navigate(-1)}>
                        Cancel
                    </OutlineButton>
                    <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/send/process')}>
                        Continue
                    </PrimaryButton>
                </div>
            </div>
        </Card>
    );
};

export default TopUp;
