import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as EastIcon } from 'assets/img/icon/arrow-right.svg';

// component
import Card from 'components/Card';
import { useAppSelector } from 'hooks/useRedux';

const PreviewSwap = () => {
    const navigate = useNavigate();
    const swap = useAppSelector((state) => state.swap);
    const network = useAppSelector((state) => state.network);

    const swapData = useMemo(() => {
        return {
            from: network.token[swap.sIdx],
            to: network.token[swap.rIdx]
        };
    }, [network.token, swap]);

    return (
        <Card title="Confirm Conversion">
            <div className="w-full flex items-center justify-around mb-8">
                <div className="flex flex-col items-center">
                    <img src={swapData.from.icon} alt="token" className="w-[60px] h-[60px] mb-3" />
                    <p className="text-sm mb-2">From</p>
                    <p className="text-base font-Unbounded font-medium">{`${swapData.from.amount / 10} ${
                        swapData.from.name
                    }`}</p>
                </div>
                <EastIcon />
                <div className="flex flex-col items-center">
                    <img src={swapData.to.icon} alt="token" className="w-[60px] h-[60px]  mb-3" />
                    <p className="text-sm mb-2">Receive</p>
                    <p className="text-base font-Unbounded font-medium">{`${swapData.to.amount / 10} ${
                        swapData.to.name
                    }`}</p>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-[0.6px] px-5 py-4 border-[#ACACAE]">
                <div className="flex w-full items-center justify-between mb-5 text-sm">
                    <p>Conversion Fee</p> <p>No fees</p>
                </div>
                <div className="flex w-full items-center justify-between text-sm">
                    <p>Rate</p> <p>{`1 ${swapData.from.name} = ${swap.equal} ${swapData.to.name}`}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-10">
                <button
                    className="text-center text-bold py-4 w-[150px] bg-transparent border-[2px] border-solid border-[#ffffff] rounded-lg cursor-pointer"
                    onClick={() => navigate('/swap')}
                >
                    Back
                </button>
                <button
                    className="text-center py-4 w-[150px] bg-[#5a4ee8] rounded-lg cursor-pointer"
                    onClick={() => navigate('/swap/process')}
                >
                    Continue
                </button>
            </div>
        </Card>
    );
};

export default PreviewSwap;
