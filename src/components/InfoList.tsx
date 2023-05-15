// MUI
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CONNECTED } from 'config/constants/demo';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MenuList = ({ size, anchor, close, callback }: any) => {
    return (
        <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={close}
            sx={{
                '& .MuiMenu-paper': {
                    bgcolor: '#2E2D4E',
                    borderRadius: 2.5,
                    overflow: 'hidden',
                    mt: 0.5
                }
            }}
        >
            <Stack>
                <CopyToClipboard text={'0xCC70F722FA203D78580314817B7875cd90FED2d5'} onCopy={() => callback(0)}>
                    <MenuItem sx={{ py: 1, px: 2.5 }}>
                        <ListItemIcon sx={{ mr: 1, '& img': { width: size ? size : 24, height: size ? size : 24 } }}>
                            <Box component="img" src={CONNECTED[0].icon} alt="currency" />
                        </ListItemIcon>
                        <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}>
                            {CONNECTED[0].name}
                        </ListItemText>
                    </MenuItem>
                </CopyToClipboard>
                <Divider sx={{ borderColor: '#ACACAE', my: '0px !important' }} />
                <MenuItem sx={{ py: 1, px: 2.5 }} onClick={() => callback(1)}>
                    <ListItemIcon sx={{ mr: 1, '& img': { width: size ? size : 24, height: size ? size : 24 } }}>
                        <Box component="img" src={CONNECTED[1].icon} alt="currency" />
                    </ListItemIcon>
                    <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}>
                        {CONNECTED[1].name}
                    </ListItemText>
                </MenuItem>
            </Stack>
        </Menu>
    );
};

export default MenuList;
