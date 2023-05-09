import { useNavigate } from 'react-router-dom';

// Icon
import ngncIcon from 'assets/img/coin/ngnc.svg';

// component
import Card from 'components/Card';
import ValueInput from 'components/ValueInput';
import { Input, PrimaryButton } from 'components/Styled';

// Constatn
import { TOKEN_LIST } from 'config/constants/demo';

const NewOffer = () => {
    const navigate = useNavigate();

    return (
        <Card title="Create a new offer" back={() => navigate(-1)} lg={650}>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between mb-10">
                    <ValueInput
                        title="Send"
                        available="Available: 30000 TZS"
                        value={0.0}
                        tokenList={TOKEN_LIST}
                        classes="mr-2"
                    />

                    <ValueInput title="Receive" value={0.0} tokenList={TOKEN_LIST} />
                </div>
                <div>
                    <p className="text-sm">Exchange rate</p>
                    <div className="flex items-center">
                        <p className="text-2xl">1 NGNC =</p>
                        <div className="flex rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] ml-10">
                            <div className="text-3xl mr-20">0</div>
                            <div className="flex items-center w-full cursor-pointer">
                                <img src={ngncIcon} alt="token" className="w-[24px] h-[24px]" />
                                <span className="text-base mx-2">TZS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <p className="text-2xl mb-2">Set order limit</p>
                    <div className="flex items-center">
                        <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                            <span className="text-sm">Min. order (NGNC)</span>
                            <Input type="number" defaultValue={1} className="" />
                        </div>
                        <div className="text-3xl mx-5">-</div>
                        <div className="flex flex-col rounded-lg border-[0.6px] px-5 py-2 border-[#ACACAE}] w-[35%] ">
                            <span className="text-sm">Max. order (NGNC)</span>
                            <Input type="number" defaultValue={500} className="" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <PrimaryButton className="text-center mt-10 py-4 w-[60%]" onClick={() => navigate('confirm')}>
                        Create an offer
                    </PrimaryButton>
                </div>
            </div>
        </Card>
    );
};

export default NewOffer;
