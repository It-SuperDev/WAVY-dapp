import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Icons
import { ReactComponent as SuccessIcon } from '../assets/img/icon/success.svg';

const Home = ({ isSend }) => {
    const navigate = useNavigate();
    return (
        <Card className='card' sx={{ px: 12.75, pt: 4, pb: 10, width: 700 }}>
            <Stack justifyContent='center' alignItems='center'>
                <Typography variant='h2' sx={{ textAlign: 'center', fontSize: 48, fontWeight: 700, fontFamily: 'CoinbaseSans-Medium', }}>
                    Conversion Successful!
                </Typography>
                <Box sx={{ my: 6.25 }}>
                    <SuccessIcon />
                </Box>
                <Typography sx={{ mb: '66px !important', fontSize: 18, fontWeight: 500, textAlign: 'center', fontFamily: 'CoinbaseSans-Medium', }}>10000 ARS has been converted to EURC</Typography>
                <Button onClick={() => navigate('/')} variant='contained' sx={{ width: '100%', borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                    Done
                </Button>
            </Stack>
        </Card>
    )
}

export default Home;