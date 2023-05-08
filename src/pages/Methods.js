import { useNavigate } from 'react-router-dom';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

// component
import MainCard from '../components/MainCard';

// Constatn
import { TOP_METHOD, WITHDRAW_METHOD } from '../config/constants';

const Method = ({ title, description, isWithdraw }) => {
    const navigate = useNavigate();
    return (
        <MainCard title={title} back={() => navigate(-1)} >
            <Stack spacing={3}>
                <Typography sx={{ fontSize: 16, textAlign: 'center' }}>{description}</Typography>
                {
                    (isWithdraw ? WITHDRAW_METHOD : TOP_METHOD).map(({ name, sub, icon }, i) => (
                        <ButtonBase key={i}>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                sx={{ width: '100%', py: 2.5, px: 3, bgcolor: '#262447', borderRadius: 2.5 }}
                            >
                                <Stack direction='row' alignItems='center'>
                                    <Box component='img' src={icon} alt='coin' sx={{ width: 30, height: 30, mr: '30px' }} />
                                    <Box>
                                        <Typography sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500, fontFamily: 'CoinbaseSans-Medium', lineHeight: '19.84px' }}>{name}</Typography>
                                        <Typography sx={{ textAlign: 'left', fontSize: 12, lineHeight: '19.84px' }}>{sub}</Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </ButtonBase>
                    ))
                }
            </Stack>
        </MainCard >
    )
}

export default Method;