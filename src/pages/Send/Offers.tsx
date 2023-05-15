import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as BackIcon } from 'assets/img/icon/arrow_back.svg';
import EastIcon from '@mui/icons-material/East';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled
import { PrimaryButton, CardDiv } from 'components/Styled';
import MenuList from 'components/MenuList';
import { MY_OFFER_ACTION } from 'config/constants/demo';
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';
import MobileList from 'components/MobileList';
import MobileDeleteOffer from 'components/MobileDeleteOffer';

const Send = () => {
    const navigate = useNavigate();
    const data = useConfig();

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const [index, setIndex] = useState(0);
    const [deleteModal, setDeleteModal] = useState(false);

    const anchorHandle = (event: any, i: number) => {
        setAnchor(event.currentTarget);
        setIndex(i);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    const callBack = (i: number) => {
        if (!i) {
            navigate('/send/edit-offer');
        } else {
            if (data.isMobile) {
                setDeleteModal(true);
            } else {
                navigate(`/send/delete-offer/${index}`);
            }
        }
        handleClose();
    };

    if (data.isMobile) {
        return (
            <MobileCard title="My offers" back={() => navigate('/send')}>
                <div className="bg-[#242429] rounded-t-3xl py-[30px] px-5">
                    <div className="overflow-auto mb-[100px]">
                        {data.NETWORK.offers.map((one: any, i: number) => (
                            <div
                                key={i}
                                className="w-full grid mb-4 border-light-dark border-[0.6px] px-5 py-6 rounded-lg flex flex-col"
                            >
                                <div className="flex  justify-between">
                                    <div className="flex flex-col w-1/2">
                                        <p className="text-xs">You send</p>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center cursor-pointer mt-1 mb-2">
                                                <img src={one.send.icon} alt="token" className="w-[24px] h-[24px]" />
                                                <span className="text-base ml-2">{one.send.name}</span>
                                            </div>
                                            <EastIcon sx={{ fontSize: 20, mr: 4 }} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 relative">
                                        <div
                                            onClick={(e: any) => anchorHandle(e, i)}
                                            className="absolute flex items-center justify-center cursor-pointer w-[30px] h-[30px] border-light-dark border-[0.6px] rounded-full top-0 right-0"
                                        >
                                            <MoreVertIcon sx={{ fontSize: 16 }} />
                                        </div>
                                        <p className="text-xs">You receive</p>
                                        <div className="flex items-center cursor-pointer mt-1 mb-2">
                                            <img src={one.receive.icon} alt="token" className="w-[24px] h-[24px]" />
                                            <span className="text-base ml-2">{one.receive.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between w-full">
                                    <div>
                                        <p className="text-xs text-light-dark">Exchange rate</p>
                                        <p className="text-sm">{one.rate}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-light-dark">limit</p>
                                        <p className="text-sm">{one.limit}</p>
                                    </div>
                                    <div className="line-flex self-end text-[#242429] font-bold ">
                                        {(() => {
                                            switch (one.status) {
                                                case 'active':
                                                    return (
                                                        <div className="inline-flex py-1 px-2 items-center text-xs cursor-pointer rounded-full bg-[#B8ACFF]">
                                                            Active
                                                        </div>
                                                    );
                                                case 'accpted':
                                                    return (
                                                        <div className="inline-flex py-1 px-2 items-center text-xs cursor-pointer rounded-full bg-[#FCEB06]">
                                                            Accepted
                                                        </div>
                                                    );
                                                case 'completed':
                                                    return (
                                                        <div className="inline-flex py-1 px-2 items-center text-xs cursor-pointer rounded-full bg-[#07E58A]">
                                                            Completed
                                                        </div>
                                                    );
                                                case 'Cancelled':
                                                    return (
                                                        <div className="inline-flex py-1 px-2 items-center text-xs cursor-pointer rounded-full bg-[#FE7F83]">
                                                            Cancelled
                                                        </div>
                                                    );
                                            }
                                        })()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full fixed items-center justify-between bottom-0 px-5 pt-6 pb-12 bg-[#151518] rounded-t-3xl">
                    <PrimaryButton
                        className="px-3 text-center py-4 min-w-[150px] text-sm w-full"
                        onClick={() => navigate('/send/create-offer')}
                    >
                        Create a new offer
                    </PrimaryButton>
                </div>
                {Boolean(anchor) && (
                    <MobileList data={MY_OFFER_ACTION} close={handleClose} callback={callBack} notClose={true} />
                )}
                {deleteModal && <MobileDeleteOffer idx={index} close={() => setDeleteModal(false)} />}
            </MobileCard>
        );
    } else {
        return (
            <CardDiv className="card py-7 min-h-[500px] w-[650px]">
                <div className="flex items-center justify-center relative mb-10 mx-[24px]">
                    <div
                        onClick={() => navigate('/send')}
                        className="absolute left-0 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <BackIcon className="h-7 w-7" />
                    </div>

                    <h2 className="text-center text-2xl font-bold font-Unbounded ">My Offers</h2>
                </div>
                <div className="flex flex-col min-h-[400px] justify-between">
                    <div className="flex flex-col items-center h-full px-[64px]">
                        {data.NETWORK.offers.map((one: any, i: number) => (
                            <div
                                key={i}
                                className="bg-[#19181F] w-full grid mt-4 border-light-dark border-[0.6px] px-3 py-2 rounded-lg grid-cols-3"
                            >
                                <div className="flex flex-col">
                                    <p className="text-xs">You send</p>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center cursor-pointer mt-1 mb-2">
                                            <img src={one.send.icon} alt="token" className="w-[24px] h-[24px]" />
                                            <span className="text-base ml-2">{one.send.name}</span>
                                        </div>
                                        <EastIcon sx={{ fontSize: 20 }} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-light-dark">Exchange rate</p>
                                        <p className="text-sm">{one.rate}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col mx-auto">
                                    <p className="text-xs">You receive</p>
                                    <div className="flex items-center cursor-pointer mt-1 mb-2">
                                        <img src={one.receive.icon} alt="token" className="w-[24px] h-[24px]" />
                                        <span className="text-base ml-2">{one.receive.name}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-light-dark">Available</p>
                                        <p className="text-sm">{one.available}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end relative">
                                    <div
                                        onClick={(e: any) => anchorHandle(e, i)}
                                        className="absolute flex items-center justify-center cursor-pointer w-[30px] h-[30px] border-light-dark border-[0.6px] rounded-full top-0 right-0"
                                    >
                                        <MoreVertIcon sx={{ fontSize: 16 }} />
                                    </div>
                                    <p className="text-xs"></p>
                                    <div className="line-flex text-[#242429] font-bold">
                                        {(() => {
                                            switch (one.status) {
                                                case 'active':
                                                    return (
                                                        <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#B8ACFF]">
                                                            Active
                                                        </div>
                                                    );
                                                case 'accpted':
                                                    return (
                                                        <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#FCEB06]">
                                                            Accepted
                                                        </div>
                                                    );
                                                case 'completed':
                                                    return (
                                                        <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#07E58A]">
                                                            Completed
                                                        </div>
                                                    );
                                                case 'Cancelled':
                                                    return (
                                                        <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#FE7F83]">
                                                            Cancelled
                                                        </div>
                                                    );
                                            }
                                        })()}
                                    </div>
                                    <div>
                                        <p className="text-xs text-light-dark">limit</p>
                                        <p className="text-sm">{one.limit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-5">
                        <PrimaryButton
                            className="text-center py-4 w-[60%]"
                            onClick={() => navigate('/send/create-offer')}
                        >
                            Create a new offer
                        </PrimaryButton>
                    </div>
                    <MenuList
                        data={MY_OFFER_ACTION}
                        anchor={anchor}
                        close={handleClose}
                        callback={callBack}
                        size={25}
                    />
                </div>
            </CardDiv>
        );
    }
};

export default Send;
