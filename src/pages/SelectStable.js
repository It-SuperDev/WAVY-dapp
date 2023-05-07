import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

// icons
import SearchIcon from '@mui/icons-material/Search';

// component
import MainCard from '../components/MainCard';
import { Typography } from '@mui/material';

// Constatn
import { TOKEN_LIST } from '../config/constants';

const Withdraw = () => {
    const navigate = useNavigate();
    return (
        <MainCard title="Select Stable" back={() => navigate(-1)} >
            <Stack >
                <OutlinedInput
                    sx={{
                        pl: 3.5,
                        borderRadius: '15px',
                        borderWidth: 0.6,
                        borderStyle: 'solid',
                        borderColor: '#ACACAE',
                        '&:hover': {
                            borderColor: '#ACACAE !important',
                        },
                        '& input': {
                            py: '12.5px',
                            fontSize: 16,
                        },
                        '& fieldset': { display: 'none' }
                    }}
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                />
                <Stack
                    sx={{
                        borderRadius: 2.5,
                        bgcolor: '#090912',
                        mt: '25px',
                        py: '5px',
                        px: '50px',
                        maxHeight: '532px',
                        overflowY: 'auto',
                        overflowX: 'hidden'
                    }}
                >
                    {
                        TOKEN_LIST.map(({ name, sub, icon, amount, price }, i) => (
                            <ButtonBase key={i}>
                                <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ width: '100%', py: 2.5, borderBottom: '0.5px', borderStyle: 'none none solid none', borderColor: '#36363A' }}>
                                    <Stack direction='row' alignItems='center'>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#FFF', p: '6px', borderRadius: 50, width: 34, height: 34, mr: 2 }}>
                                            <Box component='img' src={icon} alt='coin' sx={{ width: 25, height: 25 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500, fontFamily: 'CoinbaseSans-Medium', lineHeight: '19.84px' }}>{name}</Typography>
                                            <Typography sx={{ textAlign: 'left', fontSize: 12, lineHeight: '19.84px' }}>{sub}</Typography>
                                        </Box>
                                    </Stack>
                                    <Box>
                                        <Typography sx={{ textAlign: 'right', fontSize: 16, fontWeight: 500, fontFamily: 'CoinbaseSans-Medium', lineHeight: '19.84px' }}>{amount}</Typography>
                                        <Typography sx={{ textAlign: 'right', fontSize: 12, lineHeight: '17.4px', mt: '2px', color: '#ACACAE' }}>{price}</Typography>
                                    </Box>
                                </Stack>
                            </ButtonBase>
                        ))
                    }
                </Stack>
            </Stack>
        </MainCard>
    )
}

export default Withdraw;