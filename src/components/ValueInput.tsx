import { useState } from 'react';

// Icon
import { ReactComponent as KeyboardArrowDownIcon } from 'assets/img/icon/chevron-down.svg';

import { Input } from './Styled';
import useConfig from 'hooks/useConfig';

const ValueInput = ({ title, value, available, token, classes, disable, hideTitle, onChange }: any) => {
    const data = useConfig();

    const [val, setVal] = useState(value);
    const [isError, setIsError] = useState(false);

    const handleValue = (e: any) => {
        setVal(e.target.value);
        if (available) {
            setIsError(e.target.value > token.amount);
        }
    };

    const changeToken = () => {
        onChange && onChange();
    };

    if (data.isMobile) {
        return (
            <div>
                <div className="flex w-full align-center justify-between mb-3">
                    <span className="text-sm text-light-dark">{title && !hideTitle ? title : ''}</span>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <div
                        className={`${classes} flex flex-col rounded-lg w-full border-[0.6px] px-5 py-2`}
                        style={{ borderColor: isError ? '#FF0004' : '#ACACAE' }}
                    >
                        <div className="flex flex-row w-full align-center justify-start">
                            <Input
                                type="number"
                                min="0"
                                pattern="[0-9]*"
                                value={val}
                                onChange={handleValue}
                                className="w-1/2"
                                style={{ fontSize: '18px !important' }}
                            />
                            <div className="flex items-center justify-center">
                                <div
                                    className="flex items-center w-full cursor-pointer border-l-[1px] border-[#ACACAE] pl-8"
                                    onClick={changeToken}
                                >
                                    <img src={token.icon} alt="token" className="w-[28px] h-[28px] rounded-full" />
                                    <span className="text-sm ml-2 ">{token.name}</span>
                                    {onChange ? <KeyboardArrowDownIcon className="mx-2 w-3" /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    {disable && <div className="absolute w-full h-full top-0 left-0 bg-[#00000082]" />}
                </div>
                <p className="text-sm text-right mt-4">{available ? `Available: ${token.amount} ${token.name}` : ''}</p>
            </div>
        );
    } else {
        return (
            <div
                className={`${classes} flex flex-col rounded-lg w-full border-[0.6px] px-5 py-2`}
                style={{ borderColor: isError ? '#FF0004' : '#ACACAE' }}
            >
                <div className="flex w-full align-center justify-between">
                    <span className="text-sm">{title && !hideTitle ? title : ''}</span>
                    <span className="text-sm">{available ? `Available: ${token.amount} ${token.name}` : ''}</span>
                </div>
                <div className="flex flex-row w-full align-center justify-between">
                    <div className="flex flex-col w-4/5">
                        <Input type="number" value={val} onChange={handleValue} className="w-full" />
                        {isError ? <span className="text-xs text-rose-700">Insufficient balance</span> : null}
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center w-full cursor-pointer min-w-[84px]" onClick={changeToken}>
                            <img src={token.icon} alt="token" className="w-[28px] h-[28px] rounded-full" />
                            <span className="text-sm ml-2 mr-1 ">{token.name}</span>
                            {onChange ? <KeyboardArrowDownIcon className="w-4" /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ValueInput;
