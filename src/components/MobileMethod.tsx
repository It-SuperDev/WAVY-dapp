// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { TOP_METHOD, WITHDRAW_METHOD } from 'config/constants/demo';
import useConfig from 'hooks/useConfig';

const MobileMethod = ({ isTop, size, close, callback }: any) => {
    const prevent = (e: any) => {
        e.preventDefault();
    };

    const gData = useConfig();

    const data = isTop ? TOP_METHOD : WITHDRAW_METHOD;
    console.log(gData.NETWORK.sub);
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
                            <CloseIcon className="h-7 w-7" />
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
                            <Stack>
                                <MenuItem
                                    sx={{ py: 2, px: 2.5, bgcolor: '#242429', borderRadius: 2, mb: 1 }}
                                    onClick={() => callback()}
                                >
                                    <ListItemIcon
                                        sx={{ mr: 1, '& img': { width: size ? size : 34, height: size ? size : 34 } }}
                                    >
                                        <Box component="img" src={data[0].icon} alt="currency" />
                                    </ListItemIcon>
                                    <div className="mr-auto">
                                        <p> {data[0].name}</p>
                                        <p className="text-xs text-[#ACACAE]"> {data[0].sub}</p>
                                    </div>
                                    <ChevronRightIcon />
                                </MenuItem>
                            </Stack>
                        ) : (
                            <>
                                {data.map(
                                    ({ name, sub, icon }: { name: string; sub: string; icon: string }, i: number) => (
                                        <Stack key={i}>
                                            <MenuItem
                                                sx={{ py: 2, px: 2.5, bgcolor: '#242429', borderRadius: 2, mb: 1 }}
                                                onClick={() => callback(i)}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        mr: 1,
                                                        '& img': { width: size ? size : 34, height: size ? size : 34 }
                                                    }}
                                                >
                                                    <Box component="img" src={icon} alt="currency" />
                                                </ListItemIcon>
                                                <div className="mr-auto">
                                                    <p> {name}</p>
                                                    <p className="text-xs text-[#ACACAE]"> {sub}</p>
                                                </div>
                                                <ChevronRightIcon />
                                            </MenuItem>
                                        </Stack>
                                    )
                                )}
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
