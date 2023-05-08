import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SwapLoading = () => {
    const { nextRouer } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate(`/${nextRouer}`), 3000);
    }, [navigate, nextRouer]);

    return (
        <Card className='card' sx={{ px: 5, pt: '33px', pb: '35px', minWidth: 700, minHeight: 650 }}>
            <Stack alignItems='center' justifyContent='center' sx={{ height: 650 }}>
                <Box className='loader' />
                <Typography sx={{ fontSize: 24, fontWeight: 500, lineHeight: '30px', textAlign: 'center', mt: '55px' }}>One moment, the transaction <br /> is being processed</Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 18, lineHeight: '26px', color: "#F9FAFA", mt: '25px', maxWidth: 386 }}>Stables are being swapped and should be deposited in your wallet any moment now</Typography>
            </Stack>
        </Card>
    )
}

export default SwapLoading;