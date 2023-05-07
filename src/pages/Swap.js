import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// icons
import { ReactComponent as SwapIcon } from '../assets/img/icon/swap-btn.svg';

// component
import MainCard from '../components/MainCard';
import ValueInput from '../components/ValueInput';

// Constatn
import { TOKEN_LIST } from '../config/constants';

const Withdraw = () => {
    const navigate = useNavigate();
    return (
        <MainCard title="Swap" back={() => navigate('/')} >
            <Stack spacing={1.5} alignItems='center' width='100%' px={7.5}>
                <ValueInput title='From' error={true} errorMessage='Insufficient balance' available='Available: 2500.33 TRYB' value={3000} tokenList={TOKEN_LIST} />
                <Box>
                    <IconButton>
                        <SwapIcon />
                    </IconButton>
                </Box>
                <ValueInput title='To' available='Available: 5000 CADC' value={208.91} tokenList={TOKEN_LIST} />

                <Button variant='contained' sx={{ width: '100%', borderRadius: 2.5, py: 2, mt: '66px !important', bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                    Preview Swap
                </Button>
            </Stack>
        </MainCard>
    )
}

export default Withdraw;