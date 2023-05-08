import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// component
import MainCard from '../components/MainCard';

// Icon
import kes from '../assets/img/coin/kes.svg';
import audd from '../assets/img/coin/audd.svg';
import exchange from '../assets/img/icon/exchange.svg';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Withdraw = () => {
    const navigate = useNavigate();
    return (
        <MainCard title="Send" back={() => navigate('/')} >
            <Stack sx={{ px: 5.63 }}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Stack direction='row' alignItems='center' >
                        <Typography sx={{ fontSize: 24, mr: 2 }}>Send</Typography>
                        <Button
                            onClick={() => navigate('/select-stable')}
                            variant='outlined'
                            sx={{
                                justifyContent: 'flex-start',
                                border: '0.6px solid #ACACAE',
                                padding: '9px 17px',
                                borderRadius: 2.5,
                                color: '#FFF',
                                '& .MuiButton-startIcon': {
                                    ml: 0, mr: 1.25,
                                },
                                '& .MuiButton-endIcon': {
                                    ml: 6, mr: 0,
                                    '& svg': { fontSize: 30 }
                                },
                                '&:hover': {
                                    border: '0.6px solid #ACACAE',
                                }
                            }}
                            startIcon={<Box component='img' src={kes} alt='coin' sx={{ width: 35, height: 35 }} />}
                            endIcon={<KeyboardArrowDownIcon />}
                        >KES</Button>
                    </Stack>
                    <Box component='img' src={exchange} alt='exchange' sx={{ width: 35, height: 35, mx: 8.25 }} />
                    <Stack direction='row' alignItems='center' >
                        <Typography sx={{ fontSize: 24, mr: 2 }}>Receive</Typography>
                        <Button
                            onClick={() => navigate('/select-stable')}
                            variant='outlined'
                            sx={{
                                justifyContent: 'flex-start',
                                border: '0.6px solid #ACACAE',
                                padding: '9px 17px',
                                borderRadius: 2.5,
                                color: '#FFF',
                                '& .MuiButton-startIcon': {
                                    ml: 0, mr: 1.25,
                                },
                                '& .MuiButton-endIcon': {
                                    ml: 6, mr: 0,
                                    '& svg': { fontSize: 30 }
                                },
                                '&:hover': {
                                    border: '0.6px solid #ACACAE',
                                }
                            }}
                            startIcon={<Box component='img' src={audd} alt='coin' sx={{ width: 35, height: 35 }} />}
                            endIcon={<KeyboardArrowDownIcon />}
                        >AUDD</Button>
                    </Stack>
                </Stack>
                <Stack spacing={2.5} mt={3.5}>
                    {
                        new Array(3).fill(0).map((_, i) => (
                            <Box key={i} sx={{ display: 'grid', gridTemplateColumns: '33% auto 33%', borderRadius: 2.5, border: '0.4px solid #ACACAE', py: 2, px: 3 }}>
                                <Stack>
                                    <Typography sx={{ fontSize: 14, mb: '2px' }}>You send</Typography>
                                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                            <Box component='img' src={kes} alt='coin' sx={{ width: 35, height: 35, mr: 1.25 }} />
                                            <Typography sx={{ fontSize: 24 }}>KES</Typography>
                                        </Box>
                                        <EastIcon />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ lineHeight: '20px', color: '#ACACAE' }}>Exchange rate</Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: 500, lineHeight: '26px' }}>1 AUDD = 90.67 KES</Typography>
                                    </Box>
                                </Stack>
                                <Box sx={{ m: 'auto' }}>
                                    <Stack>
                                        <Typography sx={{ fontSize: 14, mb: '2px' }}>You receive</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Box component='img' src={audd} alt='coin' sx={{ width: 35, height: 35, mr: 1.25 }} />
                                            <Typography sx={{ fontSize: 24 }}>AUDD</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ lineHeight: '20px', color: '#ACACAE' }}>Available</Typography>
                                            <Typography sx={{ fontSize: 18, fontWeight: 500, lineHeight: '26px' }}>3000 AUDD</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Stack>
                                    <Typography sx={{ height: 14, mb: '2px' }}></Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <Button onClick={() => navigate('/send')} variant='contained' endIcon={<EastIcon />} >Accept offer</Button>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ lineHeight: '20px', color: '#ACACAE' }}>Limit</Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: 500, lineHeight: '26px' }}>1 - 500 AUDD</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        ))
                    }
                </Stack>
                <Stack direction='row' justifyContent='space-around' alignItems='center' sx={{ mt: '66px !important', }}>
                    <Button variant='outlined' sx={{ borderRadius: 2.5, py: 2, color: '#FFF', minWidth: 200, borderColor: "#FFF" }}>
                        My offers
                    </Button>
                    <Button  variant='contained' sx={{ minWidth: 200, borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                        Create a new offer
                    </Button>
                </Stack>
            </Stack>
        </MainCard >
    )
}

export default Withdraw;