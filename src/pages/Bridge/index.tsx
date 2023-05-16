import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as KeyboardArrowDownIcon } from 'assets/img/icon/chevron-down.svg';

// component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';
import MobileList from 'components/MobileList';
import { NETWORK } from 'config/constants/demo';

const Index = () => {
    const navigate = useNavigate();
    const data = useConfig();
    const { isMobile, BRIDGE, changeData } = data;

    const bridgeData = useMemo(() => {
        if (BRIDGE) {
            return {
                from: NETWORK[BRIDGE.sNet],
                to: NETWORK[BRIDGE.rNet],
                send: data.NETWORK.token[BRIDGE.sIdx],
                receive: NETWORK[BRIDGE.rNet].token[BRIDGE.rIdx]
            };
        }
        return {};
        // eslint-disable-next-line
    }, [BRIDGE]);

    const [network, setNetwork] = useState(false);

    const selectToken = (order: string) => {
        const netIdx = order === 'sIdx' ? BRIDGE.sNet : BRIDGE.rNet;
        changeData({ key: 'TOKEN_SELECT', data: ['BRIDGE', order, -1, netIdx] });
        navigate('/select');
    };

    if (isMobile) {
        return (
            <MobileCard title="Bridge" back={() => navigate('/')}>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5">
                    <div className="flex flex-col w-full" style={{ height: 'calc(100vh - 72px - 28px - 60px)' }}>
                        <div className="flex items-center mb-5">
                            <p className="text-sm mr-5 text-[#ACACAE] w-[40px]">From </p>
                            <div className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-2xl px-2 py-2">
                                <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                                    <img src={bridgeData.from.icon} alt="token" className="bg-white rounded-full" />
                                </div>
                                <span className="text-sm mx-2">{bridgeData.from.name}</span>
                            </div>
                        </div>
                        <ValueInput
                            title="Amount"
                            hideTitle={true}
                            available={true}
                            onChange={() => selectToken('sIdx')}
                            value={bridgeData.send.amount}
                            token={bridgeData.send}
                        />

                        <div className="flex items-center mb-5 mt-8">
                            <p className="text-sm mr-5 text-[#ACACAE] w-[40px]">To </p>
                            <div
                                className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-2xl px-2 py-2"
                                onClick={() => setNetwork(true)}
                            >
                                <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                                    <img src={bridgeData.to.icon} alt="token" className="bg-white rounded-full" />
                                </div>
                                <span className="text-sm mx-2">{bridgeData.to.name}</span>
                                <KeyboardArrowDownIcon className="w-4" />
                            </div>
                        </div>
                        <ValueInput
                            title="Receive"
                            hideTitle={true}
                            value={0.0}
                            available={true}
                            onChange={() => selectToken('rIdx')}
                            token={bridgeData.receive}
                        />

                        <PrimaryButton
                            className="w-full text-center py-4 mt-20"
                            onClick={() => navigate('/send/process')}
                        >
                            Continue
                        </PrimaryButton>
                    </div>
                </div>
                {network && (
                    <MobileList
                        title="Choose network"
                        sub="Choose your preferred network"
                        data={NETWORK.slice(0, -1)}
                        close={() => setNetwork(false)}
                        callback={(i: number) => {
                            setNetwork(false);
                            console.log(NETWORK[i]);
                        }}
                    />
                )}
            </MobileCard>
        );
    } else {
        return (
            <Card title="Bridge" back={() => navigate('/')}>
                <div className="flex flex-col w-full">
                    <div className="flex items-center mb-5">
                        <p className="text-base w-[40px] mx-5">From </p>
                        <div className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2">
                            <div className="w-[24px] h-[24px] bg-white rounded-full border-[2px] flex items-center justify-center">
                                <img
                                    src={data.NETWORK.bridge.from.network.icon}
                                    alt="token"
                                    className="bg-white rounded-full"
                                />
                            </div>
                            <span className="text-base mx-2">{data.NETWORK.bridge.from.network.name}</span>
                        </div>
                    </div>
                    <ValueInput
                        title="Amount"
                        hideTitle={true}
                        available={true}
                        onChange={() => selectToken('sIdx')}
                        value={bridgeData.send.amount}
                        token={bridgeData.send}
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
                            <KeyboardArrowDownIcon className="w-4" />
                        </div>
                    </div>
                    <ValueInput
                        title="Receive"
                        hideTitle={true}
                        value={0.0}
                        available={true}
                        onChange={() => selectToken('rIdx')}
                        token={bridgeData.receive}
                    />
                    <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('/send/process')}>
                        Continue
                    </PrimaryButton>
                </div>
            </Card>
        );
    }
};

export default Index;
