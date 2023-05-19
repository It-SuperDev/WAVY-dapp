import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Dialog from 'components/Dialog';

// Icon
import { ReactComponent as CloseIcon } from 'assets/img/icon/close.svg';
import { ReactComponent as SuccessIcon } from 'assets/img/icon/success.svg';
import { ReactComponent as BackIcon } from '../assets/img/icon/arrow_back.svg';

import { useAppSelector } from 'hooks/useRedux';

const Dashboard = () => {
    const navigate = useNavigate();
    const selectedNet = useAppSelector((state) => state.selectedNet);

    const [open, setOpen] = useState(false);
    const [delopen, setDelOpen] = useState(false);
    const [endOpen, setEndOpen] = useState(0);

    const [delToken, setDelToken] = useState({ name: '', icon: '', sub: '' });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const delHandleClose = () => {
        setDelOpen(false);
    };
    const delHandleOpen = (one: any) => {
        setDelOpen(true);
        setDelToken(one);
    };

    const endHandleClose = () => {
        setEndOpen(0);
    };
    const endHandleOpen = (i: number) => {
        setEndOpen(i);
        delHandleClose();
        handleClose();
    };

    return (
        <>
            <div className="card p-8 min-w-[760px]">
                <div className="flex items-center justify-between relative mb-10 mx-[24px]">
                    <div
                        onClick={() => navigate(-1)}
                        className="absolute -left-10 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <BackIcon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center">
                        <img
                            src={selectedNet.icon}
                            alt="logo"
                            className="rounded-full bg-white h-[30px] w-[30px] mr-2"
                        />
                        <h1 className="text-3xl font-bold font-Unbounded">{`${selectedNet.sub} Stables`}</h1>
                    </div>
                    <button onClick={handleOpen} className="px-6 py-3 rounded-md bg-primary text-xs">
                        Add Stables
                    </button>
                </div>
                <div className="px-5 mb-5">
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {selectedNet.token.map(({ name, sub, icon }: any, i: number) => (
                            <div
                                key={i}
                                onClick={() => delHandleOpen({ name, sub, icon })}
                                className="min-w-[30%] flex w-full cursor-pointer items-center justify-between rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5"
                            >
                                <div className="flex items-center">
                                    <div className="h-[36px] w-[36px] rounded-full bg-white flex items-center justify-center">
                                        <img
                                            src={icon}
                                            alt="logo"
                                            className="rounded-full bg-white h-[30px] w-[30px] "
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base ml-2">{name}</p>
                                        <p className="text-xs ml-2 text-light-dark">{sub}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <div className="flex items-center justify-center relative mb-10 mt-3 mx-[24px]">
                    <div
                        onClick={handleClose}
                        className="absolute -right-5 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <CloseIcon className="h-4 w-4" />
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold font-Unbounded">Stellar Stables</h1>
                    </div>
                </div>
                <div className="w-full px-10 mb-[30px]">
                    {0 ? (
                        <>
                            <div>
                                <p className="text-xs mb-1">Code</p>
                                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5 mb-8">
                                    <input className="w-full bg-transparent text-lg" placeholder="Code" />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs mb-1">Issuer</p>
                                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5">
                                    <input className="w-full bg-transparent text-lg" placeholder="Issuer" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <p className="text-xs mb-1">Token Contract Address</p>
                                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5 mb-8">
                                    <input
                                        className="w-full bg-transparent text-lg"
                                        placeholder="Token Contract Address"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs mb-1">Token Symbol</p>
                                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5 mb-8">
                                    <input className="w-full bg-transparent text-lg" placeholder="Token Symbol" />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs mb-1">Token Decimal</p>
                                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5">
                                    <input
                                        className="w-full bg-transparent text-lg"
                                        placeholder="Token Decimal"
                                        defaultValue={0}
                                        type="number"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <button
                        onClick={() => endHandleOpen(1)}
                        className="w-full mt-[65px] py-4 bg-[#5a4ee8] rounded-lg cursor-pointer"
                    >
                        Add Stables
                    </button>
                </div>
            </Dialog>
            <Dialog open={delopen} onClose={delHandleClose}>
                <div className="flex items-center justify-center relative mb-10 mt-3 mx-[24px]">
                    <div
                        onClick={delHandleClose}
                        className="absolute -right-5 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <CloseIcon className="h-4 w-4" />
                    </div>
                    <div className="flex items-center">
                        <img src={delToken.icon} alt="logo" className="rounded-full bg-white h-[40px] w-[40px] mr-2" />
                        <h1 className="text-3xl font-bold font-Unbounded">{delToken.name}</h1>
                    </div>
                </div>
                <div className="w-full px-10 mb-[30px]">
                    <div className="mb-7">
                        <p className="text-xs mb-1">Asset Code</p>
                        <p className="text-sm text-light-dark">{delToken.name}</p>
                    </div>
                    <div className="mb-7">
                        <p className="text-xs mb-1">Currency</p>
                        <p className="text-sm text-light-dark">Argentine Peso</p>
                    </div>
                    <div className="mb-7">
                        <p className="text-xs mb-1">Issuer</p>
                        <p className="text-sm text-light-dark break-words">
                            GCYE7C77EB5AWAA25R5XMWNI2EDOKTTFTTPZKM2SR5DI4B4WFD52DARS
                        </p>
                    </div>
                    <div className="mb-7">
                        <p className="text-xs mb-1">Org URL</p>
                        <p className="text-sm text-light-dark">api.anclap.com</p>
                    </div>
                    <button
                        onClick={() => endHandleOpen(2)}
                        className="w-full mt-[40px] py-4 bg-[#FFFFFF] rounded-lg text-[#151518] cursor-pointer"
                    >
                        <span className="text-red-700">Remove Stable</span>
                    </button>
                </div>
            </Dialog>
            <Dialog open={Boolean(endOpen)} onClose={endHandleClose}>
                <div className="flex items-center justify-center relative mb-10 mt-3 mx-[24px]">
                    <div
                        onClick={endHandleClose}
                        className="absolute -right-5 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <CloseIcon className="h-4 w-4" />
                    </div>
                </div>
                <div className="flex items-center flex-col justify-center w-full px-10 mb-[30px]">
                    <SuccessIcon className="my-[33px] h-[130px] w-[130px]" />
                    {endOpen === 1 ? (
                        <h1 className="text-3xl text-center font-bold mb-10 font-Unbounded">
                            Stablecoin <br /> Added
                        </h1>
                    ) : (
                        <h1 className="text-3xl text-center font-bold mb-10 font-Unbounded">
                            Stablecoin <br /> Removed
                        </h1>
                    )}
                </div>
            </Dialog>
        </>
    );
};

export default Dashboard;
