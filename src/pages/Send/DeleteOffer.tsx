import EastIcon from '@mui/icons-material/East';
import kes from 'assets/img/coin/kes.svg';
import audd from 'assets/img/coin/audd.svg';
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';

import Card from 'components/Card';
import { OutlineButton, PrimaryButton } from 'components/Styled';
import { useNavigate, useParams } from 'react-router-dom';
import useConfig from 'hooks/useConfig';

const ConfirmOffer = () => {
    const navigate = useNavigate();
    const data = useConfig();
    const { idx } = useParams();

    return (
        <Card title="Confirm Offer Delete">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={data.NETWORK.offers[idx].send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-sm mb-2">From</p>
                    <p className="text-base font-bold font-Unbounded">{data.NETWORK.offers[idx].send.name}</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={data.NETWORK.offers[idx].receive.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-sm mb-2">Receive</p>
                    <p className="text-base font-bold font-Unbounded">{data.NETWORK.offers[idx].receive.name}</p>
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
                <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={() => navigate(-1)}>
                    Back
                </OutlineButton>
                <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/send/delete-process')}>
                    Confirm
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default ConfirmOffer;
