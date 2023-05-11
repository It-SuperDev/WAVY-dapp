import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Icon
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { ReactComponent as SendIcon } from '../assets/img/icon/send.svg';
import { ReactComponent as SwapIcon } from '../assets/img/icon/swap.svg';
import { ReactComponent as BridgeIcon } from '../assets/img/icon/bridge.svg';
import { ReactComponent as SpendIcon } from '../assets/img/icon/spend.svg';
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import { ReactComponent as WalletIcon } from '../assets/img/icon/wallet.svg';
import { ReactComponent as RightIcon } from '../assets/img/icon/right.svg';

import { CardDiv } from 'components/Styled';
import useConfig from 'hooks/useConfig';

const Home = () => {
    const allowBridgNet = ['Avalanche', 'Ethereum'];
    const data = useConfig();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);

    const goPage = (params: string) => {
        if (data.connect) {
            if (params === '/bridge') if (allowBridgNet.findIndex((e: string) => e === data.NETWORK.sub) === -1) return;
            navigate(params);
        }
    };

    const visibleHandle = () => {
        setVisible((pre: boolean) => !pre);
    };

    return (
        <CardDiv className="py-7 w-[550px]">
            <div className="flex flex-col w-[400px] items-center mx-auto">
                <div className="rounded-lg w-full border-[#ACACAE] border-[0.6px] px-6 py-7 gradient-box">
                    <div className="flex items-center">
                        <p className="text-base font-Extended">Total Balance</p>
                        {visible ? (
                            <VisibilityOutlinedIcon onClick={visibleHandle} sx={{ fontSize: 20, ml: 1 }} />
                        ) : (
                            <VisibilityOffOutlinedIcon onClick={visibleHandle} sx={{ fontSize: 20, ml: 1 }} />
                        )}
                    </div>
                    <h1 className="gradient-text text-5xl font-Unbounded font-medium mt-2">
                        {data.connect ? (visible ? '$15,749.54' : '$****') : '$0.00'}
                    </h1>
                </div>
                <div className="flex justify-between w-full my-11">
                    <div onClick={() => goPage('/send')} className="flex flex-col items-center">
                        <button className="bg-[#423F51] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                            <SendIcon className="h-[35px] w-[35px]" />
                        </button>
                        <p className="text-md mt-2">Send</p>
                    </div>
                    <div onClick={() => goPage('/swap')} className="flex flex-col items-center">
                        <button className="bg-[#423F51] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                            <SwapIcon className="h-[35px] w-[35px]" />
                        </button>
                        <p className="text-md mt-2">Swap</p>
                    </div>
                    <div onClick={() => goPage('/bridge')} className="flex flex-col items-center">
                        <button className="bg-[#423F51] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                            <BridgeIcon className="h-[35px] w-[35px]" />
                        </button>
                        <p className="text-md mt-2">Bridge</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#423F51] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                            <SpendIcon className="h-[35px] w-[35px]" />
                        </button>
                        <p className="text-md mt-2">Spend</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div
                        onClick={() => goPage('/top-up')}
                        className="py-3 px-6 rounded-lg bg-dark w-full flex justify-between items-center cursor-pointer"
                    >
                        <div className="flex items-center">
                            <BankIcon className="h-[30px] w-[30px]" />
                            <div className="ml-4">
                                <p className="text-md font-medium">Top Up</p>
                                <p className="text-xs text-light-dark">On-ramp fiat-to-stablecoin</p>
                            </div>
                        </div>
                        <RightIcon />
                    </div>
                    <div
                        onClick={() => goPage('/withdraw')}
                        className="my-4 py-3 px-6 rounded-lg bg-dark w-full flex justify-between items-center cursor-pointer"
                    >
                        <div className="flex items-center">
                            <WalletIcon className="h-[30px] w-[30px]" />
                            <div className="ml-4">
                                <p className="text-md font-medium">Withdraw</p>
                                <p className="text-xs text-light-dark">Withdraw your stablecoins to Fiat</p>
                            </div>
                        </div>
                        <RightIcon />
                    </div>
                </div>
            </div>
        </CardDiv>
    );
};

export default Home;
