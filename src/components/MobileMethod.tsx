// Icons
import { ReactComponent as CloseIcon } from 'assets/img/icon/close.svg';
import { ReactComponent as ChevronRightIcon } from 'assets/img/icon/chevron-right.svg';

import useConfig from 'hooks/useConfig';
import { TOP_METHOD, WITHDRAW_METHOD } from 'config/constants/demo';

const MobileMethod = ({ isTop, size, close, callback, tokenName }: any) => {
    const prevent = (e: any) => {
        e.preventDefault();
    };

    const gData = useConfig();

    const data = isTop ? TOP_METHOD : WITHDRAW_METHOD;

    return (
        <>
            <div
                className="flex flex-col w-full fixed bottom-0 left-0 z-10 px-5 pt-10 bg-[#151518] rounded-t-3xl shadow-[0px_-4px_20px_13px_black]"
                onClick={prevent}
            >
                <div className="flex items-start justify-center relative">
                    {close && (
                        <div
                            onClick={close}
                            className="absolute right-0 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                        >
                            <CloseIcon className="h-4 w-4" />
                        </div>
                    )}
                    <div>
                        <h2 className="text-center text-xl font-bold font-Unbounded ">
                            {isTop ? 'Top up with' : 'Withdraw to'}
                        </h2>
                        <p className="text-center text-sm text-[#ACACAE]">
                            {isTop ? 'Select top up option' : 'Select withdrawal option'}
                        </p>
                    </div>
                </div>
                <div className="py-[30px]">
                    <div className="py-2">
                        {gData.NETWORK.sub !== 'Stellar' ? (
                            <div className="flex flex-col">
                                <li
                                    className="cursor-pointer px-5 py-4 mb-2 bg-[#242429] rounded-lg flex items-center "
                                    onClick={() => callback()}
                                >
                                    <div className="bg-[#494979] mr-2 w-[34px] h-[34px] flex items-center justify-center rounded-full">
                                        <img src={data[0].icon} className="h-[20px] w-[20px]" alt="currency" />
                                    </div>
                                    <div className="mr-auto">
                                        <p> {data[0].name}</p>
                                        <p className="text-xs text-[#ACACAE] whitespace-pre-wrap"> {data[0].sub}</p>
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </li>
                            </div>
                        ) : (
                            <>
                                {(() => {
                                    const redata = tokenName === 'USDC' ? data : data.slice(0, -1);
                                    return redata.map(
                                        (
                                            { name, sub, icon }: { name: string; sub: string; icon: string },
                                            i: number
                                        ) => (
                                            <div className="flex flex-col" key={i}>
                                                <li
                                                    className="cursor-pointer px-5 py-4 mb-2 bg-[#242429] rounded-lg flex items-center "
                                                    onClick={() => callback(i)}
                                                >
                                                    <div className="bg-[#494979] mr-2 w-[34px] h-[34px] flex items-center justify-center rounded-full">
                                                        <img src={icon} className="h-[20px] w-[20px]" alt="currency" />
                                                    </div>
                                                    <div className="mr-auto">
                                                        <p> {name}</p>
                                                        <p className="text-xs text-[#ACACAE] whitespace-pre-wrap">
                                                            {sub}
                                                        </p>
                                                    </div>
                                                    <ChevronRightIcon className="w-4 h-4" />
                                                </li>
                                            </div>
                                        )
                                    );
                                })()}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000066]" onClick={close} />
        </>
    );
};

export default MobileMethod;
