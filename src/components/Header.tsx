import React, { useMemo, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Icon
import logo from '../assets/img/logo.svg';
import admin from '../assets/img/icon/admin.svg';

// Constants
import { CURRENCY, LANGUAGE, NETWORK, CONNECTED, LGOUT } from '../config/constants/demo';
import { HeaderButton, IconButton, ConnectButton } from './Styled';
import MenuList from './MenuList';
import useConfig from 'hooks/useConfig';

// MUI
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isHeader = useMemo(() => {
        return !(pathname === '/dashboard' || pathname === '/login' || pathname === '/stables');
    }, [pathname]);

    const isAdmin = useMemo(() => {
        return pathname === '/dashboard' || pathname === '/stables';
    }, [pathname]);

    const { changeData } = useConfig();

    const [logout, setLogout] = useState(false);
    const [connect, setConnect] = useState(-1);
    const [currentNet, setCurrentNet] = useState(0);
    const [currentLang, setCurrentLang] = useState(1);
    const [currentCurrency, setCurrentCurrency] = useState(0);

    const [netAnchor, setNetAnchor] = useState<null | HTMLElement>(null);
    const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
    const [infoAnchor, setInfoAnchor] = useState<null | HTMLElement>(null);
    const [currencyAnchor, setCurrencyAnchor] = useState<null | HTMLElement>(null);
    const [walletAnchor, setWalletAnchor] = useState<null | HTMLElement>(null);

    const currencyHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrencyAnchor(event.currentTarget);
    };
    const currencyClose = () => {
        setCurrencyAnchor(null);
    };
    const setCurrency = (i: number) => {
        setCurrentCurrency(i);
        currencyClose();
    };

    const langHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLangAnchor(event.currentTarget);
    };
    const langClose = () => {
        setLangAnchor(null);
    };
    const setLang = (i: number) => {
        setCurrentLang(i);
        langClose();
    };

    const netHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNetAnchor(event.currentTarget);
    };
    const netClose = () => {
        setNetAnchor(null);
    };
    const setNet = (i: number) => {
        setCurrentNet(i);
        netClose();
        changeData({ key: 'NETWORK', data: NETWORK[i] });
    };

    const walletHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setWalletAnchor(event.currentTarget);
    };
    const walletClose = () => {
        setWalletAnchor(null);
    };
    const setWallet = (i: number) => {
        setConnect(i);
        walletClose();
    };

    const infoHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInfoAnchor(event.currentTarget);
    };
    const infoClose = () => {
        setInfoAnchor(null);
    };
    const setInfo = (i: number) => {
        setInfoAnchor(null);
        if (i) {
            setConnect(-1);
        }
    };

    const logoutHandle = () => {
        navigate('/login');
        setLogout(false);
    };

    useEffect(() => {
        changeData({ key: 'NETWORK', data: NETWORK[0] });
        // eslint-disable-next-line
    }, []);

    return (
        <header className="flex items-center justify-between w-full mt-10">
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-10 my-[2px]" />
                </Link>
                {isHeader && (
                    <>
                        <div className="ml-10">
                            <HeaderButton onClick={currencyHandle}>
                                <img src={CURRENCY[currentCurrency].icon} alt="currency" className="mr-2" />
                                U.S Dollar
                            </HeaderButton>
                        </div>
                        <div className="ml-5">
                            <IconButton onClick={langHandle}>
                                <img src={LANGUAGE[currentLang].icon} alt="currency" />
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
            {connect === -1 && isHeader && <ConnectButton className="bg-[#5A4EE8]">Connect your wallet</ConnectButton>}

            <div className="flex items-center">
                {isHeader && (
                    <>
                        <div>
                            <IconButton onClick={netHandle}>
                                <img src={NETWORK[currentNet].icon} alt="currency" />
                            </IconButton>
                        </div>
                        <div className="ml-5">
                            {connect === -1 ? (
                                <HeaderButton onClick={walletHandle}>Connect wallet</HeaderButton>
                            ) : (
                                <HeaderButton onClick={infoHandle}>
                                    <img
                                        src={NETWORK[currentNet].wallet[connect].icon}
                                        alt="currency"
                                        className="mr-2"
                                    />
                                    GALH....Z7I7
                                </HeaderButton>
                            )}
                        </div>
                    </>
                )}
                {isAdmin && (
                    <div className="ml-5 relative">
                        <HeaderButton onClick={() => setLogout(true)}>
                            <img src={admin} alt="currency" className="mr-2" />
                            Admin
                        </HeaderButton>
                        {logout && (
                            <div
                                onClick={logoutHandle}
                                className="bg-[#474764] absolute top-[48px] right-0 rounded-lg overflow-hidden"
                            >
                                <Stack>
                                    <MenuItem sx={{ py: 1.5, px: 2.5, minWidth: 180 }}>
                                        <ListItemIcon sx={{ mr: 1, '& img': { width: 24, height: 24 } }}>
                                            <img src={LGOUT[0].icon} alt="currency" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}>
                                            {LGOUT[0].name}
                                        </ListItemText>
                                    </MenuItem>
                                </Stack>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <MenuList data={CURRENCY} anchor={currencyAnchor} close={currencyClose} callback={setCurrency} />
            <MenuList data={LANGUAGE} anchor={langAnchor} close={langClose} callback={setLang} />
            <MenuList data={NETWORK} anchor={netAnchor} close={netClose} callback={setNet} />
            <MenuList
                data={NETWORK[currentNet].wallet}
                minWidth={150}
                anchor={walletAnchor}
                close={walletClose}
                callback={setWallet}
            />
            <MenuList data={CONNECTED} anchor={infoAnchor} close={infoClose} callback={setInfo} size={25} />
        </header>
    );
};

export default Header;
