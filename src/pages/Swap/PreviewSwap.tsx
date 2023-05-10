import { useNavigate } from 'react-router-dom';

// Icon
import EastIcon from '@mui/icons-material/East';
import kes from 'assets/img/icon/ar.svg';
import audd from 'assets/img/icon/man.svg';

// component
import Card from 'components/Card';
import { PrimaryButton, OutlineButton } from 'components/Styled';

const PreviewSwap = () => {
    const navigate = useNavigate();

    return (
        <Card title="Confirm Conversion">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={kes} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-xs mb-2">From</p>
                    <p className="text-base font-bold">10000 ARS</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={audd} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-xs mb-2">Receive</p>
                    <p className="text-base font-bold">20.57 EURC</p>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-[0.6px] px-5 py-4 border-[#ACACAE}]">
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Conversion Fee</p> <p>No fees</p>
                </div>
                <div className="flex w-full items-center justify-between text-sm">
                    <p>Rate</p> <p>1 EURC = 486.04 ARS</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-10">
                <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={() => navigate(-1)}>
                    Back
                </OutlineButton>
                <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/swap/process')}>
                    Continue
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default PreviewSwap;
