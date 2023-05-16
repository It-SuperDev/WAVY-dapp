import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Componant
import InfoList from './InfoList';
import MoreInfo from './MoreInfo';
import MenuList from './MenuList';
import MobileList from './MobileList';
import { HeaderButton, IconButton } from './Styled';

// Icon
import logo from '../assets/img/logo.svg';
import admin from '../assets/img/icon/admin.svg';

// Constants
import {
    CURRENCY,
    LANGUAGE,
    NETWORK,
    CONNECTED,
    LOGOUT,
    SEND_DATA,
    SWAP_DATA,
    OFFER,
    BRIDGE,
    TOPUP,
    WITHDRAW
} from '../config/constants/demo';
import useConfig from 'hooks/useConfig';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const gData = useConfig();
    const { changeData, initData, isMobile } = gData;

    const isHeader = useMemo(() => {
        return !(pathname === '/dashboard' || pathname === '/login' || pathname === '/stables');
    }, [pathname]);

    const isAdmin = useMemo(() => {
        return pathname === '/dashboard' || pathname === '/stables';
    }, [pathname]);

    const connectBtn = useRef();

    const [logout, setLogout] = useState(false);
    const [connect, setConnect] = useState(-1);
    const [currentNet, setCurrentNet] = useState(0);
    const [currentLang, setCurrentLang] = useState(1);
    const [currentCurrency, setCurrentCurrency] = useState(1);

    const [netAnchor, setNetAnchor] = useState<null | HTMLElement>(null);
    const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
    const [infoAnchor, setInfoAnchor] = useState<null | HTMLElement>(null);
    const [currencyAnchor, setCurrencyAnchor] = useState<null | HTMLElement>(null);
    const [walletAnchor, setWalletAnchor] = useState<null | HTMLElement>(null);
    const [mobileInfo, setMobileInfo] = useState(false);

    const currencyHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrencyAnchor(event.currentTarget);
    };
    const currencyClose = () => {
        setCurrencyAnchor(null);
    };
    const setCurrency = (i: number) => {
        setCurrentCurrency(i);
        changeData({ key: 'CURRENCY', data: CURRENCY[i].mark });
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
        if (connect !== -1) setConnect(0);
        changeData({ key: 'connect', data: NETWORK[currentNet].wallet[0] });
        netClose();
        changeData({ key: 'NETWORK', data: NETWORK[i] });
        if (i === 1 || i === 3) {
            changeData({
                key: 'BRIDGE',
                data: {
                    sIdx: 0,
                    rIdx: 0,
                    sNet: i,
                    rNet: i === 1 ? 3 : 1
                }
            });
        }
    };

    const walletHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setWalletAnchor(event.currentTarget);
    };
    const walletClose = () => {
        setWalletAnchor(null);
    };
    const setWallet = (i: number) => {
        setConnect(i);
        changeData({ key: 'connect', data: NETWORK[currentNet].wallet[i] });
        walletClose();
    };

    const infoHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isMobile) {
            setMobileInfo(true);
        } else {
            setInfoAnchor(event.currentTarget);
        }
    };
    const infoClose = () => {
        setInfoAnchor(null);
    };
    const setInfo = (i: number) => {
        setInfoAnchor(null);
        if (i) {
            setConnect(-1);
            navigate('/');
            changeData({ key: 'connect', data: null });
        }
    };

    const logoutHandle = (e: any) => {
        navigate('/login');
        setLogout(false);
    };

    useEffect(() => {
        initData({
            NETWORK: NETWORK[0],
            SEND: SEND_DATA,
            SWAP: SWAP_DATA,
            OFFER,
            BRIDGE,
            TOPUP,
            WITHDRAW,
            connect: null,
            CURRENCY: '$'
        });
        // eslint-disable-next-line
    }, []);

    return (
        <header className="flex items-center justify-between w-full md:pt-10 pt-2 md:px-0 px-5">
            <div className="hidden md:flex items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-10 my-[2px]" />
                </Link>
                {isHeader && (
                    <>
                        <div className="ml-10 relative">
                            <HeaderButton
                                className="md:bg-[#2e2d4e] bg-[#242429] md:border-[0px] border-[0.5px] border-[#ACACAE]"
                                onClick={currencyHandle}
                            >
                                <img src={CURRENCY[currentCurrency].icon} alt="currency" className="mr-2" />
                                {CURRENCY[currentCurrency].name}
                            </HeaderButton>
                            <MenuList
                                top={50}
                                minWidth={200}
                                data={CURRENCY}
                                anchor={currencyAnchor}
                                close={currencyClose}
                                callback={setCurrency}
                            />
                        </div>
                        <div className="ml-5 relative">
                            <IconButton onClick={langHandle} className="bg-[#2e2d4e]">
                                <img src={LANGUAGE[currentLang].icon} alt="lang" />
                            </IconButton>
                            <MenuList
                                top={50}
                                minWidth={200}
                                data={LANGUAGE}
                                anchor={langAnchor}
                                close={langClose}
                                callback={setLang}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="md:hidden" onClick={() => setMobileInfo(true)}>
                <img src={admin} alt="user" className="w-[44px] h-[44px] rounded-full" />
            </div>

            <div className="flex items-center">
                {isHeader && (
                    <>
                        <div className="relative">
                            <IconButton
                                onClick={netHandle}
                                className="md:bg-[#2e2d4e] bg-[#242429] md:border-[0px] border-[0.5px] border-[#ACACAE] h-[44px]"
                            >
                                <img src={NETWORK[currentNet].icon} alt="net" />
                            </IconButton>
                            {!isMobile && (
                                <MenuList
                                    top={50}
                                    minWidth={230}
                                    data={NETWORK}
                                    anchor={netAnchor}
                                    close={netClose}
                                    callback={setNet}
                                />
                            )}
                        </div>
                        <div className="ml-5 h-[44px] relative">
                            {connect === -1 ? (
                                <HeaderButton
                                    className="md:bg-[#2e2d4e] bg-[#242429] md:border-[0px] border-[0.5px] border-[#ACACAE]"
                                    onClick={walletHandle}
                                    ref={connectBtn}
                                >
                                    {isMobile ? 'Connect' : 'Connect wallet'}
                                </HeaderButton>
                            ) : (
                                <HeaderButton
                                    className="md:bg-[#2e2d4e] bg-[#242429] md:border-[0px] border-[0.5px] border-[#ACACAE]"
                                    onClick={infoHandle}
                                >
                                    <img
                                        src={NETWORK[currentNet].wallet[connect].icon}
                                        alt="currency"
                                        className="mr-2"
                                    />
                                    GALH....Z7I7
                                </HeaderButton>
                            )}
                            {!isMobile && (
                                <>
                                    <MenuList
                                        top={50}
                                        data={NETWORK[currentNet].wallet}
                                        minWidth={150}
                                        anchor={walletAnchor}
                                        close={walletClose}
                                        callback={setWallet}
                                    />
                                    <InfoList
                                        top={50}
                                        minWidth={150}
                                        anchor={infoAnchor}
                                        close={infoClose}
                                        callback={setInfo}
                                        size={25}
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
                {isAdmin && (
                    <div className="ml-5 relative">
                        <HeaderButton
                            className="md:bg-[#2e2d4e] bg-[#242429] md:border-[0px] border-[0.5px] border-[#ACACAE]"
                            onClick={() => setLogout(true)}
                        >
                            <img src={admin} alt="currency" className="mr-2" />
                            Admin
                        </HeaderButton>
                        {logout && (
                            <>
                                <div className="absolute left-0 py-2 rounded-lg bg-[#2e2d4e] z-20 top-[50px] min-w-[150px]">
                                    <div className="flex flex-col">
                                        <li className="py-2 px-5 flex cursor-pointer" onClick={logoutHandle}>
                                            <div className="mr-3 w-[24px] h-[24px]">
                                                <img
                                                    src={LOGOUT[0].icon}
                                                    alt="currency"
                                                    className="w-[24px] h-[24px]"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-sm">{LOGOUT[0].name}</span>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div
                                    className="fixed w-screen h-screen z-10 top-0 left-0"
                                    onClick={() => setLogout(false)}
                                />
                            </>
                        )}
                    </div>
                )}
            </div>
            {isMobile && (
                <>
                    {Boolean(netAnchor) && (
                        <MobileList
                            title="Choose network"
                            sub="Choose your preferred network"
                            data={NETWORK}
                            close={netClose}
                            callback={setNet}
                        />
                    )}
                    {Boolean(walletAnchor) && (
                        <MobileList
                            title="Connect wallet"
                            sub="Connect your wallet compatible with the  network"
                            data={NETWORK[currentNet].wallet}
                            close={walletClose}
                            callback={setWallet}
                        />
                    )}
                    {Boolean(mobileInfo) && (
                        <MoreInfo
                            connect={connect}
                            infoData={CONNECTED}
                            infoHandle={infoHandle}
                            infoCallback={setInfo}
                            wallet={NETWORK[currentNet].wallet}
                            langIcon={LANGUAGE[currentLang].icon}
                            currency={CURRENCY[currentCurrency]}
                            currencyCallback={setCurrency}
                            langCallback={setLang}
                            close={() => setMobileInfo(false)}
                        />
                    )}
                </>
            )}
        </header>
    );
};

export default Header;
