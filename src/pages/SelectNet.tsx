import { useNavigate } from 'react-router-dom';

// component
import Card from 'components/Card';

// Constatn
import { NETWORK } from 'config/constants/demo';
import { DemoDataProps } from 'types/config';

const SelectNet = () => {
    const navigate = useNavigate();

    return (
        <Card title="Select network" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <div className="h-[450px] overflow-auto w-full">
                    {NETWORK.map(({ sub, icon }: DemoDataProps, i: number) => (
                        <div
                            key={i}
                            className="flex items-center bg-dark-primary py-3 cursor-pointer rounded-lg px-4 mb-3"
                        >
                            <div className="flex items-center">
                                <div className="flex items-center justify-center border-2 border-[#FFFFFF] rounded-full mr-3">
                                    <img src={icon} alt="icon" className="w-[25px] h-[25px] bg-white rounded-full" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium font-coinmedium">{sub}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default SelectNet;
