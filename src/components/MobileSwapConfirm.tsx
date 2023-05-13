// MUI
import EastIcon from '@mui/icons-material/East';

import useConfig from 'hooks/useConfig';
import { useNavigate } from 'react-router-dom';
import { OutlineButton, PrimaryButton } from './Styled';

const MobileDeleteOffer = ({ close }: any) => {
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
                        <h2 className="text-center text-xl font-bold font-Unbounded ">Confirm Conversion</h2>
                    </div>
                </div>
                <div className="py-[30px]">
                    <div className="w-full flex items-center justify-around mb-8">
                        <div className="flex flex-col items-center">
                            <img src={data.NETWORK.swap.from.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                            <p className="text-sm mb-2">From</p>
                            <p className="text-base font-bold font-Unbounded">
                                {`${data.NETWORK.swap.from.value} ${data.NETWORK.swap.from.name}`}
                            </p>
                        </div>
                        <EastIcon />
                        <div className="flex flex-col items-center">
                            <img src={data.NETWORK.swap.to.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                            <p className="text-sm mb-2">Receive</p>
                            <p className="text-base font-bold font-Unbounded">
                                {`${data.NETWORK.swap.to.value} ${data.NETWORK.swap.to.name}`}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full rounded-lg px-5 py-4 bg-[#242429]">
                        <div className="flex w-full items-center justify-between mb-5 text-sm">
                            <p>Conversion Fee</p> <p>No fees</p>
                        </div>
                        <div className="flex w-full items-center justify-between text-sm">
                            <p>Rate</p> <p>{data.NETWORK.swap.equal}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-20">
                        <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={close}>
                            Back
                        </OutlineButton>
                        <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/swap/process')}>
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