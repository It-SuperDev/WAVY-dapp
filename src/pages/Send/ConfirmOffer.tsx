import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as EastIcon } from 'assets/img/icon/arrow-right.svg';

// Component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';

import useConfig from 'hooks/useConfig';
import { useAppSelector } from 'hooks/useRedux';

const ConfirmOffer = () => {
    const navigate = useNavigate();

    const network = useAppSelector((state) => state.network);
    const send = useAppSelector((state) => state.send);

    const { isMobile } = useConfig();

    const offerData = useMemo(() => {
        if (network.token) {
            return {
                send: network.token[send.sIdx],
                receive: network.token[send.rIdx]
            };
        }
    }, [network.token, send]);

    if (isMobile) {
        return (
            <MobileCard title="Confirm offer" back={() => navigate('/send')}>
                <div className="px-5">
                    <div className="w-full flex items-center justify-around mb-11">
                        <div className="flex flex-col items-center">
                            <img src={offerData.send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                            <p className="text-xs mb-2">From</p>
                            <p className="text-base font-Unbounded font-bold">{offerData.send.name}</p>
                        </div>
                        <EastIcon />
                        <div className="flex flex-col items-center">
                            <img src={offerData.receive.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                            <p className="text-xs mb-2">Receive</p>
                            <p className="text-base font-Unbounded font-bold">{offerData.receive.name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full rounded-lg px-5 py-6 bg-[#242429]">
                        <div className="flex w-full items-center justify-between mb-2 text-sm">
                            <p>Send currency</p> <p>{offerData.send.name}</p>
                        </div>
                        <div className="flex w-full items-center justify-between my-2 text-sm">
                            <p>Receive currency</p> <p>{offerData.receive.name}</p>
                        </div>
                        <div className="flex w-full items-center justify-between my-2 text-sm">
                            <p>Exchange rate</p>{' '}
                            <p>{`1 ${offerData.send.name} = ${send.rate} ${offerData.receive.name}`}</p>
                        </div>
                        <div className="flex w-full items-center justify-between my-2 text-sm">
                            <p>Limit</p> <p>{`${send.min} - ${send.max} ${offerData.receive.name}`}</p>
                        </div>
                        <div className="flex w-full items-center justify-between text-sm">
                            <p>Available</p> <p>{`30000 ${offerData.send.name}`}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-20">
                        <button
                            className="text-center text-bold py-4 w-[150px] bg-transparent border-[2px] border-solid border-[#ffffff] rounded-lg cursor-pointer"
                            onClick={() => navigate('/send/create-offer')}
                        >
                            Back
                        </button>
                        <button
                            className="text-center py-4 w-[150px] bg-[#5a4ee8] rounded-lg cursor-pointer"
                            onClick={() => navigate('/send/offers')}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </MobileCard>
        );
    } else {
        return (
            <Card title="Confirm offer">
                <div className="w-full flex items-center justify-around mb-8">
                    <div className="flex flex-col items-center">
                        <img src={offerData.send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                        <p className="text-xs mb-2">From</p>
                        <p className="text-base font-Unbounded font-bold">{offerData.send.name}</p>
                    </div>
                    <EastIcon />
                    <div className="flex flex-col items-center">
                        <img src={offerData.receive.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                        <p className="text-xs mb-2">Receive</p>
                        <p className="text-base font-Unbounded font-bold">{offerData.receive.name}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full rounded-lg border-[0.6px] px-5 py-4 border-[#ACACAE}]">
                    <div className="flex w-full items-center justify-between mb-5 text-sm">
                        <p>Send currency</p> <p>{offerData.send.name}</p>
                    </div>
                    <div className="flex w-full items-center justify-between mb-5 text-sm">
                        <p>Receive currency</p> <p>{offerData.receive.name}</p>
                    </div>
                    <div className="flex w-full items-center justify-between mb-5 text-sm">
                        <p>Exchange rate</p>{' '}
                        <p>{`1 ${offerData.send.name} = ${send.rate} ${offerData.receive.name}`}</p>
                    </div>
                    <div className="flex w-full items-center justify-between mb-5 text-sm">
                        <p>Limit</p> <p>{`${send.min} - ${send.max} ${offerData.receive.name}`}</p>
                    </div>
                    <div className="flex w-full items-center justify-between text-sm">
                        <p>Available</p> <p>{`30000 ${offerData.send.name}`}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full mt-10">
                    <button
                        className="text-center text-bold py-4 w-[150px] bg-transparent border-[2px] border-solid border-[#ffffff] rounded-lg cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                    <button
                        className="text-center py-4 w-[150px] bg-[#5a4ee8] rounded-lg cursor-pointer"
                        onClick={() => navigate('/send/offers')}
                    >
                        Continue
                    </button>
                </div>
            </Card>
        );
    }
};

export default ConfirmOffer;
