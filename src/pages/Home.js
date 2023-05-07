import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

// Icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { ReactComponent as SendIcon } from '../assets/img/icon/send.svg';
import { ReactComponent as SwapIcon } from '../assets/img/icon/swap.svg';
import { ReactComponent as BridgeIcon } from '../assets/img/icon/bridge.svg';
import { ReactComponent as SpendIcon } from '../assets/img/icon/spend.svg';
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import { ReactComponent as WalletIcon } from '../assets/img/icon/wallet.svg';
import { ReactComponent as RightIcon } from '../assets/img/icon/right.svg';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Card className='card' sx={{ px: 12.75, py: 4, minWidth: 700 }}>
            <Stack>
                <Box className='gradient' sx={{ px: 3, py: 4.5, border: '0.6px solid #ACACAE', borderRadius: 2.5 }}>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ fontSize: 15, fontFamily: 'CoinbaseDisplay-Medium' }}>Total Balance</Typography>
                        <VisibilityOutlinedIcon sx={{ fontSize: 20, ml: 1.25 }} />
                    </Stack>
                    <Typography className='gradient-font' variant='h3'
                        sx={{
                            my: 1.25,
                            fontSize: 48,
                            fontWeight: 500,
                            lineHeight: 1.25,
                            fontFamily: 'CoinbaseSans-Medium',
                            background: "-webkit-linear-gradient(95.4deg, #5A50CF 15.58%, #453CC4 48.25%, #C79BEA 100%)",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent",
                        }}>
                        $0.00
                    </Typography>
                </Box>
                <Stack direction='row' justifyContent='space-between' width='100%' mt={5.7}>
                    <Stack alignItems='center'>
                        <IconButton onClick={() => navigate('send')} variant='contained' sx={{ bgcolor: '#423F51', width: 72, height: 72, boxShadow: '0px 4px 4px 0px #00000080' }}>
                            <SendIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: 18, lineHeight: '26px', mt: 2 }}>Send</Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <IconButton onClick={() => navigate('swap')} variant='contained' sx={{ bgcolor: '#423F51', width: 72, height: 72, boxShadow: '0px 4px 4px 0px #00000080' }}>
                            <SwapIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: 18, lineHeight: '26px', mt: 2 }}>Swap</Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <IconButton onClick={() => navigate('bridge')} variant='contained' sx={{ bgcolor: '#423F51', width: 72, height: 72, boxShadow: '0px 4px 4px 0px #00000080' }}>
                            <BridgeIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: 18, lineHeight: '26px', mt: 2 }}>Bridge</Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <IconButton onClick={() => navigate('spend')} variant='contained' sx={{ bgcolor: '#423F51', width: 72, height: 72, boxShadow: '0px 4px 4px 0px #00000080' }}>
                            <SpendIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: 18, lineHeight: '26px', mt: 2 }}>Spend</Typography>
                    </Stack>
                </Stack>
                <Box sx={{ mt: 6, mb: 3.75 }}>
                    <List>
                        <ListItemButton sx={{ borderRadius: 2.5, bgcolor: '#090912', px: 3 }}>
                            <ListItemIcon>
                                <BankIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Top Up"
                                secondary="On-ramp fiat-to-stablecoin"
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontSize: 18,
                                        fontWeight: 500,
                                        lineHeight: '26.1px',
                                    },
                                    '& .MuiListItemText-secondary': {
                                        mt: '1px',
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: '#ACACAE',
                                        lineHeight: '20.3px',
                                    }
                                }}
                            />
                            < RightIcon />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('withdraw')} sx={{ borderRadius: 2.5, bgcolor: '#090912', px: 3, mt: 2.5 }}>
                            <ListItemIcon>
                                <WalletIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Withdraw"
                                secondary="Withdraw your stablecoins to Fiat"
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontSize: 18,
                                        fontWeight: 500,
                                        lineHeight: '26.1px',
                                    },
                                    '& .MuiListItemText-secondary': {
                                        mt: '1px',
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: '#ACACAE',
                                        lineHeight: '20.3px',
                                    }
                                }}
                            />
                            < RightIcon />
                        </ListItemButton>
                    </List>
                </Box>
            </Stack>
        </Card>
    )
}

export default Home;