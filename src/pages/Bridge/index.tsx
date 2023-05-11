import { useNavigate } from 'react-router-dom';

// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import { NETWORK, TOKEN_LIST } from 'config/constants/demo';
import useConfig from 'hooks/useConfig';

const Index = () => {
    const navigate = useNavigate();
    const data = useConfig();

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
                            <img
                                src={data.NETWORK.bridge.from.network.icon}
                                alt="token"
                                className="bg-white rounded-full"
                            />
                        </div>
                        <span className="text-base mx-2">{data.NETWORK.bridge.from.network.name}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <ValueInput
                    title="Amount"
                    available={data.NETWORK.bridge.from.available}
                    value={data.NETWORK.bridge.from.value}
                    tokenList={[data.NETWORK.bridge.from, data.NETWORK.bridge.from]}
                />

                <div className="flex items-center mb-5 mt-8">
                    <p className="text-base w-[40px] mx-5">To </p>
                    <div
                        className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2"
                        onClick={() => navigate('/select-net')}
                    >
                        <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                            <img
                                src={data.NETWORK.bridge.to.network.icon}
                                alt="token"
                                className="bg-white rounded-full"
                            />
                        </div>
                        <span className="text-base mx-2">{data.NETWORK.bridge.to.network.name}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <ValueInput title="Receive" value={0.0} tokenList={[data.NETWORK.bridge.to]} />

                <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('/send/process')}>
                    Continue
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default Index;
