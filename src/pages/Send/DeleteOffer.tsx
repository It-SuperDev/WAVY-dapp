import EastIcon from '@mui/icons-material/East';
import kes from 'assets/img/coin/kes.svg';
import audd from 'assets/img/coin/audd.svg';
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';

import Card from 'components/Card';
import { OutlineButton, PrimaryButton } from 'components/Styled';
import { useNavigate } from 'react-router-dom';

const ConfirmOffer = () => {
    const navigate = useNavigate();

    return (
        <Card title="Confirm Offer Delete">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={kes} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-sm mb-2">From</p>
                    <p className="text-base font-bold font-Unbounded">TZS</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={audd} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-sm mb-2">Receive</p>
                    <p className="text-base font-bold font-Unbounded">NGNC</p>
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
