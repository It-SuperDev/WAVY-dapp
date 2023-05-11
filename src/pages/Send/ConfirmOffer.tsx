import EastIcon from '@mui/icons-material/East';

import Card from 'components/Card';
import { OutlineButton, PrimaryButton } from 'components/Styled';
import { useNavigate } from 'react-router-dom';
import useConfig from 'hooks/useConfig';

const ConfirmOffer = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <Card title="Confirm offer">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={data.NETWORK.newOffer.send.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-xs mb-2">From</p>
                    <p className="text-base font-Unbounded font-bold">{data.NETWORK.newOffer.send.name}</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={data.NETWORK.newOffer.receive.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-xs mb-2">Receive</p>
                    <p className="text-base font-Unbounded font-bold">{data.NETWORK.newOffer.receive.name}</p>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-[0.6px] px-5 py-4 border-[#ACACAE}]">
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Send currency</p> <p>{data.NETWORK.newOffer.send.name}</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Receive currency</p> <p>{data.NETWORK.newOffer.receive.name}</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Exchange rate</p>{' '}
                    <p>{`1 ${data.NETWORK.newOffer.send.name} = ${data.NETWORK.newOffer.rate} ${data.NETWORK.newOffer.receive.name}`}</p>
                </div>
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Limit</p>{' '}
                    <p>{`${data.NETWORK.newOffer.min} - ${data.NETWORK.newOffer.max} ${data.NETWORK.newOffer.receive.name}`}</p>
                </div>
                <div className="flex w-full items-center justify-between text-sm">
                    <p>Available</p> <p>{`30000 ${data.NETWORK.newOffer.send.name}`}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-10">
                <OutlineButton className="text-center text-bold py-4 w-[150px]" onClick={() => navigate(-1)}>
                    Back
                </OutlineButton>
                <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/send/offers')}>
                    Continue
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default ConfirmOffer;
