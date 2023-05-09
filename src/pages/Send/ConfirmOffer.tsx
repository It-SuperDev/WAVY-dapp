import EastIcon from '@mui/icons-material/East';
import kes from 'assets/img/coin/kes.svg';
import audd from 'assets/img/coin/audd.svg';

import Card from 'components/Card';
import { OutlineButton, PrimaryButton } from 'components/Styled';
import { useNavigate } from 'react-router-dom';

const ConfirmOffer = () => {
    const navigate = useNavigate();

    return (
        <Card title="Confirm offer">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={kes} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-xs mb-2">From</p>
                    <p className="text-base font-bold">TZS</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={audd} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-xs mb-2">Receive</p>
                    <p className="text-base font-bold">NGNC</p>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-[0.6px] px-5 py-4 border-[#ACACAE}]">
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Send currency</p> <p>TZS</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Receive currency</p> <p>NGNC</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Exchange rate</p> <p>1 NGNC = 5.01 TZS</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Limit</p> <p>1 - 500 NGNC</p>
                </div>
                <div className="flex w-full items-center justify-between text-sm">
                    <p>Available</p> <p>30000 TZS</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-10">
                <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={() => navigate(-1)}>
                    Back
                </OutlineButton>
                <PrimaryButton className="text-center py-4 w-[150px]">Continue</PrimaryButton>
            </div>
        </Card>
    );
};

export default ConfirmOffer;
