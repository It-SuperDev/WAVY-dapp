import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { VlaueInputProps } from 'types/utils';
import { Input } from './Styled';
import useConfig from 'hooks/useConfig';

const ValueInput = ({ title, value, available, error, errorMessage, tokenList, classes }: VlaueInputProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const data = useConfig();
    const { changeData } = data;

    const goSelect = () => {
        if (tokenList.length > 1) {
            changeData({ key: 'token', data: { key: title, required: true, data: {} } });
            if (pathname === '/top-up' || pathname === '/withdraw') {
                navigate('/select?before=' + pathname);
            } else {
                navigate('/select');
            }
        }
    };

    const [val, setVal] = useState(value);
    const [isError, setIsError] = useState(false);
    const [limit, setLimit] = useState<number | null>();

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [avail, setAvail] = useState('');

    useEffect(() => {
        setVal(value);
    }, [value]);

    useEffect(() => {
        if (available) {
            const num = available.split(' ')[1];
            if (num && Number(num)) setLimit(Number(num));
            setAvail(available);
        }
    }, [available]);

    useEffect(() => {
        console.log(tokenList);
        setName(tokenList[0].name);
        setIcon(tokenList[0].icon);
    }, [tokenList]);

    const handleValue = (e: any) => {
        setVal(e.target.value);
        if (available && limit) {
            setIsError(e.target.value > limit);
        }
    };

    useEffect(() => {
        if (data.token && data.token.key === title && !data.token.required) {
            const token = data.token.data;
            setName(token.name);
            setIcon(token.icon);
            setAvail(`Available: ${token.amount}`);
            const num = token.amount.split(' ')[0];
            if (num && Number(num)) setLimit(Number(num));
        }
    }, [data, title]);

    return (
        <div
            className={`${classes} flex flex-col rounded-lg w-full border-[0.6px] px-5 py-2`}
            style={{ borderColor: isError ? '#FF0004' : '#ACACAE' }}
        >
            <div className="flex w-full align-center justify-between">
                <span className="text-sm">{title ? title : ''}</span>
                <span className="text-sm">{avail ? avail : ''}</span>
            </div>
            <div className="flex flex-row w-full align-center justify-between">
                <div className="flex flex-col w-4/5">
                    <Input type="number" value={val} onChange={handleValue} className="w-full" />
                    {isError ? <span className="text-xs text-rose-700">Insufficient balance</span> : null}
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center w-full cursor-pointer" onClick={goSelect}>
                        <img src={icon} alt="token" className="w-[28px] h-[28px] rounded-full" />
                        <span className="text-sm ml-2 ">{name}</span>
                        {tokenList.length > 1 ? <KeyboardArrowDownIcon className="mx-2" /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueInput;
