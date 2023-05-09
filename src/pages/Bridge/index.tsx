import { useNavigate } from 'react-router-dom';

// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import { NETWORK, TOKEN_LIST } from 'config/constants/demo';

const Index = () => {
    const navigate = useNavigate();

    return (
        <Card title="Bridge" back={() => navigate('/')}>
            <div className="flex flex-col w-full">
                <div className="flex items-center mb-5">
                    <p className="text-base w-[40px] mx-5">From </p>
                    <div
                        className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2"
                        onClick={() => navigate('/select-net')}
                    >
                        <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                            <img src={NETWORK[1].icon} alt="token" className="bg-white rounded-full" />
                        </div>
                        <span className="text-base mx-2">{NETWORK[1].sub}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <ValueInput title="Amount" available="Available: 3000 USDC" value={0.0} tokenList={TOKEN_LIST} />

                <div className="flex items-center mb-5 mt-8">
                    <p className="text-base w-[40px] mx-5">To </p>
                    <div
                        className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2"
                        onClick={() => navigate('/select-net')}
                    >
                        <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                            <img src={NETWORK[2].icon} alt="token" className="bg-white rounded-full" />
                        </div>
                        <span className="text-base mx-2">{NETWORK[2].sub}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <ValueInput title="Receive" value={0.0} tokenList={[TOKEN_LIST[3]]} />

                <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('/send/process')}>
                    Continue
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default Index;
