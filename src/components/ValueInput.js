import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';

// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import MenuList from './MenuList';

const NumberInput = styled(InputBase)(({ theme }) => ({
    '& input': {
        padding: 0,
        border: "unset",
        fontSize: "32px",
        lineHeight: 1,
        color: "#FFFFFF",
        backgroundColor: "transparent",
    }
}));

const ValueInput = ({ title, value, available, error, errorMessage, tokenList }) => {
    const navigate = useNavigate();

    const [tokenAnchor, setTokenAnchor] = useState(null);
    const [currentToken, setCurrentToken] = useState(0);

    const handleClick = (event) => {
        if (tokenList.length > 1) {
            // setTokenAnchor(event.currentTarget);
            navigate('/select-stable')
        }
    };
    const handleClose = () => {
        setTokenAnchor(null);
    };
    const setToken = (i) => {
        setCurrentToken(i);
        handleClose();
    }

    return (
        <>
            <Stack
                sx={{
                    pb: 1.25,
                    pt: '15px',
                    px: '25px',
                    width: '100%',
                    borderRadius: 2.5,
                    borderWidth: 0.6,
                    borderStyle: 'solid',
                    borderColor: error ? (theme) => theme.palette.error.main : '#ACACAE',
                }}
            >
                <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
                    <Typography sx={{ fontSize: 16, lineHeight: '23.2px' }}>{title ? title : ''}</Typography>
                    <Typography sx={{ fontSize: 16, lineHeight: '23.2px' }}>{available ? `Available: ${available}` : ''}</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%' mt={error ? 0 : '18px'}>
                    <Stack>
                        <NumberInput type='number' defaultValue={value} />
                        {
                            errorMessage && error &&
                            <Typography sx={{ fontSize: 12, color: (theme) => theme.palette.error.main }}>{errorMessage}</Typography>
                        }
                    </Stack>
                    <Button
                        onClick={handleClick}
                        sx={{ color: '#FFF', '& .MuiButton-startIcon': { mr: 1.25 }, '& .MuiButton-endIcon': { ml: 2 } }}
                        startIcon={<Box component='img' src={tokenList[currentToken].icon} sx={{ width: 33, height: 33 }} />}
                        endIcon={tokenList.length > 1 ? <KeyboardArrowDownIcon /> : null}
                    >
                        {tokenList[currentToken].name}
                    </Button>
                </Stack>
            </Stack >
            <MenuList {...{ data: tokenList, anchor: tokenAnchor, close: handleClose, callback: setToken, minWidth: 150, py: 1 }} />
        </>
    )
}

export default ValueInput