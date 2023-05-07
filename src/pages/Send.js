import { useNavigate } from 'react-router-dom';

// MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// component
import MainCard from '../components/MainCard';
import ValueInput from '../components/ValueInput';

// Constatn
import { TOKEN_LIST } from '../config/constants';

const Withdraw = () => {
    const navigate = useNavigate();
    return (
        <MainCard title="Send" back={() => navigate('/')} >
            <Stack spacing={2}>
                <ValueInput title='Amount' error={true} errorMessage='Insufficient balance' available='Available: 30 JEUR' value={50} tokenList={TOKEN_LIST} />

                <Typography sx={{ color: '#B8ACFF', fontSize: 18, lineHeight: '26px', bgcolor: '#090912', borderRadius: 2.4, py: 1, px: 3 }}>1 JEUR = 5.48 BRZ</Typography>

                <ValueInput title='Receive' value={274} tokenList={[TOKEN_LIST[7]]} />

                <Stack spacing={2.5} sx={{ bgcolor: '#090912', borderRadius: 2.5, py: 2.5, px: 3 }}>
                    <Stack alignItems='center' direction='space-between' sx={{ width: '100%' }} >
                        <Typography sx={{ color: '#ACACAE', fontSize: 14, fontWeight: 500 }}>Available</Typography>
                        <Typography sx={{ color: '#F9FAFA', fontSize: 14, fontWeight: 500 }}>3000 JEUR</Typography>
                    </Stack>
                    <Stack alignItems='center' direction='space-between' sx={{ width: '100%' }} >
                        <Typography sx={{ color: '#ACACAE', fontSize: 14, fontWeight: 500 }}>Limit</Typography>
                        <Typography sx={{ color: '#F9FAFA', fontSize: 14, fontWeight: 500 }}>1 - 500 JEUR</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: '66px !important', }}>
                    <Button variant='outlined' sx={{ borderRadius: 2.5, py: 2, color: '#FFF', minWidth: 200, borderColor: "#FFF" }}>
                        Cancel
                    </Button>
                    <Button variant='contained' sx={{ minWidth: 200, borderRadius: 2.5, py: 2, bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                        Continue
                    </Button>
                </Stack>

            </Stack>
        </MainCard >
    )
}

export default Withdraw;