import { useNavigate, Link as RouerLink } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Icons
import { ReactComponent as SuccessIcon } from '../assets/img/icon/success.svg';

const Home = ({ isSend }) => {
    const navigate = useNavigate();
    return (
        <Card className='card' sx={{ px: 12.75, pt: 4, pb: 7, width: 700 }}>
            <Stack justifyContent='center' alignItems='center'>
                <Typography variant='h2' sx={{ textAlign: 'center', fontSize: 48, fontWeight: 700, fontFamily: 'CoinbaseSans-Medium', }}>
                    Transaction
                    Successful!
                </Typography>
                <Box sx={{ my: 6.25 }}>
                    <SuccessIcon />
                </Box>
                <Typography sx={{ mb: '45px !important', fontSize: 18, fontWeight: 500, textAlign: 'center', fontFamily: 'CoinbaseSans-Medium', maxWidth: 455 }}>The stables have been settled to both wallet addresses</Typography>

                <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%' mb='45px'>
                    <Button component={RouerLink} to='/' variant='contained' sx={{ fontSize: 14, fontWeight: 500, borderRadius: 2.5, py: 2, color: '#151518', bgcolor: '#FFFFFF', minWidth: 200, '&:hover': { bgcolor: '#FFFFFF', } }}>
                        View on Network Explorer
                    </Button>
                    <Button onClick={() => navigate('/')} variant='contained' sx={{ fontSize: 14, fontWeight: 500, minWidth: 200, borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                        Done
                    </Button>
                </Stack>
                <Typography sx={{ textAlign: 'center', fontSize: 20, }}>Incase of any disputes, contact our support <br /> team at <Link component="a" href='mailto:support@usewavy.xyz' sx={{ color: '#B8ACFF' }}>support@usewavy.xyz</Link></Typography>
            </Stack>
        </Card>
    )
}

export default Home;