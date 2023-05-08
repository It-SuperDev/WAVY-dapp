import { useNavigate } from 'react-router-dom';

// MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// icons
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import MainCard from '../components/MainCard';
import ValueInput from '../components/ValueInput';

// Constatn
import { TOKEN_LIST } from '../config/constants';
import useConfig from '../hooks/useConfig';

const Withdraw = () => {
    const navigate = useNavigate();
    const global = useConfig();
    console.log(global)
    return (
        <MainCard title="Top Up" back={() => navigate('/')} >
            <Stack spacing={2} sx={{ px: 8 }}>
                <ValueInput title='Amount' value={0.00} tokenList={[TOKEN_LIST[7]]} />

                <Typography sx={{ color: '#B8ACFF', fontSize: 18, lineHeight: '26px', bgcolor: '#090912', borderRadius: 2.4, py: 1, px: 3 }}>Fee: 0.00</Typography>

                <ValueInput title='Receive' available='Available: 3000 USDC' value={0.00} tokenList={[TOKEN_LIST[7]]} />
                {
                    global.network && global.network.name === 'Stellar Mainnet' ?
                        <Button
                            onClick={() => navigate('/top-method')}
                            sx={{
                                fontSize: 18, fontWeight: 500, bgcolor: '#090912', borderRadius: 2.5, py: 1.25, px: 3, color: '#FFF', justifyContent: 'space-between !important', width: '100%', '&:hover': { bgcolor: '#090912', }
                            }}
                            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '40px !important' }} />}
                        >
                            Choose withdrawal method
                        </Button>
                        :
                        <Button
                            sx={{
                                px: 3,
                                py: '18px',
                                color: '#FFF',
                                width: '100%',
                                fontSize: 18,
                                fontWeight: 500,
                                bgcolor: '#090912',
                                borderRadius: 2.5,
                                justifyContent: 'flex-start !important',
                                '&:hover': { bgcolor: '#090912' },
                                '& .MuiButton-startIcon': { mr: '20px' },
                                '& svg': { width: 27, height: 24 }
                            }}
                            onClick={() => navigate('/select-stable')}
                            startIcon={<BankIcon />}
                        >
                            Bank Transfer
                        </Button>
                }

                <Button variant='contained' sx={{ borderRadius: 2.5, py: 2, mt: '66px !important', bgcolor: (theme) => theme.palette.primary.light, '&:hover': { bgcolor: (theme) => theme.palette.primary.light } }}>
                    Continue
                </Button>
            </Stack>
        </MainCard>
    )
}

export default Withdraw;