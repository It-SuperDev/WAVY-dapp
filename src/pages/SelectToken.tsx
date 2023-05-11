import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// icons
import SearchIcon from '@mui/icons-material/Search';

// component
import Card from 'components/Card';

// Constatn
import { DemoDataProps } from 'types/config';
import useConfig from 'hooks/useConfig';
import { FLAG } from 'config/constants/demo';

const SelectToken = () => {
    const navigate = useNavigate();
    const data = useConfig();
    const { search } = useLocation();

    const [value, setValue] = useState('');

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
        if (data.token && data.token.required) {
            data.changeData({ key: 'token', data: { ...data.token, required: false, data: token } });
            if (search === `?before=/top-up` || search === '?before=/withdraw') {
                data.changeData({ key: 'WITHDRAW', data: getMatch(token.name) });
            }
            navigate(-1);
        }
    };

    return (
        <Card title="Select Stable" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-1 px-4">
                    <SearchIcon className="absolute" />
                    <input
                        className="w-full bg-transparent pl-8"
                        placeholder="Search"
                        onChange={(e: any) => setValue(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full rounded-lg bg-dark py-3 pl-5 mt-5">
                    <div className="h-[450px] overflow-auto w-full pr-5">
                        {data.NETWORK &&
                            data.NETWORK.token
                                .filter((e: any) => {
                                    const string = e.name.toLowerCase() + ' ' + e.sub.toLowerCase();
                                    return string.search(value.toLocaleLowerCase()) !== -1;
                                })
                                .map(({ name, sub, icon, amount, price }: DemoDataProps, i: number) => (
                                    <div
                                        key={i}
                                        onClick={() => setToken({ name, sub, icon, amount, price })}
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
                                                <p className="text-sm font-medium font-Unbounded">{name}</p>
                                                <p className="text-xs text-light-dark">{sub}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium font-Unbounded">{amount}</p>
                                            <p className="text-xs font-medium text-light-dark text-right">{price}</p>
                                        </div>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SelectToken;
