import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_METHOD, WITHDRAW_METHOD } from 'config/constants/demo';

// component
import Card from 'components/Card';
import { DemoDataProps } from 'types/config';

const Method = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const data = pathname === '/top-up/method' ? TOP_METHOD : WITHDRAW_METHOD;

    return (
        <Card title={pathname === '/top-up/method' ? 'Top Up Method' : 'Withdrawal Method'} back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <p className="text-center mb-5 text-xs">
                    {pathname === '/top-up/method'
                        ? 'Select how you want to Top Up '
                        : 'Select the destination to withdraw your stablecoin'}
                </p>
                {data &&
                    data.map(({ name, sub, icon }: DemoDataProps, i: number) => (
                        <div
                            key={i}
                            className="py-3 px-6 rounded-lg bg-dark-primary w-full flex justify-between items-center cursor-pointer my-2"
                        >
                            <div className="flex items-center">
                                <img src={icon} alt="icon" className="h-[30px] w-[30px]" />
                                <div className="ml-4">
                                    <p className="text-md font-medium">{name}</p>
                                    <p className="text-xs text-light-dark">{sub}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Card>
    );
};
export default Method;
