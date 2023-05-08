import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Icons
import EastIcon from '@mui/icons-material/East';
import sendIcon from '../assets/img/icon/sender.svg';
import receiverIcon from '../assets/img/icon/receiver.svg';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Card className='card' sx={{ px: 5, pt: '33px', pb: '35px', minWidth: 700 }}>
            <Typography sx={{ textAlign: 'center', mb: '45px', fontSize: 30, fontWeight: 700, fontFamily: 'CoinbaseSans-Medium' }}>Confirm Conversion</Typography>
            <Stack px={8} >
                <Stack direction='row' alignItems='center' justifyContent='center' mb='45px'>
                    <Stack direction='row' alignItems='center' justifyContent='center'>
                        <Stack alignItems='center' justifyContent='center'>
                            <Box component='img' src={sendIcon} alt='from' sx={{ width: 80, height: 80 }} />
                            <Typography sx={{ fontSize: 16, lineHeight: '23.2px', mt: '14px', mb: '6px' }}>From</Typography>
                            <Typography sx={{ fontSize: 18, fontWeight: 500, lineHeight: '22.32px', fontFamily: 'CoinbaseDisplay-Medium' }}>10000 ARS</Typography>
                        </Stack>
                    </Stack>

                    <EastIcon sx={{ fontSize: 35, mx: 10 }} />

                    <Stack direction='row' alignItems='center' justifyContent='center'>
                        <Stack alignItems='center' justifyContent='center'>
                            <Box component='img' src={receiverIcon} alt='from' sx={{ width: 80, height: 80 }} />
                            <Typography sx={{ fontSize: 16, lineHeight: '23.2px', mt: '14px', mb: '6px' }}>Receive</Typography>
                            <Typography sx={{ fontSize: 18, fontWeight: 500, lineHeight: '22.32px', fontFamily: 'CoinbaseDisplay-Medium' }}>20.57 EURC</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ border: '0.6px solid #ACACAE', borderRadius: 2.5, py: 2.5, px: 3, width: '100%' }}>
                    <Stack direction='row' alignItems='center' justifyContent='space-between' mb='25px'>
                        <Typography sx={{ fontSize: 16 }} >Conversion Fee</Typography>
                        <Typography sx={{ fontSize: 16 }} >No fees</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography sx={{ fontSize: 16 }} >Rate</Typography>
                        <Typography sx={{ fontSize: 16 }} >1 EURC = 486.04 ARS</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: '66px !important', mb: 8, }}>
                    <Button onClick={() => navigate(-1)} variant='outlined' sx={{ borderRadius: 2.5, py: 2, color: '#FFF', minWidth: 200, borderColor: "#FFF" }}>
                        Back
                    </Button>
                    <Button variant='contained' sx={{ minWidth: 200, borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                        Continue
                    </Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default Home;