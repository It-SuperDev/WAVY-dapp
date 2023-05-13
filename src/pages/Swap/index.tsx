import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SwapIcon } from 'assets/img/icon/swap-btn.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';
import MobileSwapConfirm from 'components/MobileSwapConfirm';

const Swap = () => {
    const navigate = useNavigate();
    const data = useConfig();

    const [status, setStatus] = useState(true);
    const [isConfirm, setIsConfirm] = useState(false);

    if (data.isMobile) {
        return (
            <MobileCard title="Swap" back={() => navigate('/')}>
                <div
                    style={{ height: 'calc(100vh - 28px - 32px - 60px)' }}
                    className=" py-[30px] px-5 flex flex-col justify-between"
                >
                    <div className="w-full">
                        <ValueInput
                            title="Amount"
                            available={`Available: 2500.33 ${data.NETWORK.send.send.name}`}
                            value={0.0}
                            tokenList={[
                                data.NETWORK.swap[`${status ? 'from' : 'to'}`],
                                data.NETWORK.swap[`${status ? 'from' : 'to'}`]
                            ]}
                        />

                        <div className="flex justify-center my-3">
                            <SwapIcon
                                className="h-[30px] w-[30px] cursor-pointer"
                                onClick={() => setStatus((pre: boolean) => !pre)}
                            />
                        </div>

                        <ValueInput
                            title="Receive"
                            value={0.0}
                            tokenList={[
                                data.NETWORK.swap[`${!status ? 'from' : 'to'}`],
                                data.NETWORK.swap[`${!status ? 'from' : 'to'}`]
                            ]}
                        />
                        <p className="rounded-lg py-1 text-[#CCC8F8] my-4">{data.NETWORK.swap.equal}</p>

                        <PrimaryButton className="w-full text-center py-4" onClick={() => setIsConfirm(true)}>
                            Preview Swap
                        </PrimaryButton>
                    </div>
                </div>
                {isConfirm && <MobileSwapConfirm close={() => setIsConfirm(false)} />}
            </MobileCard>
        );
    } else {
        return (
            <Card title="Swap" back={() => navigate('/')}>
                <div className="flex flex-col w-full">
                    <ValueInput
                        title="From"
                        available={data.NETWORK.swap[`${status ? 'from' : 'to'}`].available}
                        value={data.NETWORK.swap[`${status ? 'from' : 'to'}`].value}
                        tokenList={[
                            data.NETWORK.swap[`${status ? 'from' : 'to'}`],
                            data.NETWORK.swap[`${status ? 'from' : 'to'}`]
                        ]}
                    />
                    <div className="flex justify-center my-3">
                        <SwapIcon
                            className="h-[28px] w-[28px] cursor-pointer"
                            onClick={() => setStatus((pre: boolean) => !pre)}
                        />
                    </div>
                    <ValueInput
                        title="To"
                        available={data.NETWORK.swap[`${!status ? 'from' : 'to'}`].available}
                        value={data.NETWORK.swap[`${!status ? 'from' : 'to'}`].value}
                        tokenList={[
                            data.NETWORK.swap[`${!status ? 'from' : 'to'}`],
                            data.NETWORK.swap[`${!status ? 'from' : 'to'}`]
                        ]}
                    />
                    <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">{data.NETWORK.swap.equal}</p>

                    <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('preview')}>
                        Preview Swap
                    </PrimaryButton>
                </div>
            </Card>
        );
    }
};

export default Swap;
