// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuListProps } from 'types/utils';
import CloseIcon from '@mui/icons-material/Close';

const MobileList = ({ title, sub, data, py, size, close, callback }: MenuListProps | any) => {
    const prevent = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <div
                className="flex flex-col w-full fixed bottom-0 left-0 z-10 px-5 pt-10 bg-[#151518] rounded-t-3xl"
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
                        {title && <h2 className="text-center text-xl font-bold font-Unbounded ">{title}</h2>}
                        {sub && <p className="text-center text-sm text-[#ACACAE]">{sub}</p>}
                    </div>
                </div>
                <div className="py-[30px]">
                    <div className="rounded-lg overflow-hidden py-2 bg-[#242429]">
                        {data.map(({ name, icon }: { name: string; icon: string }, i: number) => (
                            <Stack key={i}>
                                {Boolean(i) && <Divider sx={{ borderColor: '#36363A', my: '0px !important' }} />}
                                <MenuItem
                                    sx={{ py: py ? py : 2, px: 2.5, bgcolor: '#242429' }}
                                    onClick={() => callback(i)}
                                >
                                    <ListItemIcon
                                        sx={{ mr: 1, '& img': { width: size ? size : 34, height: size ? size : 34 } }}
                                    >
                                        <Box component="img" src={icon} alt="currency" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 18 } }}>
                                        {name}
                                    </ListItemText>
                                </MenuItem>
                            </Stack>
                        ))}
                    </div>
                </div>
            </div>
            <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000066]" onClick={close} />
        </>
    );
};

export default MobileList;
