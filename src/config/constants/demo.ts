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

// coins
// stellar
import arsIcon from 'assets/img/coin/stellar/ars.svg';
import arstIcon from 'assets/img/coin/stellar/arst.svg';
import auddIcon from 'assets/img/coin/stellar/audd.svg';
import brlIcon from 'assets/img/coin/stellar/brl.svg';
import eurcIcon from 'assets/img/coin/stellar/eurc.svg';
import ghscIcon from 'assets/img/coin/stellar/ghsc.svg';
// polygon
import brzIcon from 'assets/img/coin/polygon/brz.svg';
import cadcIcon from 'assets/img/coin/polygon/cadc.svg';
import eursIcon from 'assets/img/coin/polygon/eurs.svg';
import jeurIcon from 'assets/img/coin/polygon/jeur.svg';
import ngncIcon from 'assets/img/coin/polygon/ngnc.svg';
import trybIcon from 'assets/img/coin/polygon/tryb.svg';
import usdcIcon from 'assets/img/coin/polygon/usdc.svg';
// Ethereum
import cnhcIcon from 'assets/img/coin/ethereum/cnhc.svg';
import eurocIcon from 'assets/img/coin/ethereum/euroc.svg';
import eurtIcon from 'assets/img/coin/ethereum/eurt.svg';
import gbptIcon from 'assets/img/coin/ethereum/gbpt.svg';
// avalanche
import tgbpIcon from 'assets/img/coin/avalanche/tgbp.svg';

import tcnhIcon from 'assets/img/coin/tron/tcnh.svg';
import usdtIcon from 'assets/img/coin/tron/usdt.svg';

// connected
import copyIcon from 'assets/img/icon/copy.svg';
import disconnectIcon from 'assets/img/icon/disconnect.svg';

// methods
import bankIcon from 'assets/img/icon/bank.svg';
import moneyGramIcon from 'assets/img/icon/moneyGram.svg';

// my offer actions
import editIcon from 'assets/img/icon/edit.svg';
import deleteIcon from 'assets/img/icon/delete.svg';

export const CURRENCY = [
    {
        name: 'Nigerian Naira',
        icon: nairaIcon
    },
    {
        name: 'U.S Dollar',
        icon: dollarIcon
    },
    {
        name: 'British Pound',
        icon: poundIcon
    },
    {
        name: 'Euro',
        icon: euroIcon
    },
    {
        name: 'Ghanaian Cedi',
        icon: cediIcon
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
        icon: copyIcon
    },
    {
        name: 'Disconnect wallet',
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
        name: 'Bank Transfer',
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

export const stellar = [
    {
        name: 'ARS',
        icon: arsIcon,
        sub: 'Argentine Peso',
        amount: '20000.54 ARS',
        price: '$89.04'
    },
    {
        name: 'ARST',
        icon: arstIcon,
        sub: 'Argentine Peso',
        amount: '15882.39 ARST',
        price: '$70.70'
    },
    {
        name: 'BRL',
        icon: brlIcon,
        sub: 'Brazilian Real',
        amount: '15000 BRL',
        price: '$3,004.92'
    },
    {
        name: 'BRLT',
        icon: brlIcon,
        sub: 'Brazilian Real',
        amount: '13000 BRLT',
        price: '$2,604.26'
    },
    {
        name: 'AUDD',
        icon: auddIcon,
        sub: 'Australian Dollar',
        amount: '5000 AUDD',
        price: '$3,329.67'
    },
    {
        name: 'EURC',
        icon: eurcIcon,
        sub: 'Euro',
        amount: '3000 EURC',
        price: '$3,285.39'
    },
    {
        name: 'GHSC',
        icon: ghscIcon,
        sub: 'Ghanaian Cedi',
        amount: '3000 GHSC',
        price: '$254.24'
    }
];
export const polygon = [
    {
        name: 'BRZ',
        icon: brzIcon,
        sub: 'Brazilian Real',
        amount: '13000 BRZ',
        price: '$2,604.26'
    },
    {
        name: 'CADC',
        icon: cadcIcon,
        sub: 'Canadian Dollar',
        amount: '5000 CADC',
        price: '$3,669.07'
    },
    {
        name: 'EURS',
        icon: eursIcon,
        sub: 'Euro',
        amount: '3000 EURS',
        price: '$3,311.55'
    },
    {
        name: 'JEUR',
        icon: jeurIcon,
        sub: 'Euro',
        amount: '3000 JEUR',
        price: '$3,311.55'
    },
    {
        name: 'NGNC',
        icon: ngncIcon,
        sub: 'Nigerian Naira',
        amount: '5000 NGNC',
        price: '$6.75'
    },
    {
        name: 'TRYB',
        icon: trybIcon,
        sub: 'Turkish Lira',
        amount: '5000 TRYB',
        price: '$6.75'
    },
    {
        name: 'USDC',
        icon: usdcIcon,
        sub: 'U.S dollar',
        amount: '3000 USDC',
        price: '$3,000.00'
    }
];
export const avalanche = [
    {
        name: 'BRZ',
        icon: brzIcon,
        sub: 'Brazilian Real',
        amount: '13000 BRZ',
        price: '$2,604.26'
    },
    {
        name: 'EURT',
        icon: eurtIcon,
        sub: 'Euro',
        amount: '13000 EURT',
        price: '$2,604.26'
    },
    {
        name: 'JEUR',
        icon: jeurIcon,
        sub: 'Euro',
        amount: '3000 JEUR',
        price: '$3,311.55'
    },
    {
        name: 'NGNC',
        icon: ngncIcon,
        sub: 'Nigerian Naira',
        amount: '5000 NGNC',
        price: '$6.75'
    },
    {
        name: 'TRYB',
        icon: trybIcon,
        sub: 'Turkish Lira',
        amount: '5000 TRYB',
        price: '$6.75'
    },
    {
        name: 'USDC',
        icon: usdcIcon,
        sub: 'U.S dollar',
        amount: '3000 USDC',
        price: '$3,000.00'
    },
    {
        name: 'TGBP',
        icon: tgbpIcon,
        sub: 'British Pound',
        amount: '3000 TGBP',
        price: '$3,122.60'
    }
];
export const ethereum = [
    {
        name: 'BRZ',
        icon: brzIcon,
        sub: 'Brazilian Real',
        amount: '13000 BRZ',
        price: '$2,604.26'
    },
    {
        name: 'CADC',
        sub: 'Canadian Dollar',
        icon: cadcIcon,
        amount: '5000 CADC',
        price: '$3,669.07'
    },
    {
        name: 'CNHC',
        sub: 'Chiness Yuan',
        icon: cnhcIcon,
        amount: '5000 CNHC',
        price: '$3,669.07'
    },
    {
        name: 'EUROC',
        sub: 'Euro',
        icon: eurocIcon,
        amount: '5000 EUROC',
        price: '$3,669.07'
    },
    {
        name: 'EURT',
        icon: eurtIcon,
        sub: 'Euro',
        amount: '13000 EURT',
        price: '$2,604.26'
    },
    {
        name: 'EURS',
        sub: 'Euro',
        icon: eursIcon,
        amount: '3000 EURS',
        price: '$3,311.55'
    },
    {
        name: 'GBPT',
        sub: 'British Pound',
        icon: gbptIcon,
        amount: '3000 GBPT',
        price: '$889.20'
    }
];
export const solana = [
    {
        name: 'BRZ',
        icon: brzIcon,
        sub: 'Brazilian Real',
        amount: '13000 BRZ',
        price: '$2,604.26'
    },
    {
        name: 'NGNC',
        icon: ngncIcon,
        sub: 'Nigerian Naira',
        amount: '5000 NGNC',
        price: '$6.75'
    },
    {
        name: 'TRYB',
        icon: trybIcon,
        sub: 'Turkish Lira',
        amount: '5000 TRYB',
        price: '$6.75'
    },
    {
        name: 'USDC',
        icon: usdcIcon,
        sub: 'U.S dollar',
        amount: '3000 USDC',
        price: '$3,000.00'
    },
    {
        name: 'USDT',
        icon: usdtIcon,
        sub: 'U.S dollar',
        amount: '3000 USDT',
        price: '$3,000.00'
    }
];
export const tron = [
    {
        name: 'EURS',
        sub: 'Euro',
        icon: eursIcon,
        amount: '3000 EURS',
        price: '$3,311.55'
    },
    {
        name: 'TCNH',
        sub: 'Chines yuan',
        icon: tcnhIcon,
        amount: '3000 TCNH',
        price: '$3,311.55'
    },
    {
        name: 'USDC',
        sub: 'U.S dollar',
        icon: usdcIcon,
        amount: '3000 USDC',
        price: '$3,000.00'
    },
    {
        name: 'USDT',
        sub: 'U.S dollar',
        icon: usdcIcon,
        amount: '3000 USDT',
        price: '$3,000.00'
    }
];
export const NETWORK = [
    {
        name: 'Stellar Mainnet',
        sub: 'Stellar',
        icon: stellarIcon,
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
                icon: coinbaseIcon
            }
        ],
        token: stellar
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
        ]
    }
];
