import { useNavigate } from 'react-router-dom';

import Card from 'components/Card';

import exchange from 'assets/img/icon/exchange.svg';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PrimaryButton, WhiteButton } from 'components/Styled';
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';

const Send = () => {
    const navigate = useNavigate();
    const data = useConfig();
    const { isMobile, changeData } = data;

    const changOrder = () => {
        const temp = data.NETWORK.send.send;
        let final = data.NETWORK;
        final.send.send = final.send.receive;
        final.send.receive = temp;
        changeData({ key: 'NETWORK', data: final });
    };

    if (isMobile) {
        return (
            <MobileCard title="Send" back={() => navigate('/')}>
                <div className="w-full flex items-end justify-between px-5 mb-10">
                    <div className="flex flex-col">
                        <p className="text-sm text-[#ACACAE] mb-2">Send</p>
                        <div
                            className="flex items-center cursor-pointer bg-[#242429] border-[0.6px] border-[#ACACAE] rounded-xl px-5 py-1"
                            onClick={() => navigate('/select')}
                        >
                            <img
                                src={data.NETWORK.send.send.icon}
                                alt="token"
                                className="w-[35px] h-[35px] bg-white rounded-full"
                            />
                            <span className="text-sm mx-2">{data.NETWORK.send.send.name}</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    <img src={exchange} alt="token" className="w-[30px] h-[30px]" onClick={changOrder} />
                    <div className="flex flex-col">
                        <p className="text-sm text-[#ACACAE] mb-2">Receive</p>
                        <div
                            className="flex items-center cursor-pointer bg-[#242429] border-[0.6px] border-[#ACACAE] rounded-xl px-5 py-1"
                            onClick={() => navigate('/select')}
                        >
                            <img
                                src={data.NETWORK.send.receive.icon}
                                alt="token"
                                className="w-[35px] h-[35px] bg-white rounded-full"
                            />
                            <span className="text-sm mx-2">{data.NETWORK.send.receive.name}</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                </div>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5">
                    <div className="mb-20">
                        {data.NETWORK.send.list.map(({ rate, available, limit }: any, i: number) => (
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
                                                    src={data.NETWORK.send.send.icon}
                                                    alt="token"
                                                    className="w-[24px] h-[24px] bg-white rounded-full"
                                                />
                                                <span className="text-base ml-2">{data.NETWORK.send.send.name}</span>
                                            </div>
                                            <EastIcon sx={{ fontSize: 20 }} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 ml-10">
                                        <p className="text-xs">You receive</p>
                                        <div className="flex items-center cursor-pointer mt-1 mb-2">
                                            <img
                                                src={data.NETWORK.send.receive.icon}
                                                alt="token"
                                                className="w-[24px] h-[24px] bg-white rounded-full"
                                            />
                                            <span className="text-base ml-2">{data.NETWORK.send.receive.name}</span>
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
                                        <p className="text-sm">{available}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs text-light-dark mr-1">limit</p>
                                        <p className="text-sm">{limit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="text-base mr-2">Send</p>
                        <div
                            className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-1"
                            onClick={() => navigate('/select')}
                        >
                            <img
                                src={data.NETWORK.send.send.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-base mx-2">{data.NETWORK.send.send.name}</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    <img src={exchange} alt="token" className="w-[24px] h-[24px]" onClick={changOrder} />
                    <div className="flex items-center">
                        <p className="text-base mr-2">Receive</p>
                        <div
                            className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-1"
                            onClick={() => navigate('/select')}
                        >
                            <img
                                src={data.NETWORK.send.receive.icon}
                                alt="token"
                                className="w-[24px] h-[24px] bg-white rounded-full"
                            />
                            <span className="text-base mx-2">{data.NETWORK.send.receive.name}</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                </div>
                {data.NETWORK.send.list.map(({ rate, available, limit }: any, i: number) => (
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
                                        src={data.NETWORK.send.send.icon}
                                        alt="token"
                                        className="w-[24px] h-[24px] bg-white rounded-full"
                                    />
                                    <span className="text-base ml-2">{data.NETWORK.send.send.name}</span>
                                </div>
                                <EastIcon sx={{ fontSize: 20 }} />
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
                                    src={data.NETWORK.send.receive.icon}
                                    alt="token"
                                    className="w-[24px] h-[24px] bg-white rounded-full"
                                />
                                <span className="text-base ml-2">{data.NETWORK.send.receive.name}</span>
                            </div>
                            <div>
                                <p className="text-xs text-light-dark">Available</p>
                                <p className="text-sm">{available}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-xs"></p>
                            <div className="line-flex">
                                <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-lg bg-dark-primary">
                                    Accept offer
                                    <EastIcon sx={{ fontSize: 14, ml: 1 }} />
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
