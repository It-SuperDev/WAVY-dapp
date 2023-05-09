import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'components/Card';

import kes from 'assets/img/coin/kes.svg';
import audd from 'assets/img/coin/audd.svg';
import EastIcon from '@mui/icons-material/East';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { PrimaryButton } from 'components/Styled';
import MenuList from 'components/MenuList';
import { MY_OFFER_ACTION } from 'config/constants/demo';

const Send = () => {
    const navigate = useNavigate();
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const anchorHandle = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    const callBack = (i: number) => {
        if (!i) {
            navigate('/send/edit-offer');
        } else {
            navigate('/send/delete-offer');
        }
        handleClose();
    };

    return (
        <Card title="My Offers" back={() => navigate('/send')}>
            {new Array(4).fill(0).map((_: number, i: number) => (
                <div
                    key={i}
                    className="w-full grid mt-4 border-light-dark border-[0.6px] px-3 py-2 rounded-lg grid-cols-3"
                >
                    <div className="flex flex-col">
                        <p className="text-xs">You send</p>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center cursor-pointer mt-1 mb-2">
                                <img src={kes} alt="token" className="w-[24px] h-[24px]" />
                                <span className="text-base ml-2">KES</span>
                            </div>
                            <EastIcon sx={{ fontSize: 20 }} />
                        </div>
                        <div>
                            <p className="text-xs text-light-dark">Exchange rate</p>
                            <p className="text-sm">1 AUDD = 90.67 KES</p>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <p className="text-xs">You receive</p>
                        <div className="flex items-center cursor-pointer mt-1 mb-2">
                            <img src={audd} alt="token" className="w-[24px] h-[24px]" />
                            <span className="text-base ml-2">AUUD</span>
                        </div>
                        <div>
                            <p className="text-xs text-light-dark">Available</p>
                            <p className="text-sm">3000 AUDD</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end relative">
                        <div
                            onClick={anchorHandle}
                            className="absolute flex items-center justify-center cursor-pointer w-[30px] h-[30px] border-light-dark border-[0.6px] rounded-full top-0 right-0"
                        >
                            <MoreVertIcon sx={{ fontSize: 16 }} />
                        </div>
                        <p className="text-xs"></p>
                        <div className="line-flex text-[#242429] font-bold">
                            {(() => {
                                switch (i) {
                                    case 0:
                                        return (
                                            <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#B8ACFF]">
                                                Active
                                            </div>
                                        );
                                    case 1:
                                        return (
                                            <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#FCEB06]">
                                                Accepted
                                            </div>
                                        );
                                    case 2:
                                        return (
                                            <div className="inline-flex py-2 px-2 items-center text-xs cursor-pointer mt-1 mb-2 rounded-full bg-[#07E58A]">
                                                Completed
                                            </div>
                                        );
                                    case 3:
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
                            <p className="text-sm">1 - 500 AUDD</p>
                        </div>
                    </div>
                </div>
            ))}
            <PrimaryButton className="text-center py-4 w-[60%] mt-5" onClick={() => navigate('/send/create-offer')}>
                Create a new offer
            </PrimaryButton>
            <MenuList data={MY_OFFER_ACTION} anchor={anchor} close={handleClose} callback={callBack} size={25} />
        </Card>
    );
};

export default Send;
