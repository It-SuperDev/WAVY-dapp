import { useNavigate, Link } from 'react-router-dom';

// Icon
import { ReactComponent as BankIcon } from '../assets/img/icon/bank.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton } from 'components/Styled';

// Constatn
import useConfig from 'hooks/useConfig';
import { useEffect } from 'react';
import { FLAG } from 'config/constants/demo';

const TopUp = () => {
    const navigate = useNavigate();
    const data = useConfig();

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

    useEffect(() => {
        if (!data.WITHDRAW) {
            data.changeData({ key: 'WITHDRAW', data: getMatch(data.NETWORK.topUp.first.name) });
        }
        // eslint-disable-next-line
    }, []);

    if (!data.WITHDRAW) return null;
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
};

export default TopUp;
