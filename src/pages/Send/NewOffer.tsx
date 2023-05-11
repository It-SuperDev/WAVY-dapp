import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import ngncIcon from 'assets/img/coin/ngnc.svg';

// component
import Card from 'components/Card';
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
                        title="Send"
                        value={data.NETWORK.newOffer.receive.value}
                        tokenList={[data.NETWORK.newOffer.receive, data.NETWORK.newOffer.receive]}
                    />
                </div>
                <div>
                    <p className="text-sm">Exchange rate</p>
                    <div className="flex items-center">
                        <p className="text-2xl">{`1 ${data.NETWORK.newOffer.send.name} =`}</p>
                        <div className="flex rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] ml-10">
                            <HInput
                                type="number"
                                className="text-lg"
                                value={rate}
                                onChange={(e: any) => setRate(e.target.value)}
                            />
                            <div className="flex items-center w-full cursor-pointer">
                                <img src={ngncIcon} alt="token" className="w-[24px] h-[24px]" />
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
                                defaultValue={1}
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
                                defaultValue={500}
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
};

export default NewOffer;
