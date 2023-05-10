import { CardDiv } from 'components/Styled';
import { NETWORK } from 'config/constants/demo';
import useConfig from 'hooks/useConfig';
import { useNavigate } from 'react-router-dom';
import { DemoDataProps } from 'types/config';

const Dashboard = () => {
    const { changeData } = useConfig();
    const nativate = useNavigate();

    const setNet = (one) => {
        changeData({ key: 'SelectedNet', data: one });
        nativate('/stables');
    };

    return (
        <CardDiv className="p-8">
            <div className="px-10 mb-5">
                <h1 className="text-4xl font-bold font-Unbounded">Welcome, Admin</h1>

                <div className="grid grid-cols-2 gap-4 mt-10">
                    {NETWORK.slice(0, -1).map((one: DemoDataProps, i: number) => (
                        <div
                            key={i}
                            onClick={() => setNet(one)}
                            className="flex w-full cursor-pointer items-center justify-between rounded-lg border-[0.6px] border-[#ACACAE] py-4 px-5"
                        >
                            <div className="flex items-center">
                                <img src={one.icon} alt="logo" className="h-[38px] w-[38px] rounded-full bg-white" />
                                <p className="text-base ml-2">{one.name}</p>
                            </div>
                            <div className="text-center ml-10">
                                <p className="text-xl font-medium">{one.token.length}</p>
                                <p className="text-xs">Stables listed</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CardDiv>
    );
};

export default Dashboard;
