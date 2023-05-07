// MUI
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// Icon
import { ReactComponent as BackIcon } from '../assets/img/icon/arrow_back.svg';

const MainCard = ({ children, title, back }) => {
    return (
        <Card className='card' sx={{ px: 5, pt: '33px', pb: '35px', minWidth: 700 }}>
            <Stack justifyContent='center' sx={{ position: 'relative', mb: '45px' }}>
                <IconButton onClick={back} sx={{ position: 'absolute', left: -8 }}>
                    <BackIcon />
                </IconButton>
                <Typography sx={{ textAlign: 'center', fontSize: 30, fontWeight: 700, fontFamily: 'CoinbaseSans-Medium' }}>{title}</Typography>
            </Stack>
            {
                children
            }
        </Card>
    )
}

export default MainCard;