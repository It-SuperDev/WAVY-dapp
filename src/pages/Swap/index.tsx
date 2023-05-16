import { useState, useMemo } from 'react';
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
    const { isMobile, changeData, SWAP, NETWORK } = data;

    const swapData = useMemo(() => {
        return {
            from: NETWORK.token[SWAP.sIdx],
            to: NETWORK.token[SWAP.rIdx]
        };
    }, [NETWORK.token, SWAP]);

    const changOrder = () => {
        const tRIsx = SWAP.sIdx;
        const tSIsx = SWAP.rIdx;
        const tSEND = { ...SWAP, sIdx: tSIsx, rIdx: tRIsx };
        changeData({ key: 'SWAP', data: tSEND });
    };

    const selectToken = (param: number, order: string) => {
        changeData({ key: 'TOKEN_SELECT', data: ['SWAP', order, param] });
        navigate('/select');
    };

    const [isConfirm, setIsConfirm] = useState(false);

    if (isMobile) {
        return (
            <MobileCard title="Swap" back={() => navigate('/')}>
                <div
                    style={{ height: 'calc(100vh - 28px - 32px - 60px)' }}
                    className=" py-[30px] px-5 flex flex-col justify-between"
                >
                    <div className="w-full">
                        <ValueInput
                            title="From"
                            available={true}
                            value={swapData.from.amount / 10}
                            token={swapData.from}
                            onChange={() => selectToken(SWAP.rIdx, 'sIdx')}
                        />

                        <div className="flex justify-center my-3">
                            <SwapIcon className="h-[30px] w-[30px] cursor-pointer" onClick={changOrder} />
                        </div>

                        <ValueInput
                            title="Receive"
                            available={true}
                            value={swapData.to.amount / 10}
                            token={swapData.to}
                            onChange={() => selectToken(SWAP.sIdx, 'rIdx')}
                        />
                        <p className="rounded-lg py-1 text-[#CCC8F8] my-4">{`1 ${swapData.from.name} = ${SWAP.equal} ${swapData.to.name}`}</p>

                        <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => setIsConfirm(true)}>
                            Preview Swap
                        </PrimaryButton>
                    </div>
                </div>
                {isConfirm && (
                    <MobileSwapConfirm data={swapData} equal={SWAP.equal} close={() => setIsConfirm(false)} />
                )}
            </MobileCard>
        );
    } else {
        return (
            <Card title="Swap" back={() => navigate('/')}>
                <div className="flex flex-col w-full">
                    <ValueInput
                        title="From"
                        available={true}
                        value={swapData.from.amount / 10}
                        token={swapData.from}
                        onChange={() => selectToken(SWAP.rIdx, 'sIdx')}
                    />
                    <div className="flex justify-center my-3">
                        <SwapIcon className="h-[28px] w-[28px] cursor-pointer" onClick={changOrder} />
                    </div>
                    <ValueInput
                        title="To"
                        available={true}
                        value={swapData.to.amount / 10}
                        token={swapData.to}
                        onChange={() => selectToken(SWAP.sIdx, 'rIdx')}
                    />
                    <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">{`1 ${swapData.from.name} = ${SWAP.equal} ${swapData.to.name}`}</p>

                    <PrimaryButton className="w-full text-center py-4 mt-10" onClick={() => navigate('preview')}>
                        Preview Swap
                    </PrimaryButton>
                </div>
            </Card>
        );
    }
};

export default Swap;
