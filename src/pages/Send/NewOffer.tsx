import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';
import ValueInput from 'components/ValueInput';
import { HInput, Input, PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';

const NewOffer = () => {
    const navigate = useNavigate();
    const data = useConfig();

    const [min, setMin] = useState(data.NETWORK.newOffer.min);
    const [max, setMax] = useState(data.NETWORK.newOffer.max);
    const [rate, setRate] = useState(data.NETWORK.newOffer.rate);
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [rateError, setRateError] = useState(false);

    const handleRate = (e: any) => {
        setRate(e.target.value);
        setRateError(data.NETWORK.newOffer.receive.value < e.target.value);
    };

    const changeReceive = (token: any) => {
        data.NETWORK.newOffer.receive = token;
    };
    const changeSend = (token: any) => {
        data.NETWORK.newOffer.send = token;
    };

    useEffect(() => {
        if (data.NETWORK) {
            setMin(data.NETWORK.newOffer.min);
            setMax(data.NETWORK.newOffer.max);
            setRate(data.NETWORK.newOffer.rate);
            setName(data.NETWORK.newOffer.receive.name);
            setIcon(data.NETWORK.newOffer.receive.icon);
        }
    }, [data.NETWORK]);

    if (data.isMobile) {
        return (
            <MobileCard title="Create a new offer" fontSize={20} back={() => navigate('/send')}>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5 flex flex-col items-center justify-center w-full">
                    <div className="w-full h-full pb-[100px]">
                        <ValueInput
                            onChange={changeSend}
                            title="Send"
                            available={data.NETWORK.newOffer.send.available}
                            value={data.NETWORK.newOffer.send.value}
                            tokenList={[data.NETWORK.newOffer.send, data.NETWORK.newOffer.send]}
                            classes="mr-2"
                        />
                        <ValueInput
                            onChange={changeReceive}
                            title="Receive"
                            value={data.NETWORK.newOffer.receive.value}
                            tokenList={[data.NETWORK.newOffer.receive, data.NETWORK.newOffer.receive]}
                        />
                        <div>
                            <p className="text-sm text-light-dark">Exchange rate</p>
                            <div className="flex items-center">
                                <p className="text-2xl">{`1 ${data.NETWORK.newOffer.send.name} =`}</p>
                                <div
                                    className="flex rounded-lg border-[0.6px] px-5 py-3 ml-10 w-3/5"
                                    style={{ borderColor: rateError ? '#FF0004' : '#ACACAE' }}
                                >
                                    <HInput
                                        type="number"
                                        className="text-3xl w-full"
                                        value={rate}
                                        onChange={handleRate}
                                    />
                                    <div className="flex items-center w-full cursor-pointer">
                                        <img src={icon} alt="token" className="w-[24px] h-[24px]" />
                                        <span className="text-base mx-2">{name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5  w-full">
                            <p className="text-2xl mb-2">Set order limit</p>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col w-1/2">
                                    <span className="text-sm text-light-dark mb-3">{`Min. order (${data.NETWORK.newOffer.receive.name})`}</span>
                                    <div className="rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] ">
                                        <Input
                                            type="number"
                                            className="w-full"
                                            value={min}
                                            onChange={(e: any) => setMin(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="text-3xl mx-5">-</div>

                                <div className="flex flex-col w-1/2">
                                    <span className="text-sm text-light-dark mb-3">{`Max. order (${data.NETWORK.newOffer.receive.name})`}</span>
                                    <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] ">
                                        <Input
                                            type="number"
                                            className="w-full"
                                            value={max}
                                            onChange={(e: any) => setMax(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton className="text-center mt-10 py-4 w-full" onClick={() => navigate('confirm')}>
                            Create an offer
                        </PrimaryButton>
                    </div>
                </div>
            </MobileCard>
        );
    } else {
        return (
            <Card title="Create a new offer" back={() => navigate('/send')} lg={650}>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between mb-10">
                        <ValueInput
                            title="Send"
                            available={data.NETWORK.newOffer.send.available}
                            value={data.NETWORK.newOffer.send.value}
                            tokenList={[data.NETWORK.newOffer.send, data.NETWORK.newOffer.send]}
                            classes="mr-2"
                        />
                        <ValueInput
                            title="Receive"
                            value={data.NETWORK.newOffer.receive.value}
                            tokenList={[data.NETWORK.newOffer.receive, data.NETWORK.newOffer.receive]}
                        />
                    </div>
                    <div>
                        <p className="text-sm">Exchange rate</p>
                        <div className="flex items-center">
                            <p className="text-2xl">{`1 ${data.NETWORK.newOffer.send.name} =`}</p>
                            <div
                                className="flex rounded-lg border-[0.6px] px-5 py-2 ml-10"
                                style={{ borderColor: rateError ? '#FF0004' : '#ACACAE' }}
                            >
                                <HInput type="number" className="text-lg" value={rate} onChange={handleRate} />
                                <div className="flex items-center w-full cursor-pointer">
                                    <img
                                        src={data.NETWORK.newOffer.receive.icon}
                                        alt="token"
                                        className="w-[24px] h-[24px]"
                                    />
                                    <span className="text-base mx-2">{data.NETWORK.newOffer.receive.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <p className="text-2xl mb-2">Set order limit</p>
                        <div className="flex items-center">
                            <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                                <span className="text-sm">{`Min. order (${data.NETWORK.newOffer.receive.name})`}</span>
                                <Input
                                    type="number"
                                    className=""
                                    value={min}
                                    onChange={(e: any) => setMin(e.target.value)}
                                />
                            </div>
                            <div className="text-3xl mx-5">-</div>
                            <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                                <span className="text-sm">{`Max. order (${data.NETWORK.newOffer.receive.name})`}</span>
                                <Input
                                    type="number"
                                    className=""
                                    value={max}
                                    onChange={(e: any) => setMax(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <PrimaryButton className="text-center mt-10 py-4 w-[60%]" onClick={() => navigate('confirm')}>
                            Create an offer
                        </PrimaryButton>
                    </div>
                </div>
            </Card>
        );
    }
};

export default NewOffer;
