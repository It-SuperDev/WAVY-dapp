import { ReactComponent as EastIcon } from 'assets/img/icon/arrow-right.svg';
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';

import Card from 'components/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks/useRedux';

const ConfirmOffer = () => {
    const navigate = useNavigate();
    const network = useAppSelector((state) => state.network);
    const { idx } = useParams();

    return (
        <Card title="Confirm Offer Delete">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={network.offers[idx].send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-sm mb-2">From</p>
                    <p className="text-base font-bold font-Unbounded">{network.offers[idx].send.name}</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={network.offers[idx].receive.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-sm mb-2">Receive</p>
                    <p className="text-base font-bold font-Unbounded">{network.offers[idx].receive.name}</p>
                </div>
            </div>
            <div className="flex">
                <InfoIcon className="w-[30px]" />
                <p className="text-[#B8ACFF] text-xs ml-2">
                    Confirm that you want to delete this offer. The locked stablecoin amount for this offer will be
                    returned to your wallet address.
                </p>
            </div>
            <div className="flex justify-between items-center w-full mt-20">
                <button
                    className="text-center text-bold py-4 w-[150px] bg-transparent border-[2px] border-solid border-[#ffffff] rounded-lg cursor-pointer"
                    onClick={() => navigate(-1)}
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
        </Card>
    );
};

export default ConfirmOffer;
