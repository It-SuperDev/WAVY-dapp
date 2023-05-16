import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';
import { PrimaryButton, WhiteButton } from 'components/Styled';

// Icon
import exchange from 'assets/img/icon/exchange.svg';
import { ReactComponent as EastIcon } from 'assets/img/icon/arrow-right.svg';
import { ReactComponent as KeyboardArrowDownIcon } from 'assets/img/icon/chevron-down.svg';

import useConfig from 'hooks/useConfig';

const Send = () => {
    const navigate = useNavigate();
    const data = useConfig();
    const { isMobile, changeData, SEND, NETWORK } = data;

    const sendData = useMemo(() => {
        return {
            sender: NETWORK.token[SEND.sIdx],
            receiver: NETWORK.token[SEND.rIdx]
        };
    }, [NETWORK.token, SEND]);

    const changOrder = () => {
        const tRIsx = SEND.sIdx;
        const tSIsx = SEND.rIdx;
        const tSEND = { ...SEND, sIdx: tSIsx, rIdx: tRIsx };
        changeData({ key: 'SEND', data: tSEND });
    };

    const selectToken = (param: number, order: string) => {
        changeData({ key: 'TOKEN_SELECT', data: ['SEND', order, param] });
        navigate('/select');
    };

    if (isMobile) {
        return (
            <MobileCard title="Send" back={() => navigate('/')}>
                <div className="w-full flex items-end justify-between px-5 mb-10 relative">
                    <div className="flex flex-col">
                        <p className="text-sm text-[#ACACAE] mb-2">Send</p>
                        <div
                            className="flex items-center cursor-pointer bg-[#242429] border-[0.6px] border-[#ACACAE] rounded-xl px-5 py-2"
                            onClick={() => selectToken(SEND.rIdx, 'sIdx')}
                        >
                            <img
                                src={sendData.sender.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-sm mx-2">{sendData.sender.name}</span>
                            <KeyboardArrowDownIcon className="w-3" />
                        </div>
                    </div>
                    <img
                        src={exchange}
                        alt="token"
                        className="w-[30px] h-[30px] cursor-pointer absolute bottom-0"
                        style={{ left: 'calc(50% - 12px)' }}
                        onClick={changOrder}
                    />
                    <div className="flex flex-col">
                        <p className="text-sm text-[#ACACAE] mb-2">Receive</p>
                        <div
                            className="flex items-center cursor-pointer bg-[#242429] border-[0.6px] border-[#ACACAE] rounded-xl px-5 py-2"
                            onClick={() => selectToken(SEND.sIdx, 'rIdx')}
                        >
                            <img
                                src={sendData.receiver.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-sm mx-2">{sendData.receiver.name}</span>
                            <KeyboardArrowDownIcon className="w-3" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5">
                    <div>
                        {SEND.list.map(({ rate, limit }: any, i: number) => (
                            <div
                                key={i}
                                onClick={() => navigate(`check/${i}`)}
                                className="w-full grid mb-4 cursor-pointer border-light-dark border-[0.6px] p-5 rounded-xl"
                            >
                                <div className="flex">
                                    <div className="flex flex-col w-1/2">
                                        <p className="text-xs">You send</p>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center cursor-pointer mt-1 mb-2">
                                                <img
                                                    src={sendData.sender.icon}
                                                    alt="token"
                                                    className="w-[24px] h-[24px] bg-white rounded-full"
                                                />
                                                <span className="text-base ml-2">{sendData.sender.name}</span>
                                            </div>
                                            <EastIcon />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 ml-10">
                                        <p className="text-xs">You receive</p>
                                        <div className="flex items-center cursor-pointer mt-1 mb-2">
                                            <img
                                                src={sendData.receiver.icon}
                                                alt="token"
                                                className="w-[24px] h-[24px] bg-white rounded-full"
                                            />
                                            <span className="text-base ml-2">{sendData.receiver.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="flex items-center">
                                        <p className="text-xs text-light-dark mr-1">Exchange rate</p>
                                        <p className="text-sm">{rate}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs text-light-dark mr-1">Available</p>
                                        <p className="text-sm">{`${sendData.receiver.amount} ${sendData.receiver.name}`}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs text-light-dark mr-1">limit</p>
                                        <p className="text-sm">{limit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-[200px]" />
                </div>
                <div className="flex w-full fixed items-center justify-between bottom-0 px-5 py-6 bg-[#151518] rounded-t-3xl">
                    <WhiteButton
                        className="text-center text-bold py-4 px-3 min-w-[150px] text-sm font-medium"
                        onClick={() => navigate('offers')}
                    >
                        My offers
                    </WhiteButton>
                    <PrimaryButton
                        className="px-3 text-center py-4 min-w-[150px] text-sm"
                        onClick={() => navigate('create-offer')}
                    >
                        Create a new offer
                    </PrimaryButton>
                </div>
            </MobileCard>
        );
    } else {
        return (
            <Card title="Send" back={() => navigate('/')}>
                <div className="w-full flex items-center justify-between relative">
                    <div className="flex items-center">
                        <p className="text-base mr-2">Send</p>
                        <div
                            className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2"
                            onClick={() => selectToken(SEND.rIdx, 'sIdx')}
                        >
                            <img
                                src={sendData.sender.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-base mx-2">{sendData.sender.name}</span>
                            <KeyboardArrowDownIcon className="w-3" />
                        </div>
                    </div>
                    <img
                        src={exchange}
                        alt="token"
                        className="w-[24px] h-[24px] cursor-pointer absolute bottom-0"
                        style={{ left: 'calc(50% - 12px)' }}
                        onClick={changOrder}
                    />
                    <div className="flex items-center">
                        <p className="text-base mr-2">Receive</p>
                        <div
                            className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-2"
                            onClick={() => selectToken(SEND.sIdx, 'rIdx')}
                        >
                            <img
                                src={sendData.receiver.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-base mx-2">{sendData.receiver.name}</span>
                            <KeyboardArrowDownIcon className="w-3" />
                        </div>
                    </div>
                </div>
                {SEND.list.map(({ rate, limit }: any, i: number) => (
                    <div
                        key={i}
                        onClick={() => navigate(`check/${i}`)}
                        className="w-full grid mt-4 cursor-pointer border-light-dark border-[0.6px] px-3 py-2 rounded-lg grid-cols-3 bg-[#19181F]"
                    >
                        <div className="flex flex-col">
                            <p className="text-xs">You send</p>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center cursor-pointer mt-1 mb-2">
                                    <img
                                        src={sendData.sender.icon}
                                        alt="token"
                                        className="w-[24px] h-[24px] bg-white rounded-full"
                                    />
                                    <span className="text-base ml-2">{sendData.sender.name}</span>
                                </div>
                                <EastIcon />
                            </div>
                            <div>
                                <p className="text-xs text-light-dark">Exchange rate</p>
                                <p className="text-sm">{rate}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auto">
                            <p className="text-xs">You receive</p>
                            <div className="flex items-center cursor-pointer mt-1 mb-2">
                                <img
                                    src={sendData.receiver.icon}
                                    alt="token"
                                    className="w-[24px] h-[24px] bg-white rounded-full"
                                />
                                <span className="text-base ml-2">{sendData.receiver.name}</span>
                            </div>
                            <div>
                                <p className="text-xs text-light-dark">Available</p>
                                <p className="text-sm">{`${sendData.receiver.amount} ${sendData.receiver.name}`}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-xs"></p>
                            <div className="line-flex">
                                <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-lg bg-dark-primary">
                                    Accept offer
                                    <EastIcon />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-light-dark">limit</p>
                                <p className="text-sm">{limit}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-around items-center mt-5 w-full">
                    <WhiteButton
                        className="text-center text-bold py-4 px-3 min-w-[150px] text-base font-medium"
                        onClick={() => navigate('offers')}
                    >
                        My offers
                    </WhiteButton>
                    <PrimaryButton
                        className="px-3 text-center py-4 min-w-[150px]"
                        onClick={() => navigate('create-offer')}
                    >
                        Create a new offer
                    </PrimaryButton>
                </div>
            </Card>
        );
    }
};

export default Send;
