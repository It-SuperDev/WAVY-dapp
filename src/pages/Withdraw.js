import { useNavigate } from 'react-router-dom';

// MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import MainCard from '../components/MainCard';
import ValueInput from '../components/ValueInput';

// Constatn
import { TOKEN_LIST } from '../config/constants';

const Withdraw = () => {
    const navigate = useNavigate();
    return (
        <MainCard title="Withdraw" back={() => navigate('/')} >
            <Stack spacing={2} sx={{ px: 8 }}>
                <ValueInput title='Amount' error={true} errorMessage='Insufficient balance' available='Available: 3000 USDC' value={3100} tokenList={TOKEN_LIST} />

                <Typography sx={{ color: '#B8ACFF', fontSize: 18, lineHeight: '26px', bgcolor: '#090912', borderRadius: 2.4, py: 1, px: 3 }}>Fee: 0.00</Typography>

                <ValueInput title='Receive' value={3100} tokenList={[TOKEN_LIST[7]]} />

                <Button
                 onClick={() => navigate('/withdraw-method')}
                    sx={{
                        fontSize: 18, fontWeight: 500, bgcolor: '#090912', borderRadius: 2.5, py: 1.25, px: 3, color: '#FFF', justifyContent: 'space-between !important', width: '100%', '&:hover': { bgcolor: '#090912', }
                    }}
                    endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '40px !important' }} />}
                >
                    Choose withdrawal method
                </Button>
                <Button variant='contained' sx={{ borderRadius: 2.5, py: 2, mt: '66px !important', bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                    Continue
                </Button>
            </Stack>
        </MainCard>
    )
}

export default Withdraw;