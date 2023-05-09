// MUI
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuListProps } from 'types/utils';

const MenuList = ({ data, minWidth, py, size, anchor, close, callback }: MenuListProps) => {
    return (
        <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={close}
            sx={{
                '& .MuiMenu-paper': {
                    minWidth: minWidth ? minWidth : 0,
                    bgcolor: '#2E2D4E',
                    borderRadius: 2.5,
                    overflow: 'hidden',
                    mt: 0.5
                }
            }}
        >
            {data.map(({ name, icon }: { name: string; icon: string }, i: number) => (
                <Stack key={i}>
                    {Boolean(i) && <Divider sx={{ borderColor: '#ACACAE', my: '0px !important' }} />}
                    <MenuItem sx={{ py: py ? py : 1, px: 2.5 }} onClick={() => callback(i)}>
                        <ListItemIcon sx={{ mr: 1, '& img': { width: size ? size : 24, height: size ? size : 24 } }}>
                            <Box component="img" src={icon} alt="currency" />
                        </ListItemIcon>
                        <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}>{name}</ListItemText>
                    </MenuItem>
                </Stack>
            ))}
        </Menu>
    );
};

export default MenuList;
