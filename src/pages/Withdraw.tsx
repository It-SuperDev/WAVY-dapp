import { useNavigate, Link } from 'react-router-dom';

// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import { TOKEN_LIST } from 'config/constants/demo';

const TopUp = () => {
    const navigate = useNavigate();

    return (
        <Card title="Withdraw" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <ValueInput title="Amount" value={0.0} tokenList={[TOKEN_LIST[7]]} />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">Fee: 0.00</p>
                <ValueInput title="Receive" available="Available: 3000 USDC" value={0.0} tokenList={TOKEN_LIST} />
                <Link to="method">
                    <div className="bg-[#090912] rounded-lg py-2 px-6 mt-4 mb-16 flex items-center justify-between">
                        <span>Choose payment method</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </Link>
                <PrimaryButton className="w-full text-center py-4">Continue</PrimaryButton>
            </div>
        </Card>
    );
};

export default TopUp;
