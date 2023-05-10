import { useNavigate, Link } from 'react-router-dom';

// Icon
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';

const TopUp = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <Card title="Top Up" back={() => navigate('/')}>
            <div className="flex flex-col w-full">
                <ValueInput title="Amount" value={0.0} tokenList={[data.NETWORK.topUp.first]} />
                <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">Fee: 0.00</p>
                <ValueInput
                    title="Receive"
                    available="Available: 3000 USDC"
                    value={0.0}
                    tokenList={[data.NETWORK.topUp.second, data.NETWORK.topUp.first]}
                />
                {data.NETWORK.topUp.method ? (
                    <Link to="method">
                        <div className="bg-[#090912] rounded-lg py-2 px-6 mt-4 mb-16 flex items-center justify-between">
                            <span>Choose payment method</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </Link>
                ) : (
                    <div className="bg-[#090912] rounded-lg py-3 px-6 mt-4 mb-16 flex items-center">
                        <BankIcon className="h-[24px] w-[24px] mr-2" /> <span>Bank Transfer</span>
                    </div>
                )}
                <PrimaryButton className="w-full text-center py-4">Continue</PrimaryButton>
            </div>
        </Card>
    );
};

export default TopUp;
