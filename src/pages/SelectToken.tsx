import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { ReactComponent as SearchIcon } from 'assets/img/icon/search.svg';

// Component
import Card from 'components/Card';
import MobileCard from 'components/MobileCard';

// Constant
import useConfig from 'hooks/useConfig';
import { NETWORK as AllNets } from 'config/constants/demo';

const SelectToken = () => {
    const navigate = useNavigate();
    const gData = useConfig();
    const { isMobile, NETWORK, TOKEN_SELECT } = gData;

    const [value, setValue] = useState('');

    const setToken = (one: any) => {
        let temp = gData[TOKEN_SELECT[0]];
        temp[TOKEN_SELECT[1]] = one.idx;
        navigate(-1);
    };

    const tokens = useMemo(() => {
        if (NETWORK && NETWORK.token && TOKEN_SELECT) {
            let tokenData = [];
            if (TOKEN_SELECT[3]) {
                tokenData = AllNets[TOKEN_SELECT[3]].token;
            } else {
                tokenData = NETWORK.token;
            }
            return tokenData
                .map((e: any, i: number) => ({ ...e, idx: i }))
                .filter((_: any, i: number) => i !== TOKEN_SELECT[2]);
        } else {
            return [];
        }
    }, [NETWORK, TOKEN_SELECT]);

    if (isMobile) {
        return (
            <MobileCard title="Select Currency" back={() => navigate(-1)}>
                <div className="flex flex-col w-full px-5">
                    <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-1 px-4">
                        <SearchIcon className="absolute h-[25px]" />
                        <input
                            className="w-full bg-transparent pl-8"
                            placeholder="Search"
                            onChange={(e: any) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full rounded-lg py-3 mt-5 mb-[100px]">
                        <div className="w-full">
                            {tokens
                                .filter((e: any) => {
                                    const string = e.name.toLowerCase() + ' ' + e.sub.toLowerCase();
                                    return string.search(value.toLocaleLowerCase()) !== -1;
                                })
                                .map(({ name, sub, icon, amount, price, idx }: any, i: number) => (
                                    <div
                                        key={i}
                                        onClick={() => setToken({ name, sub, icon, amount, price, idx })}
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
            </MobileCard>
        );
    } else {
        return (
            <Card title="Select Stable" back={() => navigate(-1)}>
                <div className="flex flex-col w-full">
                    <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-1 px-4">
                        <SearchIcon className="absolute h-[25px]" />
                        <input
                            className="w-full bg-transparent pl-8"
                            placeholder="Search"
                            onChange={(e: any) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full rounded-lg bg-dark py-3 pl-5 mt-5">
                        <div className="h-[450px] overflow-auto w-full pr-5">
                            {tokens
                                .filter((e: any) => {
                                    const string = e.name.toLowerCase() + ' ' + e.sub.toLowerCase();
                                    return string.search(value.toLocaleLowerCase()) !== -1;
                                })
                                .map(({ name, sub, icon, amount, price, idx }: any, i: number) => (
                                    <div
                                        key={i}
                                        onClick={() => setToken({ name, sub, icon, amount, price, idx })}
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
                                            <p className="text-sm font-medium font-Unbounded">{`${amount} ${name}`}</p>
                                            <p className="text-xs font-medium text-light-dark text-right">{`$${price}`}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
};

export default SelectToken;
