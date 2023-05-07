import { Link as RouterLink } from 'react-router-dom';

// MUI
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// image
import starbg from '../assets/img/background/stars.png';

const Page404 = () => {
    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${starbg})`,
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Typography sx={{ textAlign: 'center', fontSize: 80, fontWeight: 700, lineHeight: '99.2px', fontFamily: 'CoinbaseSans-Medium' }}>
                404 - Page not found
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: 30, fontWeight: 400, my: 6, color: '#ACACAE' }}>This page is missing or you entered the link incorrectly</Typography>
            <Typography sx={{ textAlign: 'center', fontSize: 20, }}>Incase of any disputes, contact our support <br /> team at <Link component="a" href='mailto:support@usewavy.xyz' sx={{ color: '#B8ACFF' }}>support@usewavy.xyz</Link></Typography>
        </Stack >
    )
}

export default Page404;

