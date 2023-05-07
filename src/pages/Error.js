import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Icons
import { ReactComponent as ErrorIcon } from '../assets/img/icon/error.svg';

const Home = ({ isSend }) => {
    const navigate = useNavigate();
    return (
        <Card className='card' sx={{ px: 12.75, pt: 4, pb: 10, width: 700 }}>
            <Stack justifyContent='center' alignItems='center'>
                <Typography variant='h2' sx={{ textAlign: 'center', fontSize: 48, fontWeight: 700, fontFamily: 'CoinbaseSans-Medium', }}>
                    {
                        isSend ? 'Transaction Unsuccessful!' : 'Conversion Unsuccessful!'
                    }
                </Typography>
                <Box sx={{ my: 6.25 }}>
                    <ErrorIcon />
                </Box>
                {
                    isSend ?
                        <>
                            <Typography sx={{ fontSize: 18, fontWeight: 500, textAlign: 'center', fontFamily: 'CoinbaseSans-Medium', }}>Something went wrong</Typography>
                            <Typography sx={{ textAlign: 'center', fontSize: 20, mt: 1.25, mb: '45px' }}>Incase of any disputes, contact our support <br /> team at <Link component="a" href='mailto:support@usewavy.xyz' sx={{ color: '#B8ACFF' }}>support@usewavy.xyz</Link></Typography>
                        </> :
                        <Typography sx={{ mb: '66px !important', fontSize: 18, fontWeight: 500, textAlign: 'center', fontFamily: 'CoinbaseSans-Medium', }}>Something went wrong, please try again</Typography>
                }
                <Button onClick={() => navigate('/')} variant='contained' sx={{ width: '100%', borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                    Go back
                </Button>
            </Stack>
        </Card>
    )
}

export default Home;