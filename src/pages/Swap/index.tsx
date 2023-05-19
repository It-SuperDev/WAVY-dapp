import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SwapIcon } from 'assets/img/icon/swap-btn.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';

// Constatn
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';
import MobileSwapConfirm from 'components/MobileSwapConfirm';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { changeSetToken } from 'redux/selectToken';
import { setSwapToken } from 'redux/swap';

const Swap = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { isMobile } = useConfig();
    const swap = useAppSelector((state) => state.swap);
    const network = useAppSelector((state) => state.network);

    const swapData = useMemo(() => {
        return {
            from: network.token[swap.sIdx],
            to: network.token[swap.rIdx]
        };
    }, [network.token, swap]);

    const changOrder = () => {
        dispatch(setSwapToken({ sIdx: swap.rIdx, rIdx: swap.sIdx }));
    };

    const selectToken = (order: number, type: string) => {
        dispatch(changeSetToken({ key: 'SWAP', order, type, tokens: network.token }));
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
                            onChange={() => selectToken(swap.rIdx, 'sIdx')}
                        />

                        <div className="flex justify-center my-3">
                            <SwapIcon className="h-[30px] w-[30px] cursor-pointer" onClick={changOrder} />
                        </div>

                        <ValueInput
                            title="Receive"
                            available={true}
                            value={swapData.to.amount / 10}
                            token={swapData.to}
                            onChange={() => selectToken(swap.sIdx, 'rIdx')}
                        />
                        <p className="rounded-lg py-1 text-[#CCC8F8] my-4">{`1 ${swapData.from.name} = ${swap.equal} ${swapData.to.name}`}</p>

                        <button
                            className="w-full text-center py-4 mt-10 bg-[#5a4ee8] rounded-lg cursor-pointer"
                            onClick={() => setIsConfirm(true)}
                        >
                            Preview Swap
                        </button>
                    </div>
                </div>
                {isConfirm && (
                    <MobileSwapConfirm data={swapData} equal={swap.equal} close={() => setIsConfirm(false)} />
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
                        onChange={() => selectToken(swap.rIdx, 'sIdx')}
                    />
                    <div className="flex justify-center my-3">
                        <SwapIcon className="h-[28px] w-[28px] cursor-pointer" onClick={changOrder} />
                    </div>
                    <ValueInput
                        title="To"
                        available={true}
                        value={swapData.to.amount / 10}
                        token={swapData.to}
                        onChange={() => selectToken(swap.sIdx, 'rIdx')}
                    />
                    <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">{`1 ${swapData.from.name} = ${swap.equal} ${swapData.to.name}`}</p>

                    <button
                        className="w-full text-center py-4 mt-10 bg-[#5a4ee8] rounded-lg cursor-pointer"
                        onClick={() => navigate('preview')}
                    >
                        Preview Swap
                    </button>
                </div>
            </Card>
        );
    }
};

export default Swap;
