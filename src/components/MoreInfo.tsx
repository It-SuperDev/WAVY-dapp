// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as BackIcon } from 'assets/img/icon/arrow_back.svg';
import { useState } from 'react';
import { CURRENCY, LANGUAGE } from 'config/constants/demo';

const data = {
    lang: LANGUAGE,
    currency: CURRENCY
};

const MoreInfo = ({
    connect,
    close,
    infoHandle,
    wallet,
    infoData,
    infoCallback,
    langIcon,
    langCallback,
    currency,
    currencyCallback
}: any) => {
    const [showList, setShowList] = useState('');

    const prevent = (e: any) => {
        e.preventDefault();
    };

    const setData = (i: number) => {
        if (showList === 'lang') {
            langCallback(i);
        } else {
            currencyCallback(i);
        }
        setShowList('');
    };

    return (
        <>
            <div
                className="flex flex-col w-full fixed bottom-0 left-0 z-10 px-5 pt-10 bg-[#151518] rounded-t-3xl"
                onClick={prevent}
            >
                <div className="flex items-center justify-between">
                    {connect === -1 ? (
                        <div className="text-base">No wallet connected</div>
                    ) : (
                        <div className="flex items-center" onClick={infoHandle}>
                            <img src={wallet[connect].icon} alt="currency" className="mr-2" />
                            GALH....Z7I7
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        {connect !== -1
                            ? infoData.map((one: any, i: number) => (
                                  <div
                                      onClick={() => infoCallback(i)}
                                      className="flex items-center justify-center h-[42px] w-[42px] bg-[#423F51] rounded-full mr-7"
                                  >
                                      <img src={one.mIcon} alt="lang" className="h-[24px] w-[24px]" />
                                  </div>
                              ))
                            : null}
                        <div
                            className="flex items-center justify-center h-[42px] w-[42px] bg-[#423F51] rounded-full"
                            onClick={() => setShowList('lang')}
                        >
                            <img src={langIcon} alt="lang" className="h-[30px] w-[30px]" />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setShowList('currency')}
                    className="border-[0.5px] border-[#ACACAE] rounded-lg py-4 flex items-center justify-center mt-[50px] mb-[90px]"
                >
                    <img src={currency.icon} alt="currency" className="h-[30px] w-[30px]" />
                    <p className="mx-5">{currency.name}</p>
                    <KeyboardArrowDownIcon sx={{ color: '#FFF' }} />
                </div>
            </div>
            <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000066]" onClick={close} />
            {showList && (
                <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#1E1E1E] px-5 py-10 z-20">
                    <div className="flex w-full items-center justify-center relative mb-10">
                        <div
                            onClick={() => setShowList('')}
                            className="absolute left-0 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                        >
                            <BackIcon className="h-7 w-7" />
                        </div>
                        <h2 className="text-center text-base font-bold font-Unbounded ">Select Currency</h2>
                    </div>
                    {data[showList].map(({ name, icon }: { name: string; icon: string }, i: number) => (
                        <Stack key={i}>
                            {Boolean(i) && <Divider sx={{ borderColor: '#36363A', my: '0px !important' }} />}
                            <MenuItem onClick={() => setData(i)} sx={{ py: 1.5, px: 2.5 }}>
                                <ListItemIcon sx={{ mr: 1, '& img': { width: 30, height: 30 } }}>
                                    <Box component="img" src={icon} alt="currency" />
                                </ListItemIcon>
                                <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 16 } }}>
                                    {name}
                                </ListItemText>
                            </MenuItem>
                        </Stack>
                    ))}
                </div>
            )}
        </>
    );
};

export default MoreInfo;
