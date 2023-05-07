// MUI
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const MenuList = ({ data, minWidth, py, size, anchor, close, callback }) => {
    return (
        <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={close}
            sx={{
                '& .MuiMenu-paper': {
                    minWidth,
                    bgcolor: '#2E2D4E',
                    borderRadius: 2.5,
                    overflow: 'hidden',
                }
            }}
        >
            {
                data.map(({ name, icon }, i) => (
                    <Stack key={i}>
                        {Boolean(i) && <Divider sx={{ borderColor: '#ACACAE', my: '0px !important' }} />}
                        <MenuItem sx={{ py: py ? py : 2.5, pl: '30px' }} onClick={() => callback(i)}>
                            <ListItemIcon sx={{ mr: 1, '& img': { width: size ? size : 24, height: size ? size : 24 } }}>
                                <Box component='img' src={icon} alt='currency' />
                            </ListItemIcon>
                            <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}>{name}</ListItemText>
                        </MenuItem>
                    </Stack>
                ))
            }
        </Menu>
    )
}

export default MenuList;