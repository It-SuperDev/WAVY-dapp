import { useState, useMemo } from 'react';
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
    const { isMobile, changeData, OFFER, NETWORK } = useConfig();

    const [min, setMin] = useState(OFFER.min);
    const [max, setMax] = useState(OFFER.max);
    const [rate, setRate] = useState(OFFER.rate);
    const [rateError, setRateError] = useState(false);

    const offerData = useMemo(() => {
        return {
            send: NETWORK.token[OFFER.sIdx],
            receive: NETWORK.token[OFFER.rIdx]
        };
    }, [NETWORK.token, OFFER]);

    const handleRate = (e: any) => {
        setRate(e.target.value);
        setRateError(offerData.receive.amount < e.target.value);
    };

    const selectToken = (param: number, order: string) => {
        changeData({ key: 'TOKEN_SELECT', data: ['OFFER', order, param] });
        navigate('/select');
    };
    if (isMobile) {
        return (
            <MobileCard title="Create a new offer" fontSize={20} back={() => navigate('/send')}>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5 flex flex-col items-center justify-center w-full">
                    <div className="w-full h-full pb-[100px]">
                        <ValueInput
                            onChange={() => selectToken(OFFER.rIdx, 'sIdx')}
                            title="Send"
                            available={true}
                            value={offerData.send.amount / 10}
                            token={offerData.send}
                            classes="mr-2"
                        />
                        <ValueInput
                            onChange={() => selectToken(OFFER.sIdx, 'rIdx')}
                            title="Receive"
                            value={offerData.receive.amount / 10}
                            token={offerData.receive}
                        />
                        <div>
                            <p className="text-sm text-light-dark">Exchange rate</p>
                            <div className="flex items-center">
                                <p className="text-2xl">{`1 ${offerData.send.name} =`}</p>
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
                                        <img src={offerData.receive.icon} alt="token" className="w-[24px] h-[24px]" />
                                        <span className="text-base mx-2">{offerData.receive.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5  w-full">
                            <p className="text-2xl mb-2">Set order limit</p>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col w-1/2">
                                    <span className="text-sm text-light-dark mb-3">{`Min. order (${offerData.receive.name})`}</span>
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
                                    <span className="text-sm text-light-dark mb-3">{`Max. order (${offerData.receive.name})`}</span>
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
                            available={true}
                            value={offerData.send.amount / 10}
                            token={offerData.send}
                            classes="mr-2"
                            onChange={() => selectToken(OFFER.rIdx, 'sIdx')}
                        />
                        <ValueInput
                            onChange={() => selectToken(OFFER.sIdx, 'rIdx')}
                            title="Receive"
                            value={offerData.receive.amount / 10}
                            token={offerData.receive}
                        />
                    </div>
                    <div>
                        <p className="text-sm">Exchange rate</p>
                        <div className="flex items-center">
                            <p className="text-2xl">{`1 ${offerData.send.name} =`}</p>
                            <div
                                className="flex rounded-lg border-[0.6px] px-5 py-2 ml-10"
                                style={{ borderColor: rateError ? '#FF0004' : '#ACACAE' }}
                            >
                                <HInput type="number" className="text-lg" value={rate} onChange={handleRate} />
                                <div className="flex items-center w-full cursor-pointer">
                                    <img src={offerData.receive.icon} alt="token" className="w-[24px] h-[24px]" />
                                    <span className="text-base mx-2">{offerData.receive.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <p className="text-2xl mb-2">Set order limit</p>
                        <div className="flex items-center">
                            <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                                <span className="text-sm">{`Min. order (${offerData.receive.name})`}</span>
                                <Input
                                    type="number"
                                    className=""
                                    value={min}
                                    onChange={(e: any) => setMin(e.target.value)}
                                />
                            </div>
                            <div className="text-3xl mx-5">-</div>
                            <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                                <span className="text-sm">{`Max. order (${offerData.receive.name})`}</span>
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
