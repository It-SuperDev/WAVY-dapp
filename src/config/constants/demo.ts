// currency icons
import nairaIcon from 'assets/img/currency/naira.svg';
import dollarIcon from 'assets/img/currency/dollar.svg';
import poundIcon from 'assets/img/currency/pound.svg';
import cediIcon from 'assets/img/currency/cedi.svg';
import euroIcon from 'assets/img/currency/euro.svg';

// language icons
import chinaIcon from 'assets/img/lang/china.svg';
import unitedKingdomIcon from 'assets/img/lang/united-kingdom.svg';
import franceIcon from 'assets/img/lang/france.svg';
import germanyIcon from 'assets/img/lang/germany.svg';
import indiaIcon from 'assets/img/lang/india.svg';
import portugalIcon from 'assets/img/lang/portugal.svg';
import russiaIcon from 'assets/img/lang/russia.svg';
import spainIcon from 'assets/img/lang/spain.svg';
import turkeyIcon from 'assets/img/lang/turkey.svg';

// wallet icons
import freighterIcon from 'assets/img/wallet/freighter.svg';
import xbullIcon from 'assets/img/wallet/xbull.svg';
import coinbaseIcon from 'assets/img/wallet/coinbase.svg';
import metamaskIcon from 'assets/img/wallet/MetaMask.svg';
import walletconnectIcon from 'assets/img/wallet/walletconnect.svg';
import walletconnectIcon1 from 'assets/img/wallet/walletconnect-1.svg';
import exodusIcon from 'assets/img/wallet/exodus.svg';
import phantomIcon from 'assets/img/wallet/phantom.svg';
import tronwalletIcon from 'assets/img/wallet/tron.svg';

// network icons
import stellarIcon from 'assets/img/network/stellar.svg';
import polygonIcon from 'assets/img/network/polygon.svg';
import avalancheIcon from 'assets/img/network/avalanche.svg';
import ethereumIcon from 'assets/img/network/ethereum.svg';
import solanaIcon from 'assets/img/network/solana.svg';
import tronIcon from 'assets/img/network/tron.svg';

// stellar
import arsIcon from 'assets/img/coin/stellar/ars.svg';
import arstIcon from 'assets/img/coin/stellar/arst.svg';
import ghscIcon from 'assets/img/coin/stellar/ghsc.svg';
import kesIcon from 'assets/img/coin/stellar/kes.svg';
// polygon
import brzIcon from 'assets/img/coin/polygon/brz.svg';
import cadcIcon from 'assets/img/coin/polygon/cadc.svg';
import eursIcon from 'assets/img/coin/polygon/eurs.svg';
import jeurIcon from 'assets/img/coin/polygon/jeur.svg';
import ngncIcon from 'assets/img/coin/polygon/ngnc.svg';
import trybIcon from 'assets/img/coin/polygon/tryb.svg';
import usdcIcon from 'assets/img/coin/polygon/usdc.svg';
// Ethereum
import eurocIcon from 'assets/img/coin/ethereum/euroc.svg';
import qcadIcon from 'assets/img/coin/ethereum/qcad.svg';
import zarpIcon from 'assets/img/coin/ethereum/zarp.svg';
// avalanche
import tgbpIcon from 'assets/img/coin/avalanche/tgbp.svg';

import tcnhIcon from 'assets/img/coin/tron/tcnh.svg';
import usdtIcon from 'assets/img/coin/tron/usdt.svg';

// connected
import copyIcon from 'assets/img/icon/copy.svg';
import disconnectIcon from 'assets/img/icon/disconnect.svg';
import mobileCopyIcon from 'assets/img/icon/mobile-copy.svg';
import mobileDisconnectIcon from 'assets/img/icon/mobile-disconnect.svg';

// methods
import bankIcon from 'assets/img/icon/bank.svg';
import moneyGramIcon from 'assets/img/icon/moneyGram.svg';

// my offer actions
import editIcon from 'assets/img/icon/edit.svg';
import deleteIcon from 'assets/img/icon/delete.svg';

import { FLAG } from './nation_flag';
import { stellar, polygon, avalanche, ethereum, solana, tron } from './token';

export const CURRENCY = [
    {
        name: 'Nigerian Naira',
        icon: nairaIcon,
        mark: '₦'
    },
    {
        name: 'U.S Dollar',
        icon: dollarIcon,
        mark: '$'
    },
    {
        name: 'British Pound',
        icon: poundIcon,
        mark: '£'
    },
    {
        name: 'Euro',
        icon: euroIcon,
        mark: '€'
    },
    {
        name: 'Ghanaian Cedi',
        icon: cediIcon,
        mark: '₵'
    }
];

export const LANGUAGE = [
    {
        name: 'Chinese (Mandarin)',
        icon: chinaIcon
    },
    {
        name: 'English',
        icon: unitedKingdomIcon
    },
    {
        name: 'French',
        icon: franceIcon
    },
    {
        name: 'German',
        icon: germanyIcon
    },
    {
        name: 'Hindi',
        icon: indiaIcon
    },
    {
        name: 'Portugese',
        icon: portugalIcon
    },
    {
        name: 'Russian',
        icon: russiaIcon
    },
    {
        name: 'Spanish',
        icon: spainIcon
    },
    {
        name: 'Turkish',
        icon: turkeyIcon
    }
];

export const WALLET = [
    {
        name: 'Freighter',
        icon: freighterIcon
    },
    {
        name: 'xBull',
        icon: xbullIcon
    },
    {
        name: 'walletConnect',
        icon: walletconnectIcon
    }
];

export const TOKEN_LIST = [
    {
        name: 'BRZ',
        sub: 'Brazilian Real',
        icon: brzIcon,
        amount: '200.54 BRZ',
        price: '$39.88'
    },
    {
        name: 'CADC',
        sub: 'Canadian Dollar',
        icon: cadcIcon,
        amount: '5000 CADC',
        price: '$3,669.07'
    },
    {
        name: 'EURS',
        sub: 'Euro',
        icon: eursIcon,
        amount: '3000 EURS',
        price: '$3,311.55'
    },
    {
        name: 'JEUR',
        sub: 'Euro',
        icon: jeurIcon,
        amount: '3000 JEUR',
        price: '$3,311.55'
    },
    {
        name: 'NGNC',
        sub: 'Nigerian Naira',
        icon: ngncIcon,
        amount: '5000 NGNC',
        price: '$6.75'
    },
    {
        name: 'TRYB',
        sub: 'Turkish Lira',
        icon: trybIcon,
        amount: '2880.33 TRYB',
        price: '$147.91'
    },
    {
        name: 'USDC',
        sub: 'U.S dollar',
        icon: usdcIcon,
        amount: '3000 USDC',
        price: '$3,000.00'
    }
];

export const CONNECTED = [
    {
        name: 'Copy address',
        icon: copyIcon,
        mIcon: mobileCopyIcon
    },
    {
        name: 'Disconnect wallet',
        icon: disconnectIcon,
        mIcon: mobileDisconnectIcon
    }
];

export const LOGOUT = [
    {
        name: 'Log out',
        icon: disconnectIcon
    }
];

export const TOP_METHOD = [
    {
        name: 'Bank Transfer',
        sub: 'Top up with your bank account',
        icon: bankIcon
    },
    {
        name: 'MoneyGram',
        sub: 'Top Up from a MoneyGram station',
        icon: moneyGramIcon
    }
];

export const WITHDRAW_METHOD = [
    {
        name: 'Bank Account',
        sub: 'Withdraw your stablecoin to your bank account',
        icon: bankIcon
    },
    {
        name: 'MoneyGram',
        sub: 'Withdraw your stablecoin to a MoneyGram station',
        icon: moneyGramIcon
    }
];

export const MY_OFFER_ACTION = [
    {
        name: 'Edit offer',
        icon: editIcon
    },
    {
        name: 'Delete offer',
        icon: deleteIcon
    }
];

export const NETWORK = [
    {
        name: 'Stellar Mainnet',
        sub: 'Stellar',
        icon: stellarIcon,
        token: stellar,
        wallet: [
            {
                name: 'Freighter',
                icon: freighterIcon
            },
            {
                name: 'xBull',
                icon: xbullIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon1
            }
        ],
        offers: [
            {
                send: {
                    name: 'TZS',
                    icon: kesIcon
                },
                receive: {
                    name: 'NGNC',
                    icon: ngncIcon
                },
                rate: '1 NGNC = 5.01 TZS',
                available: '30000 TZS',
                limit: '1 - 10000 TZS',
                status: 'active'
            },
            {
                send: {
                    name: 'ARST',
                    icon: arstIcon
                },
                receive: {
                    name: 'RWF',
                    icon: kesIcon
                },
                rate: '1 ARST = 5.03 RWF',
                available: '7250 ARST',
                limit: '1 - 50000 ARST',
                status: 'accpted'
            },
            {
                send: {
                    name: 'GHSC',
                    icon: ghscIcon
                },
                receive: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                rate: '1 USDC = 11.95 GHSC',
                available: '12250 GHSC',
                limit: '1 - 18000 GHSC',
                status: 'completed'
            },
            {
                send: {
                    name: 'ARS',
                    icon: arsIcon
                },
                receive: {
                    name: 'NGNC',
                    icon: ngncIcon
                },
                rate: '1 ARS = 11.95 NGNC',
                available: '12250 ARS',
                limit: '1 - 18000 ARS',
                status: 'Cancelled'
            }
        ]
    },
    {
        name: 'Polygon Mainnet',
        sub: 'Polygon',
        icon: polygonIcon,
        token: polygon,
        wallet: [
            {
                name: 'MetaMask',
                icon: metamaskIcon
            },
            {
                name: 'Coinbase',
                icon: coinbaseIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon
            }
        ],
        offers: [
            {
                send: {
                    name: 'JEUR',
                    icon: jeurIcon
                },
                receive: {
                    name: 'BRZ',
                    icon: brzIcon
                },
                rate: '1 JEUR = 5.48 BRZ',
                available: '2500 JEUR',
                limit: '1 - 200 BRZ',
                status: 'active'
            },
            {
                send: {
                    name: 'CADC',
                    icon: cadcIcon
                },
                receive: {
                    name: 'TRYB',
                    icon: trybIcon
                },
                rate: '1 CADC = 14.35 TRYB',
                available: '2500 CADC',
                limit: '1 - 500 TRYB',
                status: 'accpted'
            },
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'NGNC',
                    icon: ngncIcon
                },
                rate: '1 USDC = 735.21 NGNC',
                available: '12250 USDC',
                limit: '1 - 800 NGNC',
                status: 'completed'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'BRZ',
                    icon: brzIcon
                },
                rate: '1 USDT = 5.04 BRZ',
                available: '3050 USDT',
                limit: '1 - 600 BRZ',
                status: 'Cancelled'
            }
        ]
    },
    {
        name: 'Avalanche Mainnet',
        sub: 'Avalanche',
        icon: avalancheIcon,
        token: avalanche,
        wallet: [
            {
                name: 'MetaMask',
                icon: metamaskIcon
            },
            {
                name: 'Coinbase',
                icon: coinbaseIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon
            }
        ],
        offers: [
            {
                send: {
                    name: 'TGBP',
                    icon: tgbpIcon
                },
                receive: {
                    name: 'TRYB',
                    icon: trybIcon
                },
                rate: '1 TGBP = 24.20 TRYB',
                available: '2500 TGBP',
                limit: '1 - 200 TGBP',
                status: 'active'
            },
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'BRZ',
                    icon: brzIcon
                },
                rate: '1 USDC = 14.35 BRZ',
                available: '2500 USDC',
                limit: '1 - 800 BRZ',
                status: 'completed'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'JEUR',
                    icon: jeurIcon
                },
                rate: '1 JEUR = 735.21 USDT',
                available: '12250 USDT',
                limit: '1 - 800 JEUR',
                status: 'Cancelled'
            }
        ]
    },
    {
        name: 'Ethereum Main Network',
        sub: 'Ethereum',
        icon: ethereumIcon,
        token: ethereum,
        wallet: [
            {
                name: 'MetaMask',
                icon: metamaskIcon
            },
            {
                name: 'Coinbase',
                icon: coinbaseIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon
            }
        ],
        offers: [
            {
                send: {
                    name: 'EUROC',
                    icon: eurocIcon
                },
                receive: {
                    name: 'BRZ',
                    icon: brzIcon
                },
                rate: '1 EUROC = 5.48 BRZ',
                available: '2500 EUROC',
                limit: '1 - 200 BRZ',
                status: 'active'
            },
            {
                send: {
                    name: 'QCAD',
                    icon: qcadIcon
                },
                receive: {
                    name: 'TRYB',
                    icon: trybIcon
                },
                rate: '1 QCAD = 14.35 TRYB',
                available: '2500 QCAD',
                limit: '1 - 500 TRYB',
                status: 'accpted'
            },
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'TGBP',
                    icon: tgbpIcon
                },
                rate: '1 TGBP = 735.21 USDC',
                available: '12250 USDC',
                limit: '1 - 800 TGBP',
                status: 'completed'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'ZARP',
                    icon: zarpIcon
                },
                rate: '1 USDT = 735.21 ZARP',
                available: '12250 USDT',
                limit: '1 - 600 ZARP',
                status: 'Cancelled'
            }
        ]
    },
    {
        name: 'Solana Mainnet',
        sub: 'Solana',
        icon: solanaIcon,
        token: solana,
        wallet: [
            {
                name: 'Exodus Wallet',
                icon: exodusIcon
            },
            {
                name: 'Phantom',
                icon: phantomIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon
            }
        ],
        offers: [
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'TRYB',
                    icon: trybIcon
                },
                rate: '1 USDC = 5.48 TRYB',
                available: '2500 USDC',
                limit: '500 - 2000 TRYB',
                status: 'active'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'NGNC',
                    icon: ngncIcon
                },
                rate: '1 USDT = 14.35 NGNC',
                available: '2500 USDT',
                limit: '10000 - 500000 NGNC',
                status: 'accpted'
            },
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'BRZ',
                    icon: brzIcon
                },
                rate: '1 BRZ = 735.21 USDC',
                available: '12250 USDC',
                limit: '1 - 800 BRZ',
                status: 'completed'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'TRYB',
                    icon: trybIcon
                },
                rate: '1 USDT = 735.21 TRYB',
                available: '12250 USDT',
                limit: '250 - 1500 TRYB',
                status: 'Cancelled'
            }
        ]
    },
    {
        name: 'Tron Mainnet',
        sub: 'Tron',
        icon: tronIcon,
        token: tron,
        wallet: [
            {
                name: 'TronLink',
                icon: tronwalletIcon
            },
            {
                name: 'walletConnect',
                icon: walletconnectIcon
            }
        ],
        offers: [
            {
                send: {
                    name: 'USDC',
                    icon: usdcIcon
                },
                receive: {
                    name: 'TCNH',
                    icon: tcnhIcon
                },
                rate: '1 USDC = 5.48 TCNH',
                available: '2500 USDC',
                limit: '500 - 2000 TCNH',
                status: 'active'
            },
            {
                send: {
                    name: 'USDT',
                    icon: usdtIcon
                },
                receive: {
                    name: 'EURS',
                    icon: eursIcon
                },
                rate: '1 USDT = 14.35 EURS',
                available: '2500 USDT',
                limit: '10 - 500 EURS',
                status: 'accpted'
            }
        ]
    }
];

export const SEND_DATA = {
    sIdx: 0,
    rIdx: 1,
    list: [
        {
            rate: 90.67,
            limit: '1 - 500'
        },
        {
            rate: 89.52,
            limit: '1 - 600'
        },
        {
            rate: 91.25,
            limit: '1 - 800'
        }
    ]
};

export const SWAP_DATA = {
    sIdx: 0,
    rIdx: 1,
    equal: 486.04
};

export const OFFER = {
    sIdx: 0,
    rIdx: 1,
    rate: 205.3,
    min: 10,
    max: 500
};

export const BRIDGE = {
    sIdx: 0,
    rIdx: 0,
    sNet: 1,
    rNet: 3
};

export const TOPUP = {
    sIdx: 0,
    rIdx: 0,
    method: 0
};

export const WITHDRAW = {
    sIdx: 0,
    rIdx: 0,
    method: 0
};

export const getMatch = (name: string) => {
    switch (name) {
        case 'BRZ':
        case 'BRL':
        case 'BRLT':
            return FLAG['BRS'];
        case 'EURC':
        case 'EUROC':
        case 'EURT':
        case 'JEUR':
        case 'EURS':
            return FLAG['EUR'];
        case 'CADC':
        case 'QCAD':
            return FLAG['CAD'];
        case 'CNHC':
        case 'TCNH':
            return FLAG['CNY'];
        case 'USDC':
        case 'USDT':
            return FLAG['USD'];
        case 'ARS':
        case 'ARST':
            return FLAG['ARS'];
        case 'GBPT':
        case 'TGBP':
            return FLAG['GBP'];
        case 'GHSC':
            return FLAG['GHS'];
        case 'TZS':
            return FLAG['TZS'];
        case 'RWF':
            return FLAG['RWF'];
        case 'KES':
            return FLAG['KES'];
        case 'TRYB':
            return FLAG['TRY'];
        case 'AUDD':
            return FLAG['AUD'];
        case 'ZARP':
            return FLAG['ZAR'];
        case 'NGNC':
            return FLAG['NGN'];
        default:
            return FLAG['USD'];
    }
};
