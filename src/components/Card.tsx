// Icon
import { ReactComponent as BackIcon } from '../assets/img/icon/arrow_back.svg';

// Styled
import { CardDiv } from './Styled';

const Card = ({ children, title, back, lg }: { children: any; title?: string; back?: any; lg?: number }) => {
    return (
        <CardDiv className={lg ? `py-7 min-h-[500px] w-[650px]` : 'py-7 min-h-[500px] w-[550px]'}>
            <div className="flex items-center justify-center relative mb-10 mx-[24px]">
                {back && (
                    <div
                        onClick={back}
                        className="absolute left-0 flex justify-center items-center p-1 rounded-full hover:bg-[#ffffff1a] cursor-pointer"
                    >
                        <BackIcon className="h-7 w-7" />
                    </div>
                )}
                {title && <h2 className="text-center text-3xl font-bold textcoinmedium ">{title}</h2>}
            </div>
            <div className="flex flex-col items-center px-[64px]">{children}</div>
        </CardDiv>
    );
};

export default Card;
