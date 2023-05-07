import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Icons
import logo from '../assets/img/logo.svg';

// Component
import MenuList from '../components/MenuList';

// Constants
import { CURRENCY, LANGUAGE, WALLET, NETWORK } from '../config/constants';

const Header = () => {
    const [currencyAnchor, setCurrencyAnchor] = useState(null);
    const [langAnchor, setLangAnchor] = useState(null);
    const [walletAnchor, setWalletAnchor] = useState(null);
    const [netAnchor, setNetAnchor] = useState(null);
    const [currentCurrency, setCurrentCurrency] = useState(0);
    const [currentLang, setCurrentLang] = useState(0);
    const [currentNet, setCurrentNet] = useState(0);

    const currencyHandle = (event) => {
        setCurrencyAnchor(event.currentTarget);
    };
    const currencyClose = () => {
        setCurrencyAnchor(null);
    };
    const setCurrency = (i) => {
        setCurrentCurrency(i);
        currencyClose();
    }

    const langHandle = (event) => {
        setLangAnchor(event.currentTarget);
    };
    const langClose = () => {
        setLangAnchor(null);
    };
    const setLang = (i) => {
        setCurrentLang(i);
        langClose();
    }

    const walletHandle = (event) => {
        setWalletAnchor(event.currentTarget);
    };
    const walletClose = () => {
        setWalletAnchor(null);
    };
    const setWallet = (i) => {
        walletClose();
    }

    const netHandle = (event) => {
        setNetAnchor(event.currentTarget);
    };
    const netClose = () => {
        setNetAnchor(null);
    };
    const setNet = (i) => {
        setCurrentNet(i);
        netClose();
    }

    return (
        <>
            <Stack direction='row' alignItems='center' justifyContent='space-between' component='header'>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <Link component={RouterLink} to='/' >
                        <Box component='img' src={logo} alt='logo' sx={{ height: 39, mr: 5 }} />
                    </Link>
                    <Button
                        onClick={currencyHandle}
                        variant='contained'
                        sx={{ py: '13px', pr: 7, pl: 2.5, '& .MuiButton-startIcon': { mr: 2.5, ml: 0 } }}
                        startIcon={<Box component='img' src={CURRENCY[currentCurrency].icon} alt='currency' sx={{ width: 35, height: 35 }} />}
                    >
                        {CURRENCY[currentCurrency].name}
                    </Button>
                    <Button
                        onClick={langHandle}
                        variant='contained'
                        sx={{ py: '13px', px: 2.5, ml: 5 }}
                    >
                        <Box component='img' src={LANGUAGE[currentLang].icon} alt='language' sx={{ width: 35, height: 35 }} />
                    </Button>
                </Stack>
                <Button variant='contained' sx={{ py: '13px', px: 2.5, bgcolor: (theme) => theme.palette.primary.light }}>
                    Connect your wallet
                </Button>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <Button
                        onClick={netHandle}
                        variant='contained'
                        sx={{ py: '13px', px: 2.5, mr: 5 }}
                    >
                        <Box component='img' src={NETWORK[currentNet].icon} alt='language' sx={{ width: 35, height: 35 }} />
                    </Button>
                    <Button
                        onClick={walletHandle}
                        variant='contained'
                        sx={{ py: '13px', px: 2.5, }}>
                        Connect wallet
                    </Button>
                </Stack>
            </Stack >
            <MenuList data={CURRENCY} minWidth={320} anchor={currencyAnchor} close={currencyClose} callback={setCurrency} />
            <MenuList data={LANGUAGE} minWidth={320} anchor={langAnchor} close={langClose} callback={setLang} />
            <MenuList data={NETWORK} minWidth={280} anchor={netAnchor} close={netClose} callback={setNet} />
            <MenuList data={WALLET} minWidth={280} anchor={walletAnchor} close={walletClose} callback={setWallet} />
        </>
    );
}

export default Header;