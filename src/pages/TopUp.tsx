import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Icon
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';
import { FLAG } from 'config/constants/demo';
import { DemoDataProps } from 'types/config';
import MobileMethod from 'components/MobileMethod';

const TopUp = () => {
    const navigate = useNavigate();
    const data = useConfig();

    const [value, setValue] = useState('');
    const [page, setPage] = useState(1);
    const [tokenName, setTokenName] = useState('');

    const getMatch = (name: string) => {
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

    const setToken = (token: any) => {
        setTokenName(token.name);
        data.changeData({ key: 'token', data: { ...data.token, required: false, data: token } });
        data.changeData({ key: 'WITHDRAW', data: getMatch(token.name) });
        setPage(2);
    };

    const callback = () => {
        setPage(3);
    };

    useEffect(() => {
        if (!data.WITHDRAW) {
            data.changeData({ key: 'WITHDRAW', data: getMatch(data.NETWORK.topUp.first.name) });
        }
        // eslint-disable-next-line
    }, []);

    if (!data.WITHDRAW) return null;
    if (data.isMobile) {
        return (
            <>
                {(() => {
                    if (page === 3) {
                        return (
                            <MobileCard title="Top up" back={() => setPage(1)}>
                                <div className="flex flex-col w-full px-5">
                                    <div className="flex flex-col w-full">
                                        <ValueInput title="Amount" value={0.0} tokenList={[data.WITHDRAW]} />
                                        <p className="text-[#B8ACFF] my-4">Fee: 0.00</p>
                                        <ValueInput
                                            title="Receive"
                                            available="Available: 3000 USDC"
                                            value={0.0}
                                            tokenList={[data.NETWORK.topUp.second]}
                                        />

                                        <div className="rounded-lg w-full border-[0.6px]  bg-[#242429] rounded-lg py-3 px-6 mt-9 mb-16 flex items-center">
                                            <BankIcon className="h-[30px] w-[30px] mr-4" />
                                            <div>
                                                <p>Bank Transfer</p>
                                                <p className="text-xs text-[#ACACAE]">Top up with your bank account</p>
                                            </div>
                                        </div>
                                        <PrimaryButton className="w-full text-center py-4">Continue</PrimaryButton>
                                    </div>
                                </div>
                            </MobileCard>
                        );
                    } else {
                        return (
                            <MobileCard title="Top up" back={() => navigate(-1)}>
                                <div className="flex flex-col w-full px-5">
                                    <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-1 px-4">
                                        <SearchIcon className="absolute" />
                                        <input
                                            className="w-full bg-transparent pl-8"
                                            placeholder="Search"
                                            onChange={(e: any) => setValue(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full rounded-lg py-3 mt-5 pl-5 rounded-lg bg-[#242429]">
                                        <div
                                            className="overflow-auto w-full pr-5"
                                            style={{ height: 'calc(100vh - 72px - 28px - 78px - 20px)' }}
                                        >
                                            {data.NETWORK &&
                                                data.NETWORK.token
                                                    .filter((e: any) => {
                                                        const string = e.name.toLowerCase() + ' ' + e.sub.toLowerCase();
                                                        return string.search(value.toLocaleLowerCase()) !== -1;
                                                    })
                                                    .map(
                                                        (
                                                            { name, sub, icon, amount, price }: DemoDataProps,
                                                            i: number
                                                        ) => (
                                                            <div
                                                                key={i}
                                                                onClick={() =>
                                                                    setToken({ name, sub, icon, amount, price })
                                                                }
                                                                className="flex items-center justify-between border-b-[1px] border-[#36363A] py-3 cursor-pointer"
                                                            >
                                                                <div className="flex items-center">
                                                                    <div className="flex items-center justify-center border-2 border-[#FFFFFF] rounded-full mr-2">
                                                                        <img
                                                                            src={icon}
                                                                            alt="icon"
                                                                            className="w-[25px] h-[25px] bg-white rounded-full"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm font-medium font-Unbounded">
                                                                            {name}
                                                                        </p>
                                                                        <p className="text-xs text-light-dark">{sub}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium font-Unbounded">
                                                                        {amount}
                                                                    </p>
                                                                    <p className="text-xs font-medium text-light-dark text-right">
                                                                        {price}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                        </div>
                                    </div>
                                </div>
                                {page === 2 && (
                                    <MobileMethod
                                        isTop={true}
                                        close={() => setPage(1)}
                                        callback={callback}
                                        tokenName={tokenName}
                                    />
                                )}
                            </MobileCard>
                        );
                    }
                })()}
            </>
        );
    } else {
        return (
            <Card title="Top Up" back={() => navigate('/')}>
                <div className="flex flex-col w-full">
                    <ValueInput title="Amount" value={0.0} tokenList={[data.WITHDRAW]} />
                    <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">Fee: 0.00</p>
                    <ValueInput
                        title="Receive"
                        available="Available: 3000 USDC"
                        value={0.0}
                        tokenList={[data.NETWORK.topUp.second, data.NETWORK.topUp.first]}
                    />
                    {data.NETWORK.topUp.method ? (
                        <Link to="method">
                            <div className="bg-[#090912] rounded-lg py-2 px-6 mt-4 mb-16 flex items-center justify-between">
                                <span>Choose payment method</span>
                                <KeyboardArrowDownIcon />
                            </div>
                        </Link>
                    ) : (
                        <div className="bg-[#090912] rounded-lg py-3 px-6 mt-4 mb-16 flex items-center">
                            <BankIcon className="h-[24px] w-[24px] mr-2" /> <span>Bank Transfer</span>
                        </div>
                    )}
                    <PrimaryButton className="w-full text-center py-4">Continue</PrimaryButton>
                </div>
            </Card>
        );
    }
};

export default TopUp;
