import { Stack, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Stack sx={{ py: 5 }}>
            <Typography sx={{ mb: 1 }}>
                Contact Us
            </Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Stack direction='row' alignItems='center'>
                    <Typography sx={{ mr: 2 }}>Mail:</Typography>
                    <Typography>it.dev0116@gmail.com</Typography>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <Typography sx={{ mr: 2 }}>Skype:</Typography>
                    <Typography>live:.cid.8f5e31c5032d28aa</Typography>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <Typography sx={{ mr: 2 }}>Telegram:</Typography>
                    <Typography>https://t.me/GeniusDev999</Typography>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <Typography sx={{ mr: 2 }}>Phone:</Typography>
                    <Typography> +7 702 628 3916</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer;