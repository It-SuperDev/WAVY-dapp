import { useNavigate } from 'react-router-dom';

// icons
import SearchIcon from '@mui/icons-material/Search';

// component
import Card from 'components/Card';

// Constatn
import { DemoDataProps } from 'types/config';
import useConfig from 'hooks/useConfig';

const SelectToken = () => {
    const navigate = useNavigate();
    const data = useConfig();

    return (
        <Card title="Select Stable" back={() => navigate(-1)}>
            <div className="flex flex-col w-full">
                <div className="relative rounded-lg border-[0.6px] border-[#ACACAE] py-1 px-4">
                    <SearchIcon className="absolute" />
                    <input className="w-full bg-transparent pl-8" placeholder="Search" />
                </div>
                <div className="flex flex-col w-full rounded-lg bg-dark py-3 pl-5 mt-5">
                    <div className="h-[450px] overflow-auto w-full pr-5">
                        {data.NETWORK &&
                            data.NETWORK.token.map(({ name, sub, icon, amount, price }: DemoDataProps, i: number) => (
                                <div
                                    key={i}
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
