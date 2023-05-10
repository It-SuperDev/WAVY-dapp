import { useNavigate } from 'react-router-dom';

import Card from 'components/Card';

import exchange from 'assets/img/icon/exchange.svg';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PrimaryButton, WhiteButton } from 'components/Styled';
import useConfig from 'hooks/useConfig';

const Send = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <Card title="Send" back={() => navigate('/')}>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <p className="text-base mr-2">Send</p>
                    <div
                        className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-1"
                        onClick={() => navigate('/select')}
                    >
                        <img src={data.NETWORK.send.send.icon} alt="token" className="w-[24px] h-[24px]" />
                        <span className="text-base mx-2">{data.NETWORK.send.send.name}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <img src={exchange} alt="token" className="w-[24px] h-[24px]" />
                <div className="flex items-center">
                    <p className="text-base mr-2">Receive</p>
                    <div
                        className="flex items-center cursor-pointer border-[0.6px] border-[#ACACAE] rounded-md px-2 py-1"
                        onClick={() => navigate('/select')}
                    >
                        <img src={data.NETWORK.send.receive.icon} alt="token" className="w-[24px] h-[24px]" />
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
                                <img src={data.NETWORK.send.send.icon} alt="token" className="w-[24px] h-[24px]" />
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
                            <img src={data.NETWORK.send.receive.icon} alt="token" className="w-[24px] h-[24px]" />
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
                <PrimaryButton className="px-3 text-center py-4 min-w-[150px]" onClick={() => navigate('create-offer')}>
                    Create a new offer
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default Send;
