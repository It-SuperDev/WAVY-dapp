import { useNavigate, useParams } from 'react-router-dom';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { PrimaryButton, OutlineButton } from 'components/Styled';
import { ReactComponent as InfoIcon } from 'assets/img/icon/info.svg';
// Constatn
import useConfig from 'hooks/useConfig';
import MobileCard from 'components/MobileCard';

const TopUp = () => {
    const navigate = useNavigate();
    const { index } = useParams();
    const data = useConfig();

    if (data.isMobile) {
        return (
            <MobileCard title="Send">
                <div className="p-5 pt-0">
                    <p className="bg-[#242429] p-4 rounded-lg text-[#B8ACFF] text-xs">
                        The stables have been locked and will be release to each party after a price and an amount has
                        been agreed on or when the order has been cancelled.
                    </p>
                </div>
                <div
                    style={{ height: 'calc(100vh - 120px - 72px - 8px)' }}
                    className="bg-[#242429] rounded-t-3xl py-[30px] px-5 flex flex-col justify-between"
                >
                    <div className="w-full">
                        <ValueInput
                            title="Amount"
                            available={`Available: 2500.33 ${data.NETWORK.send.send.name}`}
                            value={0.0}
                            tokenList={[data.NETWORK.send.send]}
                        />

                        <p className="text-[#B8ACFF] relative -top-5">{data.NETWORK.send.list[index].rate}</p>

                        <ValueInput title="Receive" value={0.0} tokenList={[data.NETWORK.send.receive]} />

                        <div className="py-3 px-6 mt-4 mb-10 flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-light-dark">Available</span>
                                <span className="text-sm">{data.NETWORK.send.list[index].available}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-light-dark">Limit</span>
                                <span className="text-sm">{data.NETWORK.send.list[index].limit}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <OutlineButton
                            className="text-center text-bold py-4 w-[150px]"
                            onClick={() => navigate('/send')}
                        >
                            Cancel
                        </OutlineButton>
                        <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/send/process')}>
                            Release tokens
                        </PrimaryButton>
                    </div>
                </div>
            </MobileCard>
        );
    } else {
        return (
            <Card title="Send" back={() => navigate(-1)}>
                <div className="flex flex-col w-full">
                    <div className="flex mb-8">
                        <InfoIcon className="w-[30px]" />
                        <p className="text-[#B8ACFF] text-xs ml-2">
                            The stables have been locked and will be release to each party after a price and an amount
                            has been agreed on or when the order has been cancelled.
                        </p>
                    </div>
                    <ValueInput
                        title="Amount"
                        available={`Available: 2500.33 ${data.NETWORK.send.send.name}`}
                        value={0.0}
                        tokenList={[data.NETWORK.send.send]}
                    />
                    <p className="bg-[#090912] rounded-lg py-1 px-6 text-[#B8ACFF] my-4">
                        {data.NETWORK.send.list[index].rate}
                    </p>
                    <ValueInput title="Receive" value={0.0} tokenList={[data.NETWORK.send.receive]} />
                    <div className="bg-[#090912] rounded-lg py-3 px-6 mt-4 mb-10 flex flex-col">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-light-dark">Available</span>
                            <span className="text-xs">{data.NETWORK.send.list[index].available}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-light-dark">Limit</span>
                            <span className="text-xs">{data.NETWORK.send.list[index].limit}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <OutlineButton
                            className="text-center text-bold py-4 w-[150px]"
                            onClick={() => navigate('/send')}
                        >
                            Cancel
                        </OutlineButton>
                        <PrimaryButton className="text-center py-4 w-[150px]" onClick={() => navigate('/send/process')}>
                            Continue
                        </PrimaryButton>
                    </div>
                </div>
            </Card>
        );
    }
};

export default TopUp;
