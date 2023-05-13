// MUI
import EastIcon from '@mui/icons-material/East';
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';

import useConfig from 'hooks/useConfig';
import { useNavigate } from 'react-router-dom';
import { OutlineButton, PrimaryButton } from './Styled';

const MobileDeleteOffer = ({ idx, close }: any) => {
    const navigate = useNavigate();
    const data = useConfig();

    const prevent = (e: any) => {
        e.preventDefault();
    };

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
                            <img
                                src={data.NETWORK.offers[idx].send.icon}
                                alt="token"
                                className="w-[60px] h-[60px] mb-3"
                            />
                            <p className="text-sm mb-2">From</p>
                            <p className="text-base font-bold font-Unbounded">{data.NETWORK.offers[idx].send.name}</p>
                        </div>
                        <EastIcon />
                        <div className="flex flex-col items-center">
                            <img
                                src={data.NETWORK.offers[idx].receive.icon}
                                alt="token"
                                className="w-[60px] h-[60px]  mb-3"
                            />
                            <p className="text-sm mb-2">Receive</p>
                            <p className="text-base font-bold font-Unbounded">
                                {data.NETWORK.offers[idx].receive.name}
                            </p>
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
                        <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={close}>
                            Back
                        </OutlineButton>
                        <PrimaryButton
                            className="text-center py-4 w-[150px]"
                            onClick={() => navigate('/send/delete-process')}
                        >
                            Confirm
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000066]" onClick={close} />
        </>
    );
};

export default MobileDeleteOffer;
