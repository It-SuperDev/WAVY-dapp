import styled from 'styled-components';

export const HeaderButton = styled.button`
    border-radius: 10px;
    font-family: CoinbaseDisplay;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 16px;

    img {
        width: 24px;
        height: 24px;
    }
`;

export const ConnectButton = styled.button`
    background-color: #5a4ee8;
    font-family: CoinbaseDisplay;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
`;

export const IconButton = styled.button`
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
        width: 24px;
        height: 24px;
    }
`;

export const CardDiv = styled.div`
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(36, 36, 41, 0) 0%, #242429 100%);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0px;
`;

export const PrimaryButton = styled.button`
    background-color: #5a4ee8;
    border-radius: 8px;
    cursor: pointer;
`;

export const OutlineButton = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
`;

export const WhiteButton = styled.button`
    background-color: #fff;
    border-radius: 8px;
    color: #151518;
    cursor: pointer;
`;

export const Input = styled.input`
    padding: 0;
    border: unset;
    font-size: 32px;
    line-height: 1;
    color: #ffffff;
    margin-top: 4px;
    background-color: transparent;
`;

export const HInput = styled.input`
    padding: 0;
    border: unset;
    line-height: 1;
    color: #ffffff;
    background-color: transparent;
`;
