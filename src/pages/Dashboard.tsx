import { CardDiv } from 'components/Styled';
import { NETWORK } from 'config/constants/demo';
import { Link } from 'react-router-dom';
import { DemoDataProps } from 'types/config';

const Dashboard = () => {
    return (
        <CardDiv className="p-8">
            <div className="px-10 mb-5">
                <h1 className="text-4xl font-bold font-Unbounded">Welcome, Admin</h1>

                <div className="grid grid-cols-2 gap-4 mt-10">
                    {NETWORK.map(({ name, icon }: DemoDataProps, i: number) => (
                        <Link key={i} to="/stables">
                            <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5">
                                <div className="flex items-center">
                                    <img src={icon} alt="logo" className="h-[38px] w-[38px] rounded-full bg-white" />
                                    <p className="text-base ml-2">{name}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-medium">31</p>
                                    <p className="text-xs">Stables listed</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </CardDiv>
    );
};

export default Dashboard;
