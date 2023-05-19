import { useNavigate } from 'react-router-dom';

// Icons
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';
import { ReactComponent as EastIcon } from 'assets/img/icon/arrow-right.svg';

import { useAppSelector } from 'hooks/useRedux';

const MobileDeleteOffer = ({ idx, close }: any) => {
    const navigate = useNavigate();
    const network = useAppSelector((state) => state.network);

    const prevent = (e: any) => e.preventDefault();

    return (
        <>
            <div
                className="flex flex-col w-full fixed bottom-0 left-0 z-10 px-5 pt-10 bg-[#151518] rounded-t-3xl shadow-[0px_-4px_20px_13px_black]"
                onClick={prevent}
            >
                <div className="flex items-start justify-center relative mb-[10px]">
                    <div>
                        <h2 className="text-center text-xl font-bold font-Unbounded ">Confirm offer delete</h2>
                    </div>
                </div>
                <div className="py-[30px]">
                    <div className="w-full flex items-center justify-around mb-8">
                        <div className="flex flex-col items-center">
                            <img src={network.offers[idx].send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                            <p className="text-sm mb-2">From</p>
                            <p className="text-base font-bold font-Unbounded">{network.offers[idx].send.name}</p>
                        </div>
                        <EastIcon />
                        <div className="flex flex-col items-center">
                            <img
                                src={network.offers[idx].receive.icon}
                                alt="token"
                                className="w-[60px] h-[60px]  mb-3"
                            />
                            <p className="text-sm mb-2">Receive</p>
                            <p className="text-base font-bold font-Unbounded">{network.offers[idx].receive.name}</p>
                        </div>
                    </div>
                    <div className="p-5 bg-[#242429] p-5 rounded-lg text-[#B8ACFF] text-xs flex items-center">
                        <InfoIcon className="w-[50px] h-[50px] mr-2" />
                        <p className="">
                            Confirm that you want to delete this offer. The locked stablecoin amount for this offer will
                            be returned to your wallet address.
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-20">
                        <button
                            className="text-center text-bold py-4 w-[150px] bg-transparent border-[2px] border-solid border-[#ffffff] rounded-lg cursor-pointer"
                            onClick={close}
                        >
                            Back
                        </button>
                        <button
                            className="text-center py-4 w-[150px] bg-[#5a4ee8] rounded-lg cursor-pointer"
                            onClick={() => navigate('/send/delete-process')}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000066]" onClick={close} />
        </>
    );
};

export default MobileDeleteOffer;
